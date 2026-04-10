// Breakout Room Server — Node.js (zero dependencies)
// Serves static files + real-time data API via SSE
const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");
const crypto = require("crypto");
let QRCode;
try { QRCode = require("qrcode"); } catch(e) {
  try { QRCode = require(path.join(__dirname, "..", "node_modules", "qrcode")); } catch(e2) {
    console.warn("⚠️ qrcode module not found, QR API disabled. Run: npm install qrcode");
  }
}

const PORT = process.env.PORT || 8080;
const MIME = { ".html": "text/html", ".css": "text/css", ".js": "application/javascript", ".png": "image/png", ".svg": "image/svg+xml", ".json": "application/json", ".ico": "image/x-icon" };

// In-memory store: { aulaX_blocoY: { alfa: [...], beta: [...], gamma: [...], delta: [...] } }
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
  for (const res of sseClients) { try { res.write(msg); } catch(e) { sseClients.delete(res); } }
}

const server = http.createServer((req, res) => {
  const parsed = url.parse(req.url, true);
  const pathname = parsed.pathname;

  // CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") { res.writeHead(200); res.end(); return; }

  // API: Submit response
  if (pathname === "/api/submit" && req.method === "POST") {
    let body = "";
    req.on("data", c => body += c);
    req.on("end", () => {
      try {
        const { aula, bloco, grupo, nome, resposta } = JSON.parse(body);
        const room = ensureRoom(aula, bloco);
        const g = grupo.toLowerCase();
        if (!room[g]) { res.writeHead(400); res.end(JSON.stringify({ error: "Grupo inválido" })); return; }
        const entry = { id: crypto.randomUUID(), nome, resposta, ts: Date.now() };
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
        const k = getKey(aula, bloco);
        store[k] = { alfa: [], beta: [], gamma: [], delta: [] };
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
        for (let b = 1; b <= 4; b++) { store[getKey(aula, b)] = { alfa: [], beta: [], gamma: [], delta: [] }; }
        broadcast({ type: "reset_aula", aula });
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ ok: true }));
      } catch(e) { res.writeHead(400); res.end(JSON.stringify({ error: e.message })); }
    });
    return;
  }

  // API: Generate QR Code as SVG
  if (pathname === "/api/qr" && req.method === "GET") {
    const { text, color } = parsed.query;
    if (!text || !QRCode) { res.writeHead(400); res.end("Missing text param or qrcode module"); return; }
    QRCode.toString(decodeURIComponent(text), {
      type: "svg",
      color: { dark: color || "#FFFFFF", light: "#0d111700" },
      margin: 2,
      width: 256
    }, (err, svg) => {
      if (err) { res.writeHead(500); res.end(err.message); return; }
      res.writeHead(200, { "Content-Type": "image/svg+xml", "Cache-Control": "public, max-age=3600" });
      res.end(svg);
    });
    return;
  }

  // API: Generate QR Code as data URL (for embedding)
  if (pathname === "/api/qr-data" && req.method === "GET") {
    const { text, color } = parsed.query;
    if (!text || !QRCode) { res.writeHead(400); res.end(JSON.stringify({error:"Missing text or qrcode module"})); return; }
    QRCode.toDataURL(decodeURIComponent(text), {
      color: { dark: color || "#FFFFFF", light: "#0d1117" },
      margin: 2,
      width: 280
    }, (err, dataUrl) => {
      if (err) { res.writeHead(500); res.end(JSON.stringify({error:err.message})); return; }
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ dataUrl }));
    });
    return;
  }

  // SSE: Real-time updates
  if (pathname === "/api/stream") {
    res.writeHead(200, { "Content-Type": "text/event-stream", "Cache-Control": "no-cache", "Connection": "keep-alive" });
    res.write("data: {\"type\":\"connected\"}\n\n");
    sseClients.add(res);
    req.on("close", () => sseClients.delete(res));
    return;
  }

  // Static files
  let filePath = pathname === "/" ? "/index.html" : pathname;
  filePath = path.join(__dirname, filePath);
  const ext = path.extname(filePath);
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    res.writeHead(200, { "Content-Type": MIME[ext] || "text/plain" });
    fs.createReadStream(filePath).pipe(res);
  } else {
    // Try .html extension
    if (fs.existsSync(filePath + ".html")) {
      res.writeHead(200, { "Content-Type": "text/html" });
      fs.createReadStream(filePath + ".html").pipe(res);
    } else {
      res.writeHead(404);
      res.end("404 Not Found");
    }
  }
});

server.listen(PORT, "0.0.0.0", () => {
  const nets = require("os").networkInterfaces();
  let localIP = "localhost";
  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      if (net.family === "IPv4" && !net.internal) { localIP = net.address; break; }
    }
  }
  console.log(`\n🚀 Breakout Room Server rodando!`);
  console.log(`   Local:   http://localhost:${PORT}`);
  console.log(`   Rede:    http://${localIP}:${PORT}`);
  console.log(`\n📱 Página do aluno:     http://${localIP}:${PORT}/aluno.html?aula=1&grupo=alfa`);
  console.log(`📊 Painel professor:    http://${localIP}:${PORT}/professor.html`);
  console.log(`📎 QR Codes:            http://${localIP}:${PORT}/qrcodes.html?aula=1`);
  console.log(`\nPressione Ctrl+C para parar.\n`);
});
