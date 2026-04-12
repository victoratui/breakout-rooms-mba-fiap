// v2 - slides corrigidos do PPTX real - 2026-04-12 12:58
// Roteiro das 4 aulas — slides mapeados do PPTX real
const AULA_DATA = {
  1: {
    titulo: "Aula 1 — O CHAMADO: Fundamentos da Excelência",
    totalSlides: 120,
    blocos: [
      {
        num: 1, titulo: "Fundamentos de Alta Performance",
        inicio: "19:00", fim: "20:00", duracao: 60,
        atividades: [
          { tempo: "19:00", dur: 8, tipo: "dinamica", slide: "1-9", desc: "Abertura + Warm-up: Nota de energia", nota: "Slides: Capa, Professor, Jornada, Agenda, Objetivos, Regras, Mapa, Bloco1, Warm-up" },
          { tempo: "19:08", dur: 12, tipo: "exposicao", slide: "10-18", desc: "Performance, Prontidão, Equipe de Elite", nota: "Cases Elite, Fórmula, 4 Dimensões, Determinação vs Aptidão, 8 Características" },
          { tempo: "19:20", dur: 5, tipo: "enquete", slide: "18", desc: "Enquete: Prontidão da equipe (1-10)", nota: "Mentimeter ou chat" },
          { tempo: "19:25", dur: 15, tipo: "exposicao", slide: "19-34", desc: "3 Pilares, Cultura, Trabalho vs Missão, 3M, 5 Passos", nota: "Protagonista>Figurante>Vítima. Mínimo Esforço=eficiência" },
          { tempo: "19:40", dur: 5, tipo: "enquete", slide: "32", desc: "Reflexão: Qual M é mais desafiador?", nota: "Vote A, B ou C no chat" },
          { tempo: "19:45", dur: 3, tipo: "ia", slide: "35", desc: "🤖 IA: RPA, ML, Case Amazon", nota: "Slide IA ferramentas" },
          { tempo: "19:48", dur: 7, tipo: "quiz", slide: "36-41", desc: "Quiz #1 — 5 questões", nota: "Slides 37-41 = Q1.1 a Q1.5" },
          { tempo: "19:55", dur: 5, tipo: "transicao", slide: "42", desc: "Síntese + transição Bloco 2", nota: "Slide: BLOCO 2" }
        ]
      },
      {
        num: 2, titulo: "OODA Loop e Frameworks",
        inicio: "20:00", fim: "21:00", duracao: 60,
        atividades: [
          { tempo: "20:00", dur: 12, tipo: "exposicao", slide: "43-45", desc: "OODA Loop + Enquete", nota: "Origem, Gestão, Enquete OODA" },
          { tempo: "20:12", dur: 5, tipo: "enquete", slide: "45", desc: "Onde sua equipe trava no OODA?", nota: "A/B/C/D no chat" },
          { tempo: "20:17", dur: 10, tipo: "exposicao", slide: "46-49", desc: "SBI + Eisenhower + Exercício", nota: "Exemplos práticos de feedback" },
          { tempo: "20:27", dur: 5, tipo: "dinamica", slide: "49", desc: "Exercício: 3 tarefas Eisenhower", nota: "Compartilhem no chat" },
          { tempo: "20:32", dur: 5, tipo: "exposicao", slide: "50-51", desc: "Tuckman + Talentos e Seleção", nota: "Em qual estágio está sua equipe?" },
          { tempo: "20:37", dur: 3, tipo: "ia", slide: "52-53", desc: "🤖 IA + Mapeamento oportunidades", nota: "Ferramentas IA para decisão" },
          { tempo: "20:40", dur: 7, tipo: "quiz", slide: "54-59", desc: "Quiz #2 — 5 questões", nota: "Slides 55-59 = Q2.1 a Q2.5" },
          { tempo: "20:47", dur: 3, tipo: "breakout_prep", slide: "60", desc: "📱 QR Codes + Preparar Breakout", nota: "qrcodes.html?aula=1&bloco=2. INTERVALO logo após." }
        ]
      },
      {
        num: 0, titulo: "☕ INTERVALO",
        inicio: "21:00", fim: "21:10", duracao: 10,
        atividades: [
          { tempo: "21:00", dur: 10, tipo: "intervalo", slide: "60", desc: "Intervalo — 10 minutos", nota: "Enquete no Mentimeter. CHAMADA ao retornar." }
        ]
      },
      {
        num: 3, titulo: "Aristóteles e SCARF",
        inicio: "21:10", fim: "22:05", duracao: 55,
        atividades: [
          { tempo: "21:10", dur: 3, tipo: "chamada", slide: "61-62", desc: "📋 CHAMADA + Retorno enquete", nota: "⚠️ FAZER CHAMADA AGORA" },
          { tempo: "21:13", dur: 12, tipo: "exposicao", slide: "63-67", desc: "Aristóteles: 5 pilares + Seg. Psicológica", nota: "Pesquisa Google, Como Criar" },
          { tempo: "21:25", dur: 3, tipo: "enquete", slide: "68", desc: "Enquete: Qual pilar mais deficiente?", nota: "Vote 1-5 no chat" },
          { tempo: "21:28", dur: 8, tipo: "exposicao", slide: "69-70", desc: "SCARF + Aplicação prática", nota: "5 domínios, exemplos do dia a dia" },
          { tempo: "21:36", dur: 10, tipo: "breakout", slide: "71", desc: "👥 BREAKOUT ROOM (8 min) + QR", nota: "Desafio do VP. 4 grupos Teams." },
          { tempo: "21:46", dur: 5, tipo: "debate", slide: "71", desc: "🎤 Debate entre grupos", nota: "1 min por grupo" },
          { tempo: "21:51", dur: 3, tipo: "ia", slide: "72", desc: "🤖 IA Diagnóstico de Equipe", nota: "Power BI, Pulse Surveys" },
          { tempo: "21:54", dur: 8, tipo: "quiz", slide: "73-78", desc: "Quiz #3 — 5 questões", nota: "Slides 74-78 = Q3.1 a Q3.5" }
        ]
      },
      {
        num: 4, titulo: "Plano de Ação",
        inicio: "22:05", fim: "23:00", duracao: 55,
        atividades: [
          { tempo: "22:05", dur: 8, tipo: "exposicao", slide: "79-81", desc: "Valores da Equipe + Exercício", nota: "Mapeamento de valores" },
          { tempo: "22:13", dur: 5, tipo: "exposicao", slide: "82", desc: "Preview Cases: Netflix, Spotify", nota: "" },
          { tempo: "22:18", dur: 8, tipo: "dinamica", slide: "83-84", desc: "Carta ao Eu Futuro", nota: "Atividade privada" },
          { tempo: "22:26", dur: 5, tipo: "exposicao", slide: "85-86", desc: "Desafio 5 Dias + IA", nota: "OODA/Missão/3M/SBI/Reflexão" },
          { tempo: "22:31", dur: 8, tipo: "quiz", slide: "87-92", desc: "Quiz #4 — Integrador", nota: "Slides 88-92 = Q4.1 a Q4.5" },
          { tempo: "22:39", dur: 8, tipo: "exposicao", slide: "93-97", desc: "Resumo + Próxima Aula + Encerramento", nota: "Mensagem: Vocês receberam O CHAMADO" },
          { tempo: "22:47", dur: 10, tipo: "exposicao", slide: "98-119", desc: "Material complementar (se houver tempo)", nota: "Autoavaliação, Cases, IA, Dados, Recursos" },
          { tempo: "22:57", dur: 3, tipo: "avaliacao", slide: "120", desc: "⭐ AVALIAÇÃO + Obrigado!", nota: "⚠️ Formulário FIAP" }
        ]
      }
    ]
  },
  2: {
    titulo: "Aula 2 — O DESENVOLVIMENTO: 16 Competências",
    totalSlides: 121,
    blocos: [
      { num: 1, titulo: "Arquitetura da Liderança", inicio: "19:00", fim: "20:00", duracao: 60,
        atividades: [
          { tempo: "19:00", dur: 3, tipo: "chamada", slide: "1-3", desc: "📋 CHAMADA + Recapitulação", nota: "⚠️ FAZER CHAMADA" },
          { tempo: "19:03", dur: 7, tipo: "dinamica", slide: "4", desc: "Debrief Desafio de 5 Dias", nota: "Voluntários?" },
          { tempo: "19:10", dur: 20, tipo: "exposicao", slide: "5-19", desc: "3 Eixos, 16 Competências, Case Malala + Vídeo", nota: "Vídeo Malala ONU" },
          { tempo: "19:30", dur: 5, tipo: "ia", slide: "20", desc: "🤖 IA: Prompting, Data Literacy", nota: "" },
          { tempo: "19:35", dur: 10, tipo: "breakout", slide: "21-23", desc: "👥 BREAKOUT #1 + QR + Debate", nota: "qrcodes.html?aula=2&bloco=1" },
          { tempo: "19:45", dur: 7, tipo: "quiz", slide: "24-29", desc: "Quiz #1 — 5 questões", nota: "" }
        ]
      },
      { num: 2, titulo: "Eixo Liderança — 6 Competências", inicio: "20:00", fim: "21:00", duracao: 60,
        atividades: [
          { tempo: "20:00", dur: 15, tipo: "exposicao", slide: "30-41", desc: "SBAR, Pyramid, Cialdini, Covey, GROW", nota: "" },
          { tempo: "20:15", dur: 8, tipo: "dinamica", slide: "42", desc: "Autoavaliação 16 competências", nota: "Top 3 Forças e Lacunas" },
          { tempo: "20:23", dur: 3, tipo: "ia", slide: "43", desc: "🤖 IA comunicação", nota: "" },
          { tempo: "20:26", dur: 12, tipo: "breakout", slide: "44-46", desc: "👥 BREAKOUT #2 + QR + Debate", nota: "qrcodes.html?aula=2&bloco=2" },
          { tempo: "20:38", dur: 7, tipo: "quiz", slide: "47-52", desc: "Quiz #2 — 5 questões", nota: "" }
        ]
      },
      { num: 0, titulo: "☕ INTERVALO", inicio: "21:00", fim: "21:10", duracao: 10,
        atividades: [{ tempo: "21:00", dur: 10, tipo: "intervalo", slide: "53", desc: "Intervalo", nota: "CHAMADA ao retornar" }]
      },
      { num: 3, titulo: "Eixo Aprendizado — Growth Mindset", inicio: "21:10", fim: "22:05", duracao: 55,
        atividades: [
          { tempo: "21:10", dur: 3, tipo: "chamada", slide: "54", desc: "📋 CHAMADA", nota: "⚠️ FAZER CHAMADA" },
          { tempo: "21:13", dur: 20, tipo: "exposicao", slide: "55-68", desc: "Growth Mindset, Nadella, Learnability, Método, IA", nota: "" },
          { tempo: "21:33", dur: 12, tipo: "breakout", slide: "69-71", desc: "👥 BREAKOUT #3 + QR + Debate", nota: "qrcodes.html?aula=2&bloco=3" },
          { tempo: "21:45", dur: 7, tipo: "quiz", slide: "72-77", desc: "Quiz #3 — 5 questões", nota: "" }
        ]
      },
      { num: 4, titulo: "Eixo Resiliência — GRIT e PDI", inicio: "22:05", fim: "23:00", duracao: 55,
        atividades: [
          { tempo: "22:05", dur: 15, tipo: "exposicao", slide: "78-88", desc: "GRIT, Antifragilidade, Seg. Psicológica", nota: "" },
          { tempo: "22:20", dur: 8, tipo: "dinamica", slide: "89-90", desc: "Construir PDI", nota: "Template" },
          { tempo: "22:28", dur: 12, tipo: "breakout", slide: "91-93", desc: "👥 BREAKOUT #4 + QR + Debate", nota: "qrcodes.html?aula=2&bloco=4" },
          { tempo: "22:40", dur: 7, tipo: "quiz", slide: "94-99", desc: "Quiz #4 — 5 questões", nota: "" },
          { tempo: "22:47", dur: 10, tipo: "exposicao", slide: "100-118", desc: "Resumo + Complementar + Preview Aula 3", nota: "" },
          { tempo: "22:57", dur: 3, tipo: "avaliacao", slide: "119-121", desc: "⭐ AVALIAÇÃO", nota: "⚠️ Formulário FIAP" }
        ]
      }
    ]
  },
  3: {
    titulo: "Aula 3 — A TRANSFORMAÇÃO: Cultura Organizacional",
    totalSlides: 119,
    blocos: [
      { num: 1, titulo: "Modelos de Cultura", inicio: "19:00", fim: "20:00", duracao: 60,
        atividades: [
          { tempo: "19:00", dur: 3, tipo: "chamada", slide: "1-3", desc: "📋 CHAMADA + Recap Aula 2", nota: "⚠️ FAZER CHAMADA" },
          { tempo: "19:03", dur: 7, tipo: "dinamica", slide: "4-5", desc: "Debrief PDI", nota: "" },
          { tempo: "19:10", dur: 15, tipo: "exposicao", slide: "6-16", desc: "Schein: Iceberg (3 níveis)", nota: "" },
          { tempo: "19:25", dur: 5, tipo: "video", slide: "17", desc: "🎥 Edgar Schein (5 min)", nota: "" },
          { tempo: "19:30", dur: 8, tipo: "exposicao", slide: "18-25", desc: "CVF: 4 quadrantes", nota: "" },
          { tempo: "19:38", dur: 10, tipo: "breakout", slide: "26-28", desc: "👥 BREAKOUT #1 + QR + Debate", nota: "qrcodes.html?aula=3&bloco=1" },
          { tempo: "19:48", dur: 7, tipo: "quiz", slide: "29-34", desc: "Quiz #1 — 5 questões", nota: "" }
        ]
      },
      { num: 2, titulo: "Cases: Netflix, Zappos, Spotify", inicio: "20:00", fim: "21:00", duracao: 60,
        atividades: [
          { tempo: "20:00", dur: 15, tipo: "exposicao", slide: "35-43", desc: "Netflix: Freedom & Responsibility", nota: "" },
          { tempo: "20:15", dur: 5, tipo: "video", slide: "44", desc: "🎥 Netflix Culture (5 min)", nota: "" },
          { tempo: "20:20", dur: 10, tipo: "exposicao", slide: "45-53", desc: "Zappos + Spotify + Comparação", nota: "" },
          { tempo: "20:30", dur: 12, tipo: "breakout", slide: "54-56", desc: "👥 BREAKOUT #2 + QR + Debate", nota: "qrcodes.html?aula=3&bloco=2" },
          { tempo: "20:42", dur: 7, tipo: "quiz", slide: "57-62", desc: "Quiz #2 — 5 questões", nota: "" }
        ]
      },
      { num: 0, titulo: "☕ INTERVALO", inicio: "21:00", fim: "21:10", duracao: 10,
        atividades: [{ tempo: "21:00", dur: 10, tipo: "intervalo", slide: "63", desc: "Intervalo", nota: "CHAMADA ao retornar" }]
      },
      { num: 3, titulo: "Inovação e Transformação", inicio: "21:10", fim: "22:05", duracao: 55,
        atividades: [
          { tempo: "21:10", dur: 3, tipo: "chamada", slide: "64", desc: "📋 CHAMADA", nota: "⚠️ FAZER CHAMADA" },
          { tempo: "21:13", dur: 10, tipo: "exposicao", slide: "65-72", desc: "Open Innovation + Design Thinking", nota: "" },
          { tempo: "21:23", dur: 5, tipo: "video", slide: "73", desc: "🎥 Eric Ries Lean Startup", nota: "" },
          { tempo: "21:28", dur: 8, tipo: "exposicao", slide: "74-80", desc: "Lean Startup + MVP + Ambidestria", nota: "" },
          { tempo: "21:36", dur: 12, tipo: "breakout", slide: "81-83", desc: "👥 BREAKOUT #3 + QR + Debate", nota: "qrcodes.html?aula=3&bloco=3" },
          { tempo: "21:48", dur: 7, tipo: "quiz", slide: "84-89", desc: "Quiz #3 — 5 questões", nota: "" }
        ]
      },
      { num: 4, titulo: "Gestão de Mudanças", inicio: "22:05", fim: "23:00", duracao: 55,
        atividades: [
          { tempo: "22:05", dur: 5, tipo: "video", slide: "90", desc: "🎥 John Kotter (5 min)", nota: "" },
          { tempo: "22:10", dur: 15, tipo: "exposicao", slide: "91-101", desc: "8 Passos Kotter + ADKAR", nota: "" },
          { tempo: "22:25", dur: 12, tipo: "breakout", slide: "102-104", desc: "👥 BREAKOUT #4 + QR + Debate", nota: "qrcodes.html?aula=3&bloco=4" },
          { tempo: "22:37", dur: 7, tipo: "quiz", slide: "105-110", desc: "Quiz #4 — 5 questões", nota: "" },
          { tempo: "22:44", dur: 10, tipo: "exposicao", slide: "111-117", desc: "Complementar + Encerramento", nota: "" },
          { tempo: "22:54", dur: 3, tipo: "avaliacao", slide: "118-119", desc: "⭐ AVALIAÇÃO", nota: "⚠️ Formulário FIAP" }
        ]
      }
    ]
  },
  4: {
    titulo: "Aula 4 — O LEGADO: Execução e Resultados",
    totalSlides: 119,
    blocos: [
      { num: 1, titulo: "OKRs e Métricas", inicio: "19:00", fim: "20:00", duracao: 60,
        atividades: [
          { tempo: "19:00", dur: 3, tipo: "chamada", slide: "1-3", desc: "📋 CHAMADA + Recap Aula 3", nota: "⚠️ FAZER CHAMADA" },
          { tempo: "19:03", dur: 7, tipo: "dinamica", slide: "4", desc: "Debrief tarefas", nota: "" },
          { tempo: "19:10", dur: 15, tipo: "exposicao", slide: "5-14", desc: "OKRs + CFRs + NSM + KPIs", nota: "" },
          { tempo: "19:25", dur: 5, tipo: "video", slide: "15", desc: "🎥 John Doerr OKRs", nota: "" },
          { tempo: "19:30", dur: 7, tipo: "dinamica", slide: "16-17", desc: "Exercício: Seus OKRs", nota: "3 voluntários" },
          { tempo: "19:37", dur: 3, tipo: "ia", slide: "18", desc: "🤖 IA dashboards", nota: "" },
          { tempo: "19:40", dur: 12, tipo: "breakout", slide: "19-21", desc: "👥 BREAKOUT #1 + QR + Debate", nota: "qrcodes.html?aula=4&bloco=1" },
          { tempo: "19:52", dur: 7, tipo: "quiz", slide: "22-27", desc: "Quiz #1 — 5 questões", nota: "" }
        ]
      },
      { num: 2, titulo: "Radical Candor", inicio: "20:00", fim: "21:00", duracao: 60,
        atividades: [
          { tempo: "20:00", dur: 15, tipo: "exposicao", slide: "28-35", desc: "Radical Candor: 4 quadrantes", nota: "" },
          { tempo: "20:15", dur: 5, tipo: "video", slide: "36", desc: "🎥 Kim Scott (5 min)", nota: "" },
          { tempo: "20:20", dur: 8, tipo: "exposicao", slide: "37-42", desc: "People Analytics + SBI Master", nota: "" },
          { tempo: "20:28", dur: 12, tipo: "breakout", slide: "43-45", desc: "👥 BREAKOUT #2 + QR + Debate", nota: "qrcodes.html?aula=4&bloco=2" },
          { tempo: "20:40", dur: 7, tipo: "quiz", slide: "46-51", desc: "Quiz #2 — 5 questões", nota: "" },
          { tempo: "20:47", dur: 8, tipo: "exposicao", slide: "52-56", desc: "IA feedback + prompts", nota: "" }
        ]
      },
      { num: 0, titulo: "☕ INTERVALO", inicio: "21:00", fim: "21:10", duracao: 10,
        atividades: [{ tempo: "21:00", dur: 10, tipo: "intervalo", slide: "57", desc: "Intervalo", nota: "CHAMADA ao retornar" }]
      },
      { num: 3, titulo: "IA como Copiloto", inicio: "21:10", fim: "22:05", duracao: 55,
        atividades: [
          { tempo: "21:10", dur: 3, tipo: "chamada", slide: "58", desc: "📋 CHAMADA", nota: "⚠️ FAZER CHAMADA" },
          { tempo: "21:13", dur: 10, tipo: "exposicao", slide: "59-65", desc: "IA Copiloto + Data-Driven", nota: "" },
          { tempo: "21:23", dur: 8, tipo: "video", slide: "66-67", desc: "🎥 Nadella + HBR AI", nota: "" },
          { tempo: "21:31", dur: 8, tipo: "exposicao", slide: "68-73", desc: "Prompts + ExOs", nota: "" },
          { tempo: "21:39", dur: 12, tipo: "breakout", slide: "74-76", desc: "👥 BREAKOUT #3 + QR + Debate", nota: "qrcodes.html?aula=4&bloco=3" },
          { tempo: "21:51", dur: 7, tipo: "quiz", slide: "77-82", desc: "Quiz #3 — 5 questões", nota: "" }
        ]
      },
      { num: 4, titulo: "🏆 O GRANDE FINALE", inicio: "22:05", fim: "23:00", duracao: 55,
        atividades: [
          { tempo: "22:05", dur: 8, tipo: "exposicao", slide: "83-87", desc: "Plano 30-60-90", nota: "" },
          { tempo: "22:13", dur: 5, tipo: "video", slide: "88-89", desc: "🎥 Sinek + Brené Brown", nota: "" },
          { tempo: "22:18", dur: 20, tipo: "dinamica", slide: "90-97", desc: "🧪 EXERCÍCIO COM IA (5 prompts)", nota: "Alunos geram trabalho final AO VIVO" },
          { tempo: "22:38", dur: 12, tipo: "breakout", slide: "98-100", desc: "👥 BREAKOUT #4 Final + Debate", nota: "qrcodes.html?aula=4&bloco=4" },
          { tempo: "22:50", dur: 7, tipo: "exposicao", slide: "101-115", desc: "Grande Resumo + Encerramento épico", nota: "10 Mandamentos, Desafio 21 Dias" },
          { tempo: "22:57", dur: 3, tipo: "avaliacao", slide: "116-119", desc: "⭐ AVALIAÇÃO FINAL", nota: "⚠️ Última chance!" }
        ]
      }
    ]
  }
};
if (typeof module !== "undefined") module.exports = { AULA_DATA };
