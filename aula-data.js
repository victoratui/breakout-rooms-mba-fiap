// Roteiro completo das 4 aulas — timer, atividades, slides, notas do professor
const AULA_DATA = {
  1: {
    titulo: "Aula 1 — O CHAMADO: Fundamentos da Excelência",
    totalSlides: 120,
    blocos: [
      {
        num: 1, titulo: "Fundamentos de Alta Performance",
        inicio: "19:00", fim: "20:00", duracao: 60,
        atividades: [
          { tempo: "19:00", dur: 8, tipo: "dinamica", slide: "1-7", desc: "Warm-up: Nota de energia + superpoder", nota: "Peça que escrevam no chat. Chame 2-3 pelo nome." },
          { tempo: "19:08", dur: 12, tipo: "exposicao", slide: "8-18", desc: "Performance, Prontidão, Equação", nota: "Slide 'Performance = Capacidade × Motivação × Oportunidade'" },
          { tempo: "19:20", dur: 5, tipo: "enquete", slide: "19", desc: "Enquete: Prontidão da equipe (1-10)", nota: "Mentimeter ou chat. Peça justificativa." },
          { tempo: "19:25", dur: 15, tipo: "exposicao", slide: "20-30", desc: "Algoritmo 3M + 5 Passos para a Vitória", nota: "Enfatize que Mínimo Esforço = eficiência, NÃO preguiça" },
          { tempo: "19:40", dur: 5, tipo: "enquete", slide: "31", desc: "Reflexão: Qual M é mais desafiador?", nota: "Vote A, B ou C no chat" },
          { tempo: "19:45", dur: 3, tipo: "ia", slide: "32", desc: "🤖 IA na Gestão: RPA, ML, Case Amazon", nota: "Slide de ferramentas de IA" },
          { tempo: "19:48", dur: 7, tipo: "quiz", slide: "33-38", desc: "Quiz #1 — 5 questões", nota: "Leia em voz alta, alunos respondem no chat" },
          { tempo: "19:55", dur: 5, tipo: "transicao", slide: "39", desc: "Síntese + transição para Bloco 2", nota: "Resuma os 3 pontos principais" }
        ]
      },
      {
        num: 2, titulo: "OODA Loop e Frameworks de Decisão",
        inicio: "20:00", fim: "21:00", duracao: 60,
        atividades: [
          { tempo: "20:00", dur: 15, tipo: "exposicao", slide: "40-46", desc: "OODA Loop: Observar→Orientar→Decidir→Agir", nota: "Origem militar, aplicação empresarial" },
          { tempo: "20:15", dur: 5, tipo: "enquete", slide: "47", desc: "Enquete: Onde sua equipe trava no OODA?", nota: "A=Observar B=Orientar C=Decidir D=Agir" },
          { tempo: "20:20", dur: 10, tipo: "exposicao", slide: "48-53", desc: "Modelo SBI + Matriz de Eisenhower", nota: "Exemplos práticos de feedback" },
          { tempo: "20:30", dur: 5, tipo: "dinamica", slide: "54", desc: "Exercício: 3 tarefas na Eisenhower", nota: "Compartilhem no chat" },
          { tempo: "20:35", dur: 5, tipo: "exposicao", slide: "55-57", desc: "Tuckman: 5 estágios", nota: "Pergunte: em qual estágio está sua equipe?" },
          { tempo: "20:40", dur: 3, tipo: "ia", slide: "58", desc: "🤖 IA: ChatGPT, LinkedIn Recruiter, Visão Comp.", nota: "Slide ferramentas IA" },
          { tempo: "20:43", dur: 5, tipo: "video", slide: "59", desc: "🎥 Vídeo curto antes do Breakout", nota: "Preparar vídeo" },
          { tempo: "20:48", dur: 2, tipo: "breakout_prep", slide: "60", desc: "📱 Compartilhar QR Codes no chat", nota: "qrcodes.html?aula=1&bloco=2" },
          { tempo: "20:50", dur: 8, tipo: "breakout", slide: "60", desc: "👥 BREAKOUT ROOM #1 (8 min)", nota: "Dividir 4 grupos no Teams. Timer automático." },
          { tempo: "20:58", dur: 5, tipo: "debate", slide: "61", desc: "🎤 Debate entre grupos (5 min)", nota: "1 min por grupo + debate aberto" },
          { tempo: "21:03", dur: 7, tipo: "quiz", slide: "62-67", desc: "Quiz #2 — 5 questões", nota: "Alunos respondem no chat" }
        ]
      },
      {
        num: 0, titulo: "☕ INTERVALO",
        inicio: "21:00", fim: "21:10", duracao: 10,
        atividades: [
          { tempo: "21:00", dur: 10, tipo: "intervalo", slide: "68", desc: "Intervalo — 10 minutos", nota: "Deixar enquete no Mentimeter. FAZER CHAMADA ao retornar." }
        ]
      },
      {
        num: 3, titulo: "Projeto Aristóteles e SCARF",
        inicio: "21:10", fim: "22:05", duracao: 55,
        atividades: [
          { tempo: "21:10", dur: 5, tipo: "chamada", slide: "69", desc: "📋 CHAMADA + Resultado da enquete", nota: "⚠️ FAZER CHAMADA AGORA." },
          { tempo: "21:15", dur: 15, tipo: "exposicao", slide: "70-79", desc: "Projeto Aristóteles: 5 pilares", nota: "Segurança Psicológica = #1" },
          { tempo: "21:30", dur: 5, tipo: "enquete", slide: "80", desc: "Enquete: Qual pilar mais deficiente?", nota: "Vote 1-5 no chat" },
          { tempo: "21:35", dur: 10, tipo: "exposicao", slide: "81-85", desc: "Modelo SCARF + aplicação prática", nota: "Status, Certainty, Autonomy, Relatedness, Fairness" },
          { tempo: "21:45", dur: 3, tipo: "video", slide: "86", desc: "🎥 Vídeo curto antes do Breakout", nota: "" },
          { tempo: "21:48", dur: 2, tipo: "breakout_prep", slide: "87", desc: "📱 QR Codes para Breakout", nota: "qrcodes.html?aula=1&bloco=3" },
          { tempo: "21:50", dur: 8, tipo: "breakout", slide: "87", desc: "👥 BREAKOUT ROOM #2 (8 min)", nota: "4 grupos no Teams" },
          { tempo: "21:58", dur: 5, tipo: "debate", slide: "88", desc: "🎤 Debate (5 min)", nota: "" },
          { tempo: "22:03", dur: 7, tipo: "quiz", slide: "89-94", desc: "Quiz #3 — 5 questões", nota: "" }
        ]
      },
      {
        num: 4, titulo: "Plano de Ação e Compromisso",
        inicio: "22:05", fim: "23:00", duracao: 55,
        atividades: [
          { tempo: "22:05", dur: 10, tipo: "exposicao", slide: "95-100", desc: "Mapeamento de Valores da Equipe", nota: "" },
          { tempo: "22:15", dur: 5, tipo: "dinamica", slide: "101", desc: "Exercício: 3 valores + 1 ação cada", nota: "Compartilhar no chat" },
          { tempo: "22:20", dur: 5, tipo: "exposicao", slide: "102-104", desc: "Cases Preview: Netflix, Spotify, Toyota", nota: "" },
          { tempo: "22:25", dur: 3, tipo: "video", slide: "105", desc: "🎥 Vídeo inspirador antes do Breakout", nota: "" },
          { tempo: "22:28", dur: 2, tipo: "breakout_prep", slide: "106", desc: "📱 QR Codes", nota: "qrcodes.html?aula=1&bloco=4" },
          { tempo: "22:30", dur: 8, tipo: "breakout", slide: "106", desc: "👥 BREAKOUT ROOM #3 (8 min)", nota: "" },
          { tempo: "22:38", dur: 5, tipo: "debate", slide: "107", desc: "🎤 Debate (5 min)", nota: "" },
          { tempo: "22:43", dur: 8, tipo: "dinamica", slide: "108-109", desc: "Carta ao Eu Futuro (privado)", nota: "Atividade individual, não compartilhar" },
          { tempo: "22:51", dur: 5, tipo: "exposicao", slide: "110-113", desc: "Desafio de 5 Dias", nota: "Dia1:OODA Dia2:Missão Dia3:3M Dia4:SBI Dia5:Reflexão" },
          { tempo: "22:56", dur: 7, tipo: "quiz", slide: "114-118", desc: "Quiz #4 — Integrador", nota: "" },
          { tempo: "22:57", dur: 3, tipo: "avaliacao", slide: "119-120", desc: "⭐ PEDIR AVALIAÇÃO DA AULA", nota: "⚠️ Pedir que avaliem no formulário da FIAP" }
        ]
      }
    ]
  },
  2: {
    titulo: "Aula 2 — O DESENVOLVIMENTO: 16 Competências do Líder",
    totalSlides: 121,
    blocos: [
      { num: 1, titulo: "Arquitetura da Liderança — Os 3 Eixos", inicio: "19:00", fim: "20:00", duracao: 60,
        atividades: [
          { tempo: "19:00", dur: 3, tipo: "chamada", slide: "1-2", desc: "📋 CHAMADA + Abertura", nota: "⚠️ FAZER CHAMADA" },
          { tempo: "19:03", dur: 7, tipo: "dinamica", slide: "3-4", desc: "Debrief Desafio de 5 Dias", nota: "Quem completou? Voluntários?" },
          { tempo: "19:10", dur: 15, tipo: "exposicao", slide: "5-16", desc: "3 Eixos + 16 Competências + Case Malala", nota: "" },
          { tempo: "19:25", dur: 10, tipo: "video", slide: "17-18", desc: "🎥 Vídeo Malala ONU (5 min) + reflexão", nota: "Anotar 3 insights" },
          { tempo: "19:35", dur: 5, tipo: "enquete", slide: "19", desc: "Reflexão: medos que impedem liderança", nota: "" },
          { tempo: "19:40", dur: 3, tipo: "ia", slide: "20", desc: "🤖 IA: Prompting, Data Literacy", nota: "" },
          { tempo: "19:43", dur: 2, tipo: "breakout_prep", slide: "21", desc: "📱 QR Codes", nota: "qrcodes.html?aula=2&bloco=1" },
          { tempo: "19:45", dur: 8, tipo: "breakout", slide: "21-22", desc: "👥 BREAKOUT ROOM #1", nota: "" },
          { tempo: "19:53", dur: 5, tipo: "debate", slide: "23", desc: "🎤 Debate", nota: "" },
          { tempo: "19:58", dur: 7, tipo: "quiz", slide: "24-29", desc: "Quiz #1", nota: "" }
        ]
      },
      { num: 2, titulo: "Eixo Liderança — 6 Competências", inicio: "20:00", fim: "21:00", duracao: 60,
        atividades: [
          { tempo: "20:00", dur: 12, tipo: "exposicao", slide: "30-40", desc: "SBAR, Pyramid, Protagonismo, Equipe", nota: "" },
          { tempo: "20:12", dur: 5, tipo: "enquete", slide: "41", desc: "Enquete: maior falha de comunicação?", nota: "" },
          { tempo: "20:17", dur: 10, tipo: "exposicao", slide: "42-49", desc: "Cialdini, Covey, GROW", nota: "" },
          { tempo: "20:27", dur: 8, tipo: "dinamica", slide: "50", desc: "Autoavaliação 16 competências (1-5)", nota: "Top 3 Forças e Top 3 Lacunas" },
          { tempo: "20:35", dur: 3, tipo: "ia", slide: "51", desc: "🤖 IA para comunicação", nota: "" },
          { tempo: "20:38", dur: 2, tipo: "breakout_prep", slide: "52", desc: "📱 QR Codes", nota: "qrcodes.html?aula=2&bloco=2" },
          { tempo: "20:40", dur: 8, tipo: "breakout", slide: "52-53", desc: "👥 BREAKOUT ROOM #2", nota: "" },
          { tempo: "20:48", dur: 5, tipo: "debate", slide: "54", desc: "🎤 Debate", nota: "" },
          { tempo: "20:53", dur: 7, tipo: "quiz", slide: "55-60", desc: "Quiz #2", nota: "" }
        ]
      },
      { num: 0, titulo: "☕ INTERVALO", inicio: "21:00", fim: "21:10", duracao: 10,
        atividades: [{ tempo: "21:00", dur: 10, tipo: "intervalo", slide: "61", desc: "Intervalo", nota: "CHAMADA ao retornar" }]
      },
      { num: 3, titulo: "Eixo Aprendizado — Growth Mindset", inicio: "21:10", fim: "22:05", duracao: 55,
        atividades: [
          { tempo: "21:10", dur: 3, tipo: "chamada", slide: "62", desc: "📋 CHAMADA", nota: "⚠️ FAZER CHAMADA" },
          { tempo: "21:13", dur: 15, tipo: "exposicao", slide: "63-72", desc: "Growth Mindset, Nadella, Learnability", nota: "" },
          { tempo: "21:28", dur: 5, tipo: "enquete", slide: "73", desc: "Quando você adota Fixed Mindset?", nota: "" },
          { tempo: "21:33", dur: 10, tipo: "exposicao", slide: "74-80", desc: "Criatividade, Método, Tecnologia/IA", nota: "" },
          { tempo: "21:43", dur: 2, tipo: "breakout_prep", slide: "81", desc: "📱 QR Codes", nota: "qrcodes.html?aula=2&bloco=3" },
          { tempo: "21:45", dur: 8, tipo: "breakout", slide: "81-82", desc: "👥 BREAKOUT ROOM #3", nota: "" },
          { tempo: "21:53", dur: 5, tipo: "debate", slide: "83", desc: "🎤 Debate", nota: "" },
          { tempo: "21:58", dur: 7, tipo: "quiz", slide: "84-89", desc: "Quiz #3", nota: "" }
        ]
      },
      { num: 4, titulo: "Eixo Resiliência — GRIT e PDI", inicio: "22:05", fim: "23:00", duracao: 55,
        atividades: [
          { tempo: "22:05", dur: 15, tipo: "exposicao", slide: "90-98", desc: "GRIT, Antifragilidade, SCARF, Seg.Psicológica", nota: "" },
          { tempo: "22:20", dur: 5, tipo: "enquete", slide: "99", desc: "Quando precisou de mais GRIT?", nota: "" },
          { tempo: "22:25", dur: 8, tipo: "dinamica", slide: "100-101", desc: "Construir PDI — 2 competências", nota: "Template na tela" },
          { tempo: "22:33", dur: 2, tipo: "breakout_prep", slide: "102", desc: "📱 QR Codes", nota: "qrcodes.html?aula=2&bloco=4" },
          { tempo: "22:35", dur: 8, tipo: "breakout", slide: "102-103", desc: "👥 BREAKOUT ROOM #4", nota: "" },
          { tempo: "22:43", dur: 5, tipo: "debate", slide: "104", desc: "🎤 Debate", nota: "" },
          { tempo: "22:48", dur: 5, tipo: "quiz", slide: "105-110", desc: "Quiz #4", nota: "" },
          { tempo: "22:53", dur: 4, tipo: "exposicao", slide: "111-117", desc: "Resumo + Preview Aula 3", nota: "" },
          { tempo: "22:57", dur: 3, tipo: "avaliacao", slide: "118-121", desc: "⭐ PEDIR AVALIAÇÃO", nota: "⚠️ Formulário FIAP" }
        ]
      }
    ]
  },
  3: {
    titulo: "Aula 3 — A TRANSFORMAÇÃO: Cultura Organizacional",
    totalSlides: 119,
    blocos: [
      { num: 1, titulo: "Modelos Teóricos de Cultura", inicio: "19:00", fim: "20:00", duracao: 60,
        atividades: [
          { tempo: "19:00", dur: 3, tipo: "chamada", slide: "1-2", desc: "📋 CHAMADA", nota: "⚠️ FAZER CHAMADA" },
          { tempo: "19:03", dur: 7, tipo: "dinamica", slide: "3-5", desc: "Debrief PDI + tarefas", nota: "" },
          { tempo: "19:10", dur: 15, tipo: "exposicao", slide: "6-16", desc: "Schein: Iceberg Cultural (3 níveis)", nota: "" },
          { tempo: "19:25", dur: 5, tipo: "video", slide: "17", desc: "🎥 Edgar Schein (5 min)", nota: "" },
          { tempo: "19:30", dur: 10, tipo: "exposicao", slide: "18-25", desc: "CVF: 4 quadrantes", nota: "" },
          { tempo: "19:40", dur: 2, tipo: "breakout_prep", slide: "26", desc: "📱 QR Codes", nota: "qrcodes.html?aula=3&bloco=1" },
          { tempo: "19:42", dur: 8, tipo: "breakout", slide: "26-27", desc: "👥 BREAKOUT ROOM #1", nota: "" },
          { tempo: "19:50", dur: 5, tipo: "debate", slide: "28", desc: "🎤 Debate", nota: "" },
          { tempo: "19:55", dur: 7, tipo: "quiz", slide: "29-34", desc: "Quiz #1", nota: "" }
        ]
      },
      { num: 2, titulo: "Cases: Netflix, Zappos, Spotify", inicio: "20:00", fim: "21:00", duracao: 60,
        atividades: [
          { tempo: "20:00", dur: 15, tipo: "exposicao", slide: "35-43", desc: "Netflix: Freedom & Responsibility", nota: "" },
          { tempo: "20:15", dur: 5, tipo: "video", slide: "44", desc: "🎥 Netflix Culture (5 min)", nota: "" },
          { tempo: "20:20", dur: 10, tipo: "exposicao", slide: "45-52", desc: "Zappos + Spotify Model", nota: "" },
          { tempo: "20:30", dur: 5, tipo: "enquete", slide: "53", desc: "Qual case mais inspira?", nota: "" },
          { tempo: "20:35", dur: 2, tipo: "breakout_prep", slide: "54", desc: "📱 QR Codes", nota: "qrcodes.html?aula=3&bloco=2" },
          { tempo: "20:37", dur: 8, tipo: "breakout", slide: "54-55", desc: "👥 BREAKOUT ROOM #2", nota: "" },
          { tempo: "20:45", dur: 5, tipo: "debate", slide: "56", desc: "🎤 Debate", nota: "" },
          { tempo: "20:50", dur: 7, tipo: "quiz", slide: "57-62", desc: "Quiz #2", nota: "" }
        ]
      },
      { num: 0, titulo: "☕ INTERVALO", inicio: "21:00", fim: "21:10", duracao: 10,
        atividades: [{ tempo: "21:00", dur: 10, tipo: "intervalo", slide: "63", desc: "Intervalo", nota: "CHAMADA ao retornar" }]
      },
      { num: 3, titulo: "Inovação e Transformação", inicio: "21:10", fim: "22:05", duracao: 55,
        atividades: [
          { tempo: "21:10", dur: 3, tipo: "chamada", slide: "64", desc: "📋 CHAMADA", nota: "⚠️ FAZER CHAMADA" },
          { tempo: "21:13", dur: 10, tipo: "exposicao", slide: "65-72", desc: "Open Innovation + Design Thinking", nota: "" },
          { tempo: "21:23", dur: 5, tipo: "video", slide: "73", desc: "🎥 Eric Ries Lean Startup (5 min)", nota: "" },
          { tempo: "21:28", dur: 10, tipo: "exposicao", slide: "74-80", desc: "Lean Startup + MVP + Ambidestria", nota: "" },
          { tempo: "21:38", dur: 2, tipo: "breakout_prep", slide: "81", desc: "📱 QR Codes", nota: "qrcodes.html?aula=3&bloco=3" },
          { tempo: "21:40", dur: 8, tipo: "breakout", slide: "81-82", desc: "👥 BREAKOUT ROOM #3", nota: "" },
          { tempo: "21:48", dur: 5, tipo: "debate", slide: "83", desc: "🎤 Debate", nota: "" },
          { tempo: "21:53", dur: 7, tipo: "quiz", slide: "84-89", desc: "Quiz #3", nota: "" }
        ]
      },
      { num: 4, titulo: "Gestão de Mudanças", inicio: "22:05", fim: "23:00", duracao: 55,
        atividades: [
          { tempo: "22:05", dur: 5, tipo: "video", slide: "90", desc: "🎥 John Kotter (5 min)", nota: "" },
          { tempo: "22:10", dur: 15, tipo: "exposicao", slide: "91-100", desc: "8 Passos de Kotter + ADKAR", nota: "" },
          { tempo: "22:25", dur: 5, tipo: "enquete", slide: "101", desc: "Qual passo de Kotter é mais difícil?", nota: "" },
          { tempo: "22:30", dur: 2, tipo: "breakout_prep", slide: "102", desc: "📱 QR Codes", nota: "qrcodes.html?aula=3&bloco=4" },
          { tempo: "22:32", dur: 8, tipo: "breakout", slide: "102-103", desc: "👥 BREAKOUT ROOM #4", nota: "" },
          { tempo: "22:40", dur: 5, tipo: "debate", slide: "104", desc: "🎤 Debate", nota: "" },
          { tempo: "22:45", dur: 5, tipo: "quiz", slide: "105-110", desc: "Quiz #4", nota: "" },
          { tempo: "22:50", dur: 5, tipo: "exposicao", slide: "111-115", desc: "Tarefa + Preview Aula 4", nota: "" },
          { tempo: "22:55", dur: 5, tipo: "exposicao", slide: "116-117", desc: "Encerramento", nota: "" },
          { tempo: "22:57", dur: 3, tipo: "avaliacao", slide: "118-119", desc: "⭐ PEDIR AVALIAÇÃO", nota: "⚠️ Formulário FIAP" }
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
          { tempo: "19:00", dur: 3, tipo: "chamada", slide: "1-2", desc: "📋 CHAMADA", nota: "⚠️ FAZER CHAMADA" },
          { tempo: "19:03", dur: 7, tipo: "dinamica", slide: "3-4", desc: "Debrief tarefas Aula 3", nota: "" },
          { tempo: "19:10", dur: 15, tipo: "exposicao", slide: "5-14", desc: "OKRs + CFRs + NSM + KPIs", nota: "" },
          { tempo: "19:25", dur: 5, tipo: "video", slide: "15", desc: "🎥 John Doerr OKRs (5 min)", nota: "" },
          { tempo: "19:30", dur: 7, tipo: "dinamica", slide: "16-17", desc: "Exercício: Escreva seus OKRs", nota: "3 voluntários apresentam" },
          { tempo: "19:37", dur: 3, tipo: "ia", slide: "18", desc: "🤖 IA para dashboards", nota: "" },
          { tempo: "19:40", dur: 2, tipo: "breakout_prep", slide: "19", desc: "📱 QR Codes", nota: "qrcodes.html?aula=4&bloco=1" },
          { tempo: "19:42", dur: 8, tipo: "breakout", slide: "19-20", desc: "👥 BREAKOUT ROOM #1", nota: "" },
          { tempo: "19:50", dur: 5, tipo: "debate", slide: "21", desc: "🎤 Debate", nota: "" },
          { tempo: "19:55", dur: 7, tipo: "quiz", slide: "22-27", desc: "Quiz #1", nota: "" }
        ]
      },
      { num: 2, titulo: "Radical Candor e People Analytics", inicio: "20:00", fim: "21:00", duracao: 60,
        atividades: [
          { tempo: "20:00", dur: 15, tipo: "exposicao", slide: "28-35", desc: "Radical Candor: 4 quadrantes", nota: "" },
          { tempo: "20:15", dur: 5, tipo: "video", slide: "36", desc: "🎥 Kim Scott (5 min)", nota: "" },
          { tempo: "20:20", dur: 10, tipo: "exposicao", slide: "37-42", desc: "People Analytics + SBI Master", nota: "" },
          { tempo: "20:30", dur: 2, tipo: "breakout_prep", slide: "43", desc: "📱 QR Codes", nota: "qrcodes.html?aula=4&bloco=2" },
          { tempo: "20:32", dur: 8, tipo: "breakout", slide: "43-44", desc: "👥 BREAKOUT ROOM #2", nota: "" },
          { tempo: "20:40", dur: 5, tipo: "debate", slide: "45", desc: "🎤 Debate", nota: "" },
          { tempo: "20:45", dur: 7, tipo: "quiz", slide: "46-51", desc: "Quiz #2", nota: "" },
          { tempo: "20:52", dur: 8, tipo: "exposicao", slide: "52-56", desc: "IA para feedback + prompts", nota: "" }
        ]
      },
      { num: 0, titulo: "☕ INTERVALO", inicio: "21:00", fim: "21:10", duracao: 10,
        atividades: [{ tempo: "21:00", dur: 10, tipo: "intervalo", slide: "57", desc: "Intervalo", nota: "CHAMADA ao retornar" }]
      },
      { num: 3, titulo: "IA como Copiloto", inicio: "21:10", fim: "22:05", duracao: 55,
        atividades: [
          { tempo: "21:10", dur: 3, tipo: "chamada", slide: "58", desc: "📋 CHAMADA", nota: "⚠️ FAZER CHAMADA" },
          { tempo: "21:13", dur: 10, tipo: "exposicao", slide: "59-65", desc: "IA Copiloto + Decisões Data-Driven", nota: "" },
          { tempo: "21:23", dur: 5, tipo: "video", slide: "66-67", desc: "🎥 Nadella + HBR AI (4 min cada)", nota: "" },
          { tempo: "21:28", dur: 10, tipo: "exposicao", slide: "68-73", desc: "Prompts para líderes + ExOs", nota: "" },
          { tempo: "21:38", dur: 2, tipo: "breakout_prep", slide: "74", desc: "📱 QR Codes", nota: "qrcodes.html?aula=4&bloco=3" },
          { tempo: "21:40", dur: 8, tipo: "breakout", slide: "74-75", desc: "👥 BREAKOUT ROOM #3", nota: "" },
          { tempo: "21:48", dur: 5, tipo: "debate", slide: "76", desc: "🎤 Debate", nota: "" },
          { tempo: "21:53", dur: 7, tipo: "quiz", slide: "77-82", desc: "Quiz #3", nota: "" }
        ]
      },
      { num: 4, titulo: "🏆 O GRANDE FINALE", inicio: "22:05", fim: "23:00", duracao: 55,
        atividades: [
          { tempo: "22:05", dur: 10, tipo: "exposicao", slide: "83-87", desc: "Plano 30-60-90 Dias", nota: "" },
          { tempo: "22:15", dur: 5, tipo: "video", slide: "88-89", desc: "🎥 Sinek + Brené Brown (5 min)", nota: "" },
          { tempo: "22:20", dur: 20, tipo: "dinamica", slide: "90-97", desc: "🧪 EXERCÍCIO PRÁTICO COM IA (5 prompts)", nota: "Alunos geram trabalho final AO VIVO com ChatGPT" },
          { tempo: "22:40", dur: 2, tipo: "breakout_prep", slide: "98", desc: "📱 QR Codes", nota: "qrcodes.html?aula=4&bloco=4" },
          { tempo: "22:42", dur: 8, tipo: "breakout", slide: "98-99", desc: "👥 BREAKOUT ROOM #4 — Grande Debate Final", nota: "" },
          { tempo: "22:50", dur: 5, tipo: "debate", slide: "100", desc: "🎤 Debate Final", nota: "" },
          { tempo: "22:55", dur: 5, tipo: "exposicao", slide: "101-115", desc: "Resumo + Encerramento épico + Desafio 21 Dias", nota: "Mensagem final inspiradora" },
          { tempo: "22:57", dur: 3, tipo: "avaliacao", slide: "116-119", desc: "⭐ PEDIR AVALIAÇÃO FINAL", nota: "⚠️ Última chance! Formulário FIAP" }
        ]
      }
    ]
  }
};

if (typeof module !== "undefined") module.exports = { AULA_DATA };
