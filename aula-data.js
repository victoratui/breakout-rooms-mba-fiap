// Roteiro completo das 4 aulas — timer, atividades, notas do professor
const AULA_DATA = {
  1: {
    titulo: "Aula 1 — O CHAMADO: Fundamentos da Excelência",
    data: "", // preencher no dia
    blocos: [
      {
        num: 1, titulo: "Fundamentos de Alta Performance",
        inicio: "19:00", fim: "20:00", duracao: 60,
        atividades: [
          { tempo: "19:00", dur: 8, tipo: "dinamica", desc: "Warm-up: Nota de energia + superpoder", nota: "Peça que escrevam no chat. Chame 2-3 pelo nome." },
          { tempo: "19:08", dur: 12, tipo: "exposicao", desc: "Performance, Prontidão, Equação", nota: "Slide 'Performance = Capacidade × Motivação × Oportunidade'" },
          { tempo: "19:20", dur: 5, tipo: "enquete", desc: "Enquete: Prontidão da equipe (1-10)", nota: "Mentimeter ou chat. Peça justificativa." },
          { tempo: "19:25", dur: 15, tipo: "exposicao", desc: "Algoritmo 3M + 5 Passos para a Vitória", nota: "Enfatize que Mínimo Esforço = eficiência, NÃO preguiça" },
          { tempo: "19:40", dur: 5, tipo: "enquete", desc: "Reflexão: Qual M é mais desafiador?", nota: "Vote A, B ou C no chat" },
          { tempo: "19:45", dur: 3, tipo: "ia", desc: "🤖 IA na Gestão: RPA, ML, Case Amazon", nota: "Slide de ferramentas de IA" },
          { tempo: "19:48", dur: 7, tipo: "quiz", desc: "Quiz #1 — 5 questões", nota: "Leia em voz alta, alunos respondem no chat" },
          { tempo: "19:55", dur: 5, tipo: "transicao", desc: "Síntese + transição para Bloco 2", nota: "Resuma os 3 pontos principais" }
        ]
      },
      {
        num: 2, titulo: "OODA Loop e Frameworks de Decisão",
        inicio: "20:00", fim: "21:00", duracao: 60,
        atividades: [
          { tempo: "20:00", dur: 15, tipo: "exposicao", desc: "OODA Loop: Observar→Orientar→Decidir→Agir", nota: "Origem militar, aplicação empresarial" },
          { tempo: "20:15", dur: 5, tipo: "enquete", desc: "Enquete: Onde sua equipe trava no OODA?", nota: "A=Observar B=Orientar C=Decidir D=Agir" },
          { tempo: "20:20", dur: 10, tipo: "exposicao", desc: "Modelo SBI + Matriz de Eisenhower", nota: "Exemplos práticos de feedback" },
          { tempo: "20:30", dur: 5, tipo: "dinamica", desc: "Exercício: 3 tarefas na Eisenhower", nota: "Compartilhem no chat" },
          { tempo: "20:35", dur: 5, tipo: "exposicao", desc: "Tuckman: 5 estágios", nota: "Pergunte: em qual estágio está sua equipe?" },
          { tempo: "20:40", dur: 3, tipo: "ia", desc: "🤖 IA: ChatGPT, LinkedIn Recruiter, Visão Comp.", nota: "Slide ferramentas IA" },
          { tempo: "20:43", dur: 5, tipo: "video", desc: "🎥 Vídeo curto antes do Breakout", nota: "Preparar vídeo" },
          { tempo: "20:48", dur: 2, tipo: "breakout_prep", desc: "📱 Compartilhar QR Codes no chat", nota: "Abrir qrcodes.html?aula=1&bloco=2" },
          { tempo: "20:50", dur: 8, tipo: "breakout", desc: "👥 BREAKOUT ROOM #1 (8 min)", nota: "Dividir 4 grupos no Teams. Timer automático." },
          { tempo: "20:58", dur: 5, tipo: "debate", desc: "🎤 Debate entre grupos (5 min)", nota: "1 min por grupo + debate aberto" },
          { tempo: "21:03", dur: 7, tipo: "quiz", desc: "Quiz #2 — 5 questões", nota: "Alunos respondem no chat" }
        ]
      },
      {
        num: 0, titulo: "☕ INTERVALO",
        inicio: "21:00", fim: "21:10", duracao: 10,
        atividades: [
          { tempo: "21:00", dur: 10, tipo: "intervalo", desc: "Intervalo — 10 minutos", nota: "Deixar enquete no Mentimeter. FAZER CHAMADA ao retornar." }
        ]
      },
      {
        num: 3, titulo: "Projeto Aristóteles e SCARF",
        inicio: "21:10", fim: "22:05", duracao: 55,
        atividades: [
          { tempo: "21:10", dur: 5, tipo: "chamada", desc: "📋 CHAMADA + Resultado da enquete", nota: "⚠️ FAZER CHAMADA AGORA. Verificar quem voltou." },
          { tempo: "21:15", dur: 15, tipo: "exposicao", desc: "Projeto Aristóteles: 5 pilares", nota: "Segurança Psicológica = #1" },
          { tempo: "21:30", dur: 5, tipo: "enquete", desc: "Enquete: Qual pilar mais deficiente?", nota: "Vote 1-5 no chat" },
          { tempo: "21:35", dur: 10, tipo: "exposicao", desc: "Modelo SCARF + aplicação prática", nota: "Status, Certainty, Autonomy, Relatedness, Fairness" },
          { tempo: "21:45", dur: 3, tipo: "video", desc: "🎥 Vídeo curto antes do Breakout", nota: "" },
          { tempo: "21:48", dur: 2, tipo: "breakout_prep", desc: "📱 QR Codes para Breakout", nota: "qrcodes.html?aula=1&bloco=3" },
          { tempo: "21:50", dur: 8, tipo: "breakout", desc: "👥 BREAKOUT ROOM #2 (8 min)", nota: "4 grupos no Teams" },
          { tempo: "21:58", dur: 5, tipo: "debate", desc: "🎤 Debate (5 min)", nota: "" },
          { tempo: "22:03", dur: 7, tipo: "quiz", desc: "Quiz #3 — 5 questões", nota: "" }
        ]
      },
      {
        num: 4, titulo: "Plano de Ação e Compromisso",
        inicio: "22:05", fim: "23:00", duracao: 55,
        atividades: [
          { tempo: "22:05", dur: 10, tipo: "exposicao", desc: "Mapeamento de Valores da Equipe", nota: "" },
          { tempo: "22:15", dur: 5, tipo: "dinamica", desc: "Exercício: 3 valores + 1 ação cada", nota: "Compartilhar no chat" },
          { tempo: "22:20", dur: 5, tipo: "exposicao", desc: "Cases Preview: Netflix, Spotify, Toyota", nota: "" },
          { tempo: "22:25", dur: 3, tipo: "video", desc: "🎥 Vídeo inspirador antes do Breakout", nota: "" },
          { tempo: "22:28", dur: 2, tipo: "breakout_prep", desc: "📱 QR Codes", nota: "qrcodes.html?aula=1&bloco=4" },
          { tempo: "22:30", dur: 8, tipo: "breakout", desc: "👥 BREAKOUT ROOM #3 (8 min)", nota: "" },
          { tempo: "22:38", dur: 5, tipo: "debate", desc: "🎤 Debate (5 min)", nota: "" },
          { tempo: "22:43", dur: 8, tipo: "dinamica", desc: "Carta ao Eu Futuro (privado)", nota: "Atividade individual, não compartilhar" },
          { tempo: "22:51", dur: 5, tipo: "exposicao", desc: "Desafio de 5 Dias", nota: "Dia1:OODA Dia2:Missão Dia3:3M Dia4:SBI Dia5:Reflexão" },
          { tempo: "22:56", dur: 7, tipo: "quiz", desc: "Quiz #4 — Integrador", nota: "" },
          { tempo: "22:57", dur: 3, tipo: "avaliacao", desc: "⭐ PEDIR AVALIAÇÃO DA AULA", nota: "⚠️ Pedir que avaliem no formulário da FIAP" }
        ]
      }
    ]
  },
  2: {
    titulo: "Aula 2 — O DESENVOLVIMENTO: 16 Competências do Líder",
    blocos: [
      { num: 1, titulo: "Arquitetura da Liderança — Os 3 Eixos", inicio: "19:00", fim: "20:00", duracao: 60,
        atividades: [
          { tempo: "19:00", dur: 3, tipo: "chamada", desc: "📋 CHAMADA + Abertura", nota: "⚠️ FAZER CHAMADA" },
          { tempo: "19:03", dur: 7, tipo: "dinamica", desc: "Debrief Desafio de 5 Dias", nota: "Quem completou? Voluntários?" },
          { tempo: "19:10", dur: 15, tipo: "exposicao", desc: "3 Eixos + 16 Competências + Case Malala", nota: "" },
          { tempo: "19:25", dur: 10, tipo: "video", desc: "🎥 Vídeo Malala ONU (5 min) + reflexão", nota: "Anotar 3 insights" },
          { tempo: "19:35", dur: 5, tipo: "enquete", desc: "Reflexão: medos que impedem liderança", nota: "" },
          { tempo: "19:40", dur: 3, tipo: "ia", desc: "🤖 IA: Prompting, Data Literacy", nota: "" },
          { tempo: "19:43", dur: 2, tipo: "breakout_prep", desc: "📱 QR Codes", nota: "qrcodes.html?aula=2&bloco=1" },
          { tempo: "19:45", dur: 8, tipo: "breakout", desc: "👥 BREAKOUT ROOM #1", nota: "" },
          { tempo: "19:53", dur: 5, tipo: "debate", desc: "🎤 Debate", nota: "" },
          { tempo: "19:58", dur: 7, tipo: "quiz", desc: "Quiz #1", nota: "" }
        ]
      },
      { num: 2, titulo: "Eixo Liderança — 6 Competências", inicio: "20:00", fim: "21:00", duracao: 60,
        atividades: [
          { tempo: "20:00", dur: 12, tipo: "exposicao", desc: "SBAR, Pyramid, Protagonismo, Equipe", nota: "" },
          { tempo: "20:12", dur: 5, tipo: "enquete", desc: "Enquete: maior falha de comunicação?", nota: "" },
          { tempo: "20:17", dur: 10, tipo: "exposicao", desc: "Cialdini, Covey, GROW", nota: "" },
          { tempo: "20:27", dur: 8, tipo: "dinamica", desc: "Autoavaliação 16 competências (1-5)", nota: "Top 3 Forças e Top 3 Lacunas" },
          { tempo: "20:35", dur: 3, tipo: "ia", desc: "🤖 IA para comunicação", nota: "" },
          { tempo: "20:38", dur: 2, tipo: "breakout_prep", desc: "📱 QR Codes", nota: "qrcodes.html?aula=2&bloco=2" },
          { tempo: "20:40", dur: 8, tipo: "breakout", desc: "👥 BREAKOUT ROOM #2", nota: "" },
          { tempo: "20:48", dur: 5, tipo: "debate", desc: "🎤 Debate", nota: "" },
          { tempo: "20:53", dur: 7, tipo: "quiz", desc: "Quiz #2", nota: "" }
        ]
      },
      { num: 0, titulo: "☕ INTERVALO", inicio: "21:00", fim: "21:10", duracao: 10,
        atividades: [{ tempo: "21:00", dur: 10, tipo: "intervalo", desc: "Intervalo", nota: "CHAMADA ao retornar" }]
      },
      { num: 3, titulo: "Eixo Aprendizado — Growth Mindset", inicio: "21:10", fim: "22:05", duracao: 55,
        atividades: [
          { tempo: "21:10", dur: 3, tipo: "chamada", desc: "📋 CHAMADA", nota: "⚠️ FAZER CHAMADA" },
          { tempo: "21:13", dur: 15, tipo: "exposicao", desc: "Growth Mindset, Nadella, Learnability", nota: "" },
          { tempo: "21:28", dur: 5, tipo: "enquete", desc: "Quando você adota Fixed Mindset?", nota: "" },
          { tempo: "21:33", dur: 10, tipo: "exposicao", desc: "Criatividade, Método, Tecnologia/IA", nota: "" },
          { tempo: "21:43", dur: 2, tipo: "breakout_prep", desc: "📱 QR Codes", nota: "qrcodes.html?aula=2&bloco=3" },
          { tempo: "21:45", dur: 8, tipo: "breakout", desc: "👥 BREAKOUT ROOM #3", nota: "" },
          { tempo: "21:53", dur: 5, tipo: "debate", desc: "🎤 Debate", nota: "" },
          { tempo: "21:58", dur: 7, tipo: "quiz", desc: "Quiz #3", nota: "" }
        ]
      },
      { num: 4, titulo: "Eixo Resiliência — GRIT e PDI", inicio: "22:05", fim: "23:00", duracao: 55,
        atividades: [
          { tempo: "22:05", dur: 15, tipo: "exposicao", desc: "GRIT, Antifragilidade, SCARF, Seg.Psicológica", nota: "" },
          { tempo: "22:20", dur: 5, tipo: "enquete", desc: "Quando precisou de mais GRIT?", nota: "" },
          { tempo: "22:25", dur: 8, tipo: "dinamica", desc: "Construir PDI — 2 competências", nota: "Template na tela" },
          { tempo: "22:33", dur: 2, tipo: "breakout_prep", desc: "📱 QR Codes", nota: "qrcodes.html?aula=2&bloco=4" },
          { tempo: "22:35", dur: 8, tipo: "breakout", desc: "👥 BREAKOUT ROOM #4", nota: "" },
          { tempo: "22:43", dur: 5, tipo: "debate", desc: "🎤 Debate", nota: "" },
          { tempo: "22:48", dur: 5, tipo: "quiz", desc: "Quiz #4", nota: "" },
          { tempo: "22:53", dur: 4, tipo: "exposicao", desc: "Resumo + Preview Aula 3", nota: "" },
          { tempo: "22:57", dur: 3, tipo: "avaliacao", desc: "⭐ PEDIR AVALIAÇÃO", nota: "⚠️ Formulário FIAP" }
        ]
      }
    ]
  },
  3: {
    titulo: "Aula 3 — A TRANSFORMAÇÃO: Cultura Organizacional",
    blocos: [
      { num: 1, titulo: "Modelos Teóricos de Cultura", inicio: "19:00", fim: "20:00", duracao: 60,
        atividades: [
          { tempo: "19:00", dur: 3, tipo: "chamada", desc: "📋 CHAMADA", nota: "⚠️ FAZER CHAMADA" },
          { tempo: "19:03", dur: 7, tipo: "dinamica", desc: "Debrief PDI + tarefas", nota: "" },
          { tempo: "19:10", dur: 15, tipo: "exposicao", desc: "Schein: Iceberg Cultural (3 níveis)", nota: "" },
          { tempo: "19:25", dur: 5, tipo: "video", desc: "🎥 Edgar Schein (5 min)", nota: "" },
          { tempo: "19:30", dur: 10, tipo: "exposicao", desc: "CVF: 4 quadrantes", nota: "" },
          { tempo: "19:40", dur: 2, tipo: "breakout_prep", desc: "📱 QR Codes", nota: "qrcodes.html?aula=3&bloco=1" },
          { tempo: "19:42", dur: 8, tipo: "breakout", desc: "👥 BREAKOUT ROOM #1", nota: "" },
          { tempo: "19:50", dur: 5, tipo: "debate", desc: "🎤 Debate", nota: "" },
          { tempo: "19:55", dur: 7, tipo: "quiz", desc: "Quiz #1", nota: "" }
        ]
      },
      { num: 2, titulo: "Cases: Netflix, Zappos, Spotify", inicio: "20:00", fim: "21:00", duracao: 60,
        atividades: [
          { tempo: "20:00", dur: 15, tipo: "exposicao", desc: "Netflix: Freedom & Responsibility", nota: "" },
          { tempo: "20:15", dur: 5, tipo: "video", desc: "🎥 Netflix Culture (5 min)", nota: "" },
          { tempo: "20:20", dur: 10, tipo: "exposicao", desc: "Zappos + Spotify Model", nota: "" },
          { tempo: "20:30", dur: 5, tipo: "enquete", desc: "Qual case mais inspira?", nota: "" },
          { tempo: "20:35", dur: 2, tipo: "breakout_prep", desc: "📱 QR Codes", nota: "qrcodes.html?aula=3&bloco=2" },
          { tempo: "20:37", dur: 8, tipo: "breakout", desc: "👥 BREAKOUT ROOM #2", nota: "" },
          { tempo: "20:45", dur: 5, tipo: "debate", desc: "🎤 Debate", nota: "" },
          { tempo: "20:50", dur: 7, tipo: "quiz", desc: "Quiz #2", nota: "" }
        ]
      },
      { num: 0, titulo: "☕ INTERVALO", inicio: "21:00", fim: "21:10", duracao: 10,
        atividades: [{ tempo: "21:00", dur: 10, tipo: "intervalo", desc: "Intervalo", nota: "CHAMADA ao retornar" }]
      },
      { num: 3, titulo: "Inovação e Transformação", inicio: "21:10", fim: "22:05", duracao: 55,
        atividades: [
          { tempo: "21:10", dur: 3, tipo: "chamada", desc: "📋 CHAMADA", nota: "⚠️ FAZER CHAMADA" },
          { tempo: "21:13", dur: 10, tipo: "exposicao", desc: "Open Innovation + Design Thinking", nota: "" },
          { tempo: "21:23", dur: 5, tipo: "video", desc: "🎥 Eric Ries Lean Startup (5 min)", nota: "" },
          { tempo: "21:28", dur: 10, tipo: "exposicao", desc: "Lean Startup + MVP + Ambidestria", nota: "" },
          { tempo: "21:38", dur: 2, tipo: "breakout_prep", desc: "📱 QR Codes", nota: "qrcodes.html?aula=3&bloco=3" },
          { tempo: "21:40", dur: 8, tipo: "breakout", desc: "👥 BREAKOUT ROOM #3", nota: "" },
          { tempo: "21:48", dur: 5, tipo: "debate", desc: "🎤 Debate", nota: "" },
          { tempo: "21:53", dur: 7, tipo: "quiz", desc: "Quiz #3", nota: "" }
        ]
      },
      { num: 4, titulo: "Gestão de Mudanças", inicio: "22:05", fim: "23:00", duracao: 55,
        atividades: [
          { tempo: "22:05", dur: 5, tipo: "video", desc: "🎥 John Kotter (5 min)", nota: "" },
          { tempo: "22:10", dur: 15, tipo: "exposicao", desc: "8 Passos de Kotter + ADKAR", nota: "" },
          { tempo: "22:25", dur: 5, tipo: "enquete", desc: "Qual passo de Kotter é mais difícil?", nota: "" },
          { tempo: "22:30", dur: 2, tipo: "breakout_prep", desc: "📱 QR Codes", nota: "qrcodes.html?aula=3&bloco=4" },
          { tempo: "22:32", dur: 8, tipo: "breakout", desc: "👥 BREAKOUT ROOM #4", nota: "" },
          { tempo: "22:40", dur: 5, tipo: "debate", desc: "🎤 Debate", nota: "" },
          { tempo: "22:45", dur: 5, tipo: "quiz", desc: "Quiz #4", nota: "" },
          { tempo: "22:50", dur: 5, tipo: "exposicao", desc: "Tarefa + Preview Aula 4", nota: "" },
          { tempo: "22:55", dur: 5, tipo: "exposicao", desc: "Encerramento", nota: "" },
          { tempo: "22:57", dur: 3, tipo: "avaliacao", desc: "⭐ PEDIR AVALIAÇÃO", nota: "⚠️ Formulário FIAP" }
        ]
      }
    ]
  },
  4: {
    titulo: "Aula 4 — O LEGADO: Execução e Resultados",
    blocos: [
      { num: 1, titulo: "OKRs e Métricas", inicio: "19:00", fim: "20:00", duracao: 60,
        atividades: [
          { tempo: "19:00", dur: 3, tipo: "chamada", desc: "📋 CHAMADA", nota: "⚠️ FAZER CHAMADA" },
          { tempo: "19:03", dur: 7, tipo: "dinamica", desc: "Debrief tarefas Aula 3", nota: "" },
          { tempo: "19:10", dur: 15, tipo: "exposicao", desc: "OKRs + CFRs + NSM + KPIs", nota: "" },
          { tempo: "19:25", dur: 5, tipo: "video", desc: "🎥 John Doerr OKRs (5 min)", nota: "" },
          { tempo: "19:30", dur: 7, tipo: "dinamica", desc: "Exercício: Escreva seus OKRs", nota: "3 voluntários apresentam" },
          { tempo: "19:37", dur: 3, tipo: "ia", desc: "🤖 IA para dashboards", nota: "" },
          { tempo: "19:40", dur: 2, tipo: "breakout_prep", desc: "📱 QR Codes", nota: "qrcodes.html?aula=4&bloco=1" },
          { tempo: "19:42", dur: 8, tipo: "breakout", desc: "👥 BREAKOUT ROOM #1", nota: "" },
          { tempo: "19:50", dur: 5, tipo: "debate", desc: "🎤 Debate", nota: "" },
          { tempo: "19:55", dur: 7, tipo: "quiz", desc: "Quiz #1", nota: "" }
        ]
      },
      { num: 2, titulo: "Radical Candor e People Analytics", inicio: "20:00", fim: "21:00", duracao: 60,
        atividades: [
          { tempo: "20:00", dur: 15, tipo: "exposicao", desc: "Radical Candor: 4 quadrantes", nota: "" },
          { tempo: "20:15", dur: 5, tipo: "video", desc: "🎥 Kim Scott (5 min)", nota: "" },
          { tempo: "20:20", dur: 10, tipo: "exposicao", desc: "People Analytics + SBI Master", nota: "" },
          { tempo: "20:30", dur: 2, tipo: "breakout_prep", desc: "📱 QR Codes", nota: "qrcodes.html?aula=4&bloco=2" },
          { tempo: "20:32", dur: 8, tipo: "breakout", desc: "👥 BREAKOUT ROOM #2", nota: "" },
          { tempo: "20:40", dur: 5, tipo: "debate", desc: "🎤 Debate", nota: "" },
          { tempo: "20:45", dur: 7, tipo: "quiz", desc: "Quiz #2", nota: "" },
          { tempo: "20:52", dur: 8, tipo: "exposicao", desc: "IA para feedback + prompts", nota: "" }
        ]
      },
      { num: 0, titulo: "☕ INTERVALO", inicio: "21:00", fim: "21:10", duracao: 10,
        atividades: [{ tempo: "21:00", dur: 10, tipo: "intervalo", desc: "Intervalo", nota: "CHAMADA ao retornar" }]
      },
      { num: 3, titulo: "IA como Copiloto", inicio: "21:10", fim: "22:05", duracao: 55,
        atividades: [
          { tempo: "21:10", dur: 3, tipo: "chamada", desc: "📋 CHAMADA", nota: "⚠️ FAZER CHAMADA" },
          { tempo: "21:13", dur: 10, tipo: "exposicao", desc: "IA Copiloto + Decisões Data-Driven", nota: "" },
          { tempo: "21:23", dur: 5, tipo: "video", desc: "🎥 Nadella AI Copilot (4 min)", nota: "" },
          { tempo: "21:28", dur: 10, tipo: "exposicao", desc: "Prompts para líderes + ExOs", nota: "" },
          { tempo: "21:38", dur: 2, tipo: "breakout_prep", desc: "📱 QR Codes", nota: "qrcodes.html?aula=4&bloco=3" },
          { tempo: "21:40", dur: 8, tipo: "breakout", desc: "👥 BREAKOUT ROOM #3", nota: "" },
          { tempo: "21:48", dur: 5, tipo: "debate", desc: "🎤 Debate", nota: "" },
          { tempo: "21:53", dur: 7, tipo: "quiz", desc: "Quiz #3", nota: "" }
        ]
      },
      { num: 4, titulo: "🏆 O GRANDE FINALE", inicio: "22:05", fim: "23:00", duracao: 55,
        atividades: [
          { tempo: "22:05", dur: 10, tipo: "exposicao", desc: "Plano 30-60-90 Dias", nota: "" },
          { tempo: "22:15", dur: 5, tipo: "video", desc: "🎥 Simon Sinek (5 min)", nota: "" },
          { tempo: "22:20", dur: 20, tipo: "dinamica", desc: "🧪 EXERCÍCIO PRÁTICO COM IA (5 prompts)", nota: "Alunos geram trabalho final AO VIVO com ChatGPT" },
          { tempo: "22:40", dur: 2, tipo: "breakout_prep", desc: "📱 QR Codes", nota: "qrcodes.html?aula=4&bloco=4" },
          { tempo: "22:42", dur: 8, tipo: "breakout", desc: "👥 BREAKOUT ROOM #4 — Grande Debate Final", nota: "" },
          { tempo: "22:50", dur: 5, tipo: "debate", desc: "🎤 Debate Final", nota: "" },
          { tempo: "22:55", dur: 5, tipo: "exposicao", desc: "Encerramento épico + Desafio 21 Dias", nota: "Mensagem final inspiradora" },
          { tempo: "22:57", dur: 3, tipo: "avaliacao", desc: "⭐ PEDIR AVALIAÇÃO FINAL", nota: "⚠️ Última chance! Formulário FIAP" }
        ]
      }
    ]
  }
};

if (typeof module !== "undefined") module.exports = { AULA_DATA };
