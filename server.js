// Breakout Room Server — Node.js
// Serves static files + real-time data API via SSE
const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");
const crypto = require("crypto");

// QRCode — optional, loaded safely
let QRCode = null;
try { QRCode = require("qrcode"); console.log("✅ qrcode module loaded"); } catch(e) {
  console.warn("⚠️ qrcode not found via require('qrcode'), trying local...");
  try { QRCode = require(path.join(__dirname, "node_modules", "qrcode")); console.log("✅ qrcode loaded from local node_modules"); } catch(e2) {
    console.warn("⚠️ qrcode module not available. QR API will generate fallback.");
  }
}

// UUID helper (compatible with Node 14+)
function uuid() {
  if (crypto.randomUUID) return crypto.randomUUID();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
    const r = Math.random() * 16 | 0;
    return (c === "x" ? r : (r & 0x3 | 0x8)).toString(16);
  });
}

const PORT = process.env.PORT || 8080;
const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css",
  ".js": "application/javascript; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".json": "application/json",
  ".ico": "image/x-icon"
};

// In-memory store
const store = {};
const sseClients = new Set();

function getKey(aula, bloco) { return `aula${aula}_bloco${bloco}`; }
function ensureRoom(aula, bloco) {
  const k = getKey(aula, bloco);
  if (!store[k]) store[k] = { alfa: [], beta: [], gamma: [], delta: [] };
  return store[k];
}
function broadcast(data) {
  const msg = `data: ${JSON.stringify(data)}\n\n`;
  const dead = [];
  for (const res of sseClients) {
    try { res.write(msg); } catch(e) { dead.push(res); }
  }
  dead.forEach(r => sseClients.delete(r));
}

// Simple SVG QR fallback (generates a "scan me" placeholder if qrcode module missing)
function fallbackQR(text, color) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256">
    <rect width="256" height="256" fill="#0d1117"/>
    <rect x="20" y="20" width="216" height="216" rx="12" fill="none" stroke="${color || '#fff'}" stroke-width="3" stroke-dasharray="8,4"/>
    <text x="128" y="110" text-anchor="middle" fill="${color || '#fff'}" font-family="sans-serif" font-size="16" font-weight="bold">QR CODE</text>
    <text x="128" y="140" text-anchor="middle" fill="#8b949e" font-family="sans-serif" font-size="11">Use o link abaixo</text>
    <text x="128" y="165" text-anchor="middle" fill="#58a6ff" font-family="sans-serif" font-size="9">${text.substring(0,40)}</text>
  </svg>`;
}

// Load AI knowledge base from file
let AI_KNOWLEDGE = {};
try { AI_KNOWLEDGE = require(path.join(__dirname, "ai-knowledge.js")).AI_KNOWLEDGE; console.log("✅ AI knowledge loaded"); } catch(e) { console.warn("⚠️ ai-knowledge.js not found"); }

// AI answer engine using real course content
function generateLocalAnswer(q, ctx) {
  const ql = (q || "").toLowerCase();
  const aulaNum = parseInt((ctx || "").match(/Aula (\d)/)?.[1]) || 4;
  
  // Search through accumulated knowledge for this aula
  for (let a = 1; a <= aulaNum; a++) {
    const entries = AI_KNOWLEDGE[a] || [];
    for (const entry of entries) {
      if (entry.q.some(k => ql.includes(k.toLowerCase()))) {
        return entry.a;
      }
    }
  }
  
  // Check if topic exists in FUTURE aulas
  for (let a = aulaNum + 1; a <= 4; a++) {
    const entries = AI_KNOWLEDGE[a] || [];
    for (const entry of entries) {
      if (entry.q.some(k => ql.includes(k.toLowerCase()))) {
        return `Este tema será abordado na Aula ${a}. Por enquanto, foque no conteúdo da aula atual (Aula ${aulaNum}).`;
      }
    }
  }
  
  return `Sobre "${q}": Este tema não faz parte diretamente do conteúdo coberto até a Aula ${aulaNum}. Pode ser um tema complementar — consulte o Guia do Professor ou os slides da aula correspondente.`;
}

// Legacy fallback (kept for compatibility but replaced by ai-knowledge.js)
const _legacyAnswers = [
    { keys: ["ooda","observar","orientar","decidir","agir"], a: "OODA Loop (John Boyd): Observar→Orientar→Decidir→Agir. Ciclo de decisão rápida. Quanto mais rápido o ciclo, maior a vantagem competitiva. Use para decisões táticas em ambientes incertos." },
    { keys: ["3m","algoritmo","minimo esforço","melhor desempenho"], a: "Algoritmo 3M: Melhor Desempenho + Máxima Segurança + Mínimo Esforço. 'Mínimo Esforço' não é preguiça — é eficiência máxima: eliminar desperdícios e focar no essencial." },
    { keys: ["sbi","feedback","situação","comportamento","impacto"], a: "Modelo SBI: Situação (quando/onde) + Comportamento (o que observou) + Impacto (qual o efeito). Ex: 'Na reunião de hoje (S), você apresentou dados claros (B), isso convenceu o board (I).' Sempre foque no comportamento, não na pessoa." },
    { keys: ["aristoteles","aristóteles","google","segurança psicológica","5 pilares"], a: "Projeto Aristóteles (Google): 5 pilares em ordem: 1.Segurança Psicológica (#1!), 2.Confiabilidade, 3.Estrutura e Clareza, 4.Significado, 5.Impacto. Não importa QUEM está na equipe, mas COMO trabalham juntos." },
    { keys: ["scarf","status","certainty","autonomy","relatedness","fairness"], a: "Modelo SCARF (David Rock): Status, Certainty, Autonomy, Relatedness, Fairness. Quando qualquer domínio é ameaçado → modo fight/flight. Quando recompensado → engajamento." },
    { keys: ["growth mindset","fixed mindset","dweck","nadella","learn-it-all"], a: "Growth Mindset (Dweck): Habilidades podem ser desenvolvidas com esforço. Nadella transformou Microsoft de 'know-it-all' para 'learn-it-all'. Resultado: $300B→$3T em valor." },
    { keys: ["grit","duckworth","perseverança","paixão"], a: "GRIT (Duckworth): Paixão + Perseverança a longo prazo. Talento×Esforço=Habilidade, Habilidade×Esforço=Realização. Esforço conta 2x!" },
    { keys: ["antifragil","antifrágil","taleb"], a: "Antifragilidade (Taleb): Frágil=quebra com estresse, Resiliente=resiste, Antifrágil=fica MAIS FORTE. Como músculo: micro-lesões→crescimento." },
    { keys: ["schein","iceberg","cultura","pressupostos"], a: "Iceberg de Schein: 3 níveis — Artefatos Visíveis (10%), Valores Declarados (20%), Pressupostos Básicos (70%). Pressupostos são crenças tácitas que realmente guiam decisões." },
    { keys: ["cvf","clã","adhocracia","hierarquia","mercado","competing values"], a: "CVF (Quinn): 4 culturas — Clã (colaboração), Adhocracia (inovação), Hierarquia (controle), Mercado (competição). Nenhuma empresa é 100% um tipo." },
    { keys: ["netflix","keeper test","freedom","responsibility"], a: "Netflix: Freedom & Responsibility. Keeper Test: 'Se pedisse para sair, eu lutaria para mantê-lo?' Contexto sobre controle. Feedback radical e transparência." },
    { keys: ["spotify","squad","tribe","chapter","guild"], a: "Spotify Model: Squads (6-12, autônomos), Tribes (agrupamento), Chapters (especialistas cross-squad), Guilds (comunidades voluntárias). Alinhamento com autonomia." },
    { keys: ["zappos","holocracia","onboarding"], a: "Zappos: Holocracia (sem hierarquia), Onboarding 4 semanas, Teste do $2.000 (quem aceita não tem fit cultural)." },
    { keys: ["kotter","8 passos","mudança","urgência"], a: "Kotter 8 Passos: 1.Urgência, 2.Coalizão, 3.Visão, 4.Comunicar, 5.Empoderar, 6.Vitórias curtas, 7.Consolidar, 8.Ancorar na cultura. 75% da liderança deve estar convencida antes de começar." },
    { keys: ["adkar","awareness","desire","knowledge","ability","reinforcement"], a: "ADKAR (Prosci): Awareness→Desire→Knowledge→Ability→Reinforcement. Complementa Kotter: Kotter=organizacional, ADKAR=individual." },
    { keys: ["okr","objective","key result","cfr"], a: "OKRs: Objective (qualitativo, inspirador) + Key Results (quantitativos, mensuráveis). CFRs: Conversas, Feedback, Reconhecimento. NSM: North Star Metric." },
    { keys: ["radical candor","kim scott","ruinous empathy","empatia destrutiva"], a: "Radical Candor (Kim Scott): Cuidar Pessoalmente + Desafiar Diretamente. 4 quadrantes: Radical Candor (ideal), Ruinous Empathy (mais comum!), Obnoxious Aggression, Manipulative Insincerity." },
    { keys: ["eisenhower","urgente","importante","priorização","priorizar"], a: "Matriz de Eisenhower: Urgente+Importante=Fazer agora. Não Urgente+Importante=AGENDAR (viva aqui!). Urgente+Não Importante=Delegar. Não Urgente+Não Importante=Eliminar." },
    { keys: ["tuckman","forming","storming","norming","performing"], a: "Tuckman: Forming→Storming→Norming→Performing→Adjourning. Muitas equipes ficam presas no Storming. O líder acelera para Performing." },
    { keys: ["design thinking","empatia","ideação","prototipagem"], a: "Design Thinking: Empatia→Definição→Ideação→Prototipagem→Teste. Case Airbnb: fotos profissionais salvaram a empresa. A solução foi empatia, não código." },
    { keys: ["lean startup","mvp","build-measure-learn","pivotar"], a: "Lean Startup (Ries): Build-Measure-Learn. MVP=menor versão que testa hipótese. Pivotar=mudar direção com base em dados, não medo." },
    { keys: ["pdi","plano de desenvolvimento"], a: "PDI: Competência-alvo + Meta SMART + Ações concretas + Indicadores + Prazo. Revisão mensal. 70% experiência, 20% social, 10% formal." },
    { keys: ["covey","7 hábitos","habitos"], a: "7 Hábitos de Covey: 1.Proatividade, 2.Começar com o fim, 3.Primeiro o mais importante, 4.Ganha-ganha, 5.Compreender primeiro, 6.Sinergizar, 7.Afiar a serra." },
    { keys: ["cialdini","influência","reciprocidade","prova social"], a: "6 Princípios de Cialdini: 1.Reciprocidade (dê primeiro), 2.Compromisso, 3.Prova Social, 4.Afinidade, 5.Autoridade, 6.Escassez. Influência ≠ Manipulação." },
    { keys: ["30-60-90","plano de ação"], a: "Plano 30-60-90: 30 dias=Aprender (diagnóstico, stakeholders, 1:1s), 60 dias=Contribuir (OKRs, quick wins, rituais), 90 dias=Liderar (escalar, PDIs, legado)." },
    { keys: ["people analytics","turnover","engajamento"], a: "People Analytics: Dados para decisão de pessoas. Pode prever turnover com 85%+ de acurácia. Métricas: eNPS, turnover, PDI ativo, frequência de 1:1s, absenteísmo." },
    { keys: ["sbar","situation","background","assessment","recommendation"], a: "SBAR: Situation (o que acontece), Background (contexto), Assessment (análise), Recommendation (proposta). Usado em hospitais e negócios para comunicação clara." },
  ];
  // Legacy answers not used — see generateLocalAnswer above
  return `Sobre "${q}": Consulte o material da aula.`;
}

const server = http.createServer((req, res) => {
  try {
    const parsed = url.parse(req.url, true);
    const pathname = parsed.pathname;

    // CORS
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    if (req.method === "OPTIONS") { res.writeHead(200); res.end(); return; }

    // Health check
    if (pathname === "/health") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ status: "ok", uptime: process.uptime(), qrcode: !!QRCode }));
      return;
    }

    // API: Submit response
    if (pathname === "/api/submit" && req.method === "POST") {
      let body = "";
      req.on("data", c => { body += c; if (body.length > 1e6) req.destroy(); });
      req.on("end", () => {
        try {
          const { aula, bloco, grupo, nome, resposta } = JSON.parse(body);
          const room = ensureRoom(aula, bloco);
          const g = (grupo || "").toLowerCase();
          if (!room[g]) { res.writeHead(400); res.end(JSON.stringify({ error: "Grupo inválido" })); return; }
          const entry = { id: uuid(), nome: nome || "Anônimo", resposta: resposta || "", ts: Date.now() };
          room[g].push(entry);
          broadcast({ type: "new_response", aula, bloco, grupo: g, entry });
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ ok: true, entry }));
        } catch(e) { res.writeHead(400); res.end(JSON.stringify({ error: e.message })); }
      });
      return;
    }

    // API: Get responses
    if (pathname === "/api/responses" && req.method === "GET") {
      const { aula, bloco } = parsed.query;
      const room = ensureRoom(aula || 1, bloco || 1);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(room));
      return;
    }

    // API: Reset room
    if (pathname === "/api/reset" && req.method === "POST") {
      let body = "";
      req.on("data", c => body += c);
      req.on("end", () => {
        try {
          const { aula, bloco } = JSON.parse(body);
          store[getKey(aula, bloco)] = { alfa: [], beta: [], gamma: [], delta: [] };
          broadcast({ type: "reset", aula, bloco });
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ ok: true }));
        } catch(e) { res.writeHead(400); res.end(JSON.stringify({ error: e.message })); }
      });
      return;
    }

    // API: Reset ALL for an aula
    if (pathname === "/api/reset-aula" && req.method === "POST") {
      let body = "";
      req.on("data", c => body += c);
      req.on("end", () => {
        try {
          const { aula } = JSON.parse(body);
          for (let b = 1; b <= 4; b++) store[getKey(aula, b)] = { alfa: [], beta: [], gamma: [], delta: [] };
          broadcast({ type: "reset_aula", aula });
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ ok: true }));
        } catch(e) { res.writeHead(400); res.end(JSON.stringify({ error: e.message })); }
      });
      return;
    }

    // API: Generate QR Code as SVG
    if (pathname === "/api/qr" && req.method === "GET") {
      const text = parsed.query.text ? decodeURIComponent(parsed.query.text) : "";
      const color = parsed.query.color ? decodeURIComponent(parsed.query.color) : "#FFFFFF";
      if (!text) { res.writeHead(400); res.end("Missing text param"); return; }

      if (QRCode) {
        QRCode.toString(text, {
          type: "svg", color: { dark: color, light: "#00000000" }, margin: 2, width: 256
        }, (err, svg) => {
          if (err) { res.writeHead(200, { "Content-Type": "image/svg+xml" }); res.end(fallbackQR(text, color)); return; }
          res.writeHead(200, { "Content-Type": "image/svg+xml", "Cache-Control": "public, max-age=3600" });
          res.end(svg);
        });
      } else {
        res.writeHead(200, { "Content-Type": "image/svg+xml" });
        res.end(fallbackQR(text, color));
      }
      return;
    }

    // API: AI Chat proxy (uses Genspark web_search for answers)
  if (pathname === "/api/ai-chat" && req.method === "POST") {
    let body = "";
    req.on("data", c => { body += c; if (body.length > 50000) req.destroy(); });
    req.on("end", async () => {
      try {
        const { question, context, aula } = JSON.parse(body);
        // Use gsk web_search + summarize approach via fetch to Genspark API
        const gskKey = process.env.GSK_API_KEY || "";
        const baseUrl = process.env.GSK_BASE_URL || "https://www.genspark.ai";
        
        if (!gskKey) {
          // Fallback: generate a helpful response locally without API
          const fallback = generateLocalAnswer(question, `Aula ${aula || 4}. ${context || ""}`);
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ answer: fallback, source: "local" }));
          return;
        }

        // Call Genspark API
        const https = require("https");
        const apiUrl = new URL("/api/v1/chat/completions", baseUrl);
        const payload = JSON.stringify({
          model: "genspark",
          messages: [
            { role: "system", content: `Você é um assistente do Prof. Victor Atui no MBA FIAP 2026 - Liderança e Gestão de Equipes de Alto Desempenho. Responda de forma clara, concisa e didática baseado no conteúdo do curso. Frameworks do curso: Prontidão, 3M, OODA, SBI, Eisenhower, Tuckman, Aristóteles, SCARF, 16 Competências, Growth Mindset, GRIT, Antifragilidade, Schein, CVF, Netflix/Zappos/Spotify, Design Thinking, Lean Startup, Kotter, ADKAR, OKRs, Radical Candor, People Analytics. Contexto da atividade atual: ${context || "aula em andamento"}` },
            { role: "user", content: question }
          ],
          max_tokens: 500
        });

        const apiReq = https.request(apiUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json", "Authorization": `Bearer ${gskKey}`, "Content-Length": Buffer.byteLength(payload) }
        }, (apiRes) => {
          let data = "";
          apiRes.on("data", c => data += c);
          apiRes.on("end", () => {
            try {
              const result = JSON.parse(data);
              const answer = result.choices?.[0]?.message?.content || "Não consegui gerar resposta. Tente reformular.";
              res.writeHead(200, { "Content-Type": "application/json" });
              res.end(JSON.stringify({ answer, source: "genspark" }));
            } catch(e) {
              res.writeHead(200, { "Content-Type": "application/json" });
              res.end(JSON.stringify({ answer: generateLocalAnswer(question, context), source: "local-fallback" }));
            }
          });
        });
        apiReq.on("error", () => {
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ answer: generateLocalAnswer(question, context), source: "local-error" }));
        });
        apiReq.setTimeout(15000, () => { apiReq.destroy(); });
        apiReq.write(payload);
        apiReq.end();
      } catch(e) {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ answer: "Erro ao processar. Tente novamente.", source: "error" }));
      }
    });
    return;
  }

  // SSE: Real-time updates
    if (pathname === "/api/stream") {
      res.writeHead(200, {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        "X-Accel-Buffering": "no"
      });
      res.write("data: {\"type\":\"connected\"}\n\n");
      sseClients.add(res);
      const keepAlive = setInterval(() => {
        try { res.write(": keepalive\n\n"); } catch(e) { clearInterval(keepAlive); sseClients.delete(res); }
      }, 25000);
      req.on("close", () => { clearInterval(keepAlive); sseClients.delete(res); });
      return;
    }

    // Static files
    let filePath = pathname === "/" ? "/index.html" : pathname;
    filePath = path.join(__dirname, filePath);
    // Security: prevent directory traversal
    if (!filePath.startsWith(__dirname)) { res.writeHead(403); res.end("Forbidden"); return; }

    const ext = path.extname(filePath);
    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      res.writeHead(200, { "Content-Type": MIME[ext] || "text/plain" });
      fs.createReadStream(filePath).pipe(res);
    } else if (fs.existsSync(filePath + ".html")) {
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      fs.createReadStream(filePath + ".html").pipe(res);
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 Not Found");
    }
  } catch(err) {
    console.error("Request error:", err);
    try { res.writeHead(500); res.end("Internal Server Error"); } catch(e) {}
  }
});

// Global error handling
process.on("uncaughtException", (err) => { console.error("Uncaught:", err); });
process.on("unhandledRejection", (err) => { console.error("Unhandled:", err); });

server.listen(PORT, "0.0.0.0", () => {
  console.log(`\n🚀 Breakout Room Server rodando na porta ${PORT}`);
  console.log(`   QRCode module: ${QRCode ? "✅ Ativo" : "⚠️ Fallback SVG"}`);
  console.log(`   Node version: ${process.version}`);
  try {
    const nets = require("os").networkInterfaces();
    for (const name of Object.keys(nets)) {
      for (const net of nets[name]) {
        if (net.family === "IPv4" && !net.internal) {
          console.log(`   Rede: http://${net.address}:${PORT}`);
        }
      }
    }
  } catch(e) {}
  console.log("");
});
