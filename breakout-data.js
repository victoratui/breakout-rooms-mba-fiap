// Breakout Room content for all 4 classes × 4 blocks
const BREAKOUT_DATA = {
  1: {
    titulo: "Aula 1 — O Chamado: Fundamentos da Excelência",
    blocos: {
      1: {
        tema: "Liderança sem Cargo",
        grupos: {
          alfa: "Qual é o exemplo mais forte de liderança SEM cargo formal que vocês já viram na carreira? Listem 3 características em comum desses líderes informais.",
          beta: "Como Malala aplicou coragem moral? Qual situação na sua empresa exigiu coragem similar de alguém? Deem 2 exemplos concretos.",
          gamma: "Se sua equipe pudesse ter só 5 das 16 competências, quais escolheriam e por quê? Cheguem a um consenso do grupo.",
          delta: "Qual o maior medo que impede a liderança na sua organização? Como criar um ambiente onde esse medo diminua? Proponham 3 ações."
        }
      },
      2: {
        tema: "OODA Loop e Frameworks de Decisão",
        grupos: {
          alfa: "Apliquem o OODA Loop a uma decisão real que alguém do grupo enfrentou recentemente. Detalhem cada etapa (Observar, Orientar, Decidir, Agir).",
          beta: "Usando a Matriz de Eisenhower, classifiquem 5 tarefas típicas do dia a dia de vocês. Quantas estão no quadrante verde (importante/não urgente)?",
          gamma: "Criem 2 exemplos de feedback usando o modelo SBI — 1 positivo e 1 construtivo. Simulem a conversa.",
          delta: "Em qual estágio de Tuckman a equipe de vocês está? Que ações o líder deveria tomar para avançar ao próximo estágio?"
        }
      },
      3: {
        tema: "Projeto Aristóteles e SCARF",
        grupos: {
          alfa: "Para a empresa de vocês, avaliem cada pilar do Aristóteles (1-10): Segurança Psicológica, Confiabilidade, Estrutura, Significado, Impacto. Qual é o mais fraco?",
          beta: "Descrevam uma situação real onde o SCARF de alguém foi ameaçado no trabalho. Qual domínio? O que deveria ter sido feito diferente?",
          gamma: "Analisem o 'Desafio do VP de Operações': NPS caindo, 3 talentos saindo, 40% de atraso. Quais pilares do Aristóteles estão falhando? Primeira ação?",
          delta: "Como vocês usariam People Analytics (IA) para medir segurança psicológica na equipe? Quais perguntas de pulse survey fariam?"
        }
      },
      4: {
        tema: "Plano de Ação e Compromisso",
        grupos: {
          alfa: "Cada membro: escreva 1 valor essencial da sua equipe + 1 ação concreta para fortalecê-lo. Compartilhem e encontrem padrões comuns.",
          beta: "Criem o 'Desafio de 5 Dias' personalizado para a realidade de vocês. 5 ações práticas, 1 por dia, usando os frameworks da aula.",
          gamma: "Qual ferramenta de IA vocês implementariam AMANHÃ na equipe? RPA, ChatGPT, Power BI, People Analytics? Justifiquem com caso de uso.",
          delta: "Escrevam coletivamente uma 'Missão da Equipe' em 1 frase para cada membro do grupo. Usem o formato: 'Existimos para [verbo] [impacto] para [beneficiário]'."
        }
      }
    }
  },
  2: {
    titulo: "Aula 2 — O Desenvolvimento: 16 Competências do Líder",
    blocos: {
      1: {
        tema: "Liderança por Propósito",
        grupos: {
          alfa: "Qual é o exemplo mais forte de liderança SEM cargo formal que vocês já viram? Listem 3 características que esses líderes têm em comum.",
          beta: "Como Malala aplicou coragem moral? Qual situação na empresa de vocês exigiu coragem similar? Compartilhem e discutam.",
          gamma: "Das 16 competências, quais 5 são ESSENCIAIS para a equipe de vocês? Cheguem a consenso e justifiquem.",
          delta: "Qual o maior medo que impede a liderança na sua organização? Como criar um ambiente onde esse medo diminua?"
        }
      },
      2: {
        tema: "Comunicação e Influência",
        grupos: {
          alfa: "Cenário: CEO anuncia corte de 15% do budget. Usando SBAR, preparem a comunicação para o time em 1 minuto de fala.",
          beta: "Dos 6 princípios de Cialdini, qual é o mais PERIGOSO se mal usado? E qual é o mais eficaz para liderança ética? Argumentem.",
          gamma: "Cada membro dá 1 feedback positivo SBI para outro do grupo. Depois discutam: por que é tão difícil dar feedback positivo?",
          delta: "Dos 7 Hábitos de Covey, qual é o mais NEGLIGENCIADO pelos líderes de tecnologia? Por quê? Como mudar isso?"
        }
      },
      3: {
        tema: "Growth Mindset e Aprendizado",
        grupos: {
          alfa: "Se vocês fossem o novo CEO de uma empresa 'know-it-all', quais seriam as 3 primeiras ações para mudar para 'learn-it-all'?",
          beta: "Um membro sênior resiste a aprender IA: 'Funciono bem há 20 anos sem isso.' Como vocês lidariam? Simulem a conversa usando GROW.",
          gamma: "Usem Design Thinking para: 'Alunos de MBA online perdem engajamento após a 2ª aula.' Proponham solução em 5 etapas.",
          delta: "Cada membro compartilha seu maior 'ladrão de tempo'. O grupo propõe solução usando Pomodoro, Kanban ou Time Blocking."
        }
      },
      4: {
        tema: "Resiliência e PDI",
        grupos: {
          alfa: "Equipe com burnout severo + CEO pressionando entregas. Usando GRIT + SCARF, como equilibrar performance e saúde mental? 3 ações.",
          beta: "Membro falhou em projeto importante e quer pedir demissão. Apliquem Antifragilidade para transformar em crescimento. Simulem a conversa.",
          gamma: "PDI cruzado: cada membro apresenta sua competência-lacuna #1. O grupo sugere 2 ações concretas para cada.",
          delta: "Listem 3 comportamentos que DESTROEM segurança psicológica + 3 ações para CRIAR. Sejam específicos com exemplos."
        }
      }
    }
  },
  3: {
    titulo: "Aula 3 — A Transformação: Cultura Organizacional",
    blocos: {
      1: {
        tema: "Diagnóstico Cultural",
        grupos: {
          alfa: "Para sua empresa: 2 exemplos de cada nível de Schein — Artefatos, Valores Declarados, Pressupostos Básicos. Onde está o maior GAP?",
          beta: "Posicionem a empresa no CVF. Qual quadrante predomina? Qual DEVERIA predominar em 3 anos? O que precisa mudar?",
          gamma: "Listem 3 valores que sua empresa DECLARA mas NÃO PRATICA. Para cada, identifiquem o pressuposto básico que impede a prática.",
          delta: "Como usariam Pulse Surveys com IA para medir cultura real? Desenhem plano de 3 meses com perguntas-chave e métricas."
        }
      },
      2: {
        tema: "Cases de Cultura — Netflix, Zappos, Spotify",
        grupos: {
          alfa: "Apliquem o Keeper Test (mentalmente) à PRÓPRIA equipe. É ético? É eficaz? Em qual contexto funciona e não funciona?",
          beta: "Criem onboarding de 1 semana inspirado na Zappos. Incluam 1 'teste cultural' que revele fit.",
          gamma: "Reorganizem a equipe de vocês no modelo Spotify. Definam Squads, Chapters e 1 Guild.",
          delta: "Peguem o MELHOR de cada case (Netflix + Zappos + Spotify) e criem o modelo de cultura IDEAL para a empresa de vocês."
        }
      },
      3: {
        tema: "Inovação Aplicada",
        grupos: {
          alfa: "MVP CHALLENGE: Definam 1 MVP para sua empresa. Hipótese → MVP → Métrica de sucesso → Timeline (máx 2 semanas).",
          beta: "Design Thinking para: 'Reuniões improdutivas consomem 30% do tempo.' Apliquem as 5 etapas em 8 min.",
          gamma: "Como criar um 'lab de inovação' sem prejudicar a operação? Proponham: estrutura, budget, pessoas, governança, 1 projeto piloto.",
          delta: "Identifiquem 3 startups/universidades para parceria com sua empresa. Qual problema cada uma resolveria?"
        }
      },
      4: {
        tema: "Liderando Mudanças",
        grupos: {
          alfa: "Escolham 1 mudança real na empresa. Planejem os 8 passos de Kotter com ações concretas. Foquem nos 3 primeiros.",
          beta: "Para a mesma mudança: onde a maioria das pessoas trava no ADKAR (A, D, K, A ou R)? 2 ações para destravar.",
          gamma: "CRISE: Seu principal cliente (40% da receita) vai trocar de fornecedor em 60 dias. Plano de resposta usando Kotter + OODA + SCARF.",
          delta: "Desenhem como usariam IA para monitorar e acelerar uma transformação digital. Ferramentas, métricas, timeline 6 meses."
        }
      }
    }
  },
  4: {
    titulo: "Aula 4 — O Legado: Execução e Resultados",
    blocos: {
      1: {
        tema: "OKRs na Prática",
        grupos: {
          alfa: "Cada membro apresenta seu OKR. O grupo escolhe o MELHOR e refina coletivamente. Apresentem a versão final.",
          beta: "Definam a North Star Metric para 3 empresas (tech, varejo, serviços). Justifiquem cada escolha.",
          gamma: "Para sua empresa: 3 leading e 3 lagging indicators. Quais leading vocês NÃO medem mas deveriam?",
          delta: "Desenhem o ritual IDEAL de CFR semanal. Tempo, perguntas, formato. Como evitar virar 'status meeting'?"
        }
      },
      2: {
        tema: "Feedback e Dados",
        grupos: {
          alfa: "Role-play em duplas: pratiquem 1 feedback Radical Candor com SBI. Depois: o que foi mais difícil?",
          beta: "Se tivessem acesso a TODOS os dados de RH, quais 3 análises fariam primeiro? Priorizem por impacto.",
          gamma: "Cada membro: 1 situação onde caiu em Ruinous Empathy. O grupo reescreve em Radical Candor.",
          delta: "Criem um 'protocolo' de feedback upward (para o chefe). Passo a passo que qualquer pessoa possa seguir."
        }
      },
      3: {
        tema: "IA como Copiloto",
        grupos: {
          alfa: "Cada membro cria 1 prompt para resolver um problema real com ChatGPT. O grupo vota no mais criativo e eficaz.",
          beta: "Cenário ético: 'IA prevê que 3 funcionários vão pedir demissão.' O que fazer? Discutam limites éticos.",
          gamma: "Escolham 1 processo e redesenhem como Organização Exponencial. Qual tecnologia? Ganho de 10x?",
          delta: "Em 2030: qual % das decisões de liderança terá apoio de IA? 20%? 50%? 80%? Argumentem com prós e contras."
        }
      },
      4: {
        tema: "🏆 O Grande Debate Final",
        grupos: {
          alfa: "Como será o líder ideal em 2030? Quais das 16 competências serão mais importantes? Quais IA substituirá?",
          beta: "'Qual legado VOCÊ quer deixar?' Cada membro declara em 1 frase. O grupo escolhe a mais impactante.",
          gamma: "Definam os limites da IA: O que DEVE fazer, o que PODE fazer, e o que NUNCA deve fazer em gestão de pessoas.",
          delta: "Escrevam uma 'Carta ao Líder Brasileiro de 2026' com 5 conselhos baseados nas 4 aulas. Máximo 100 palavras."
        }
      }
    }
  }
};

if (typeof module !== "undefined") module.exports = { BREAKOUT_DATA };
