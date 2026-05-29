// CONTACT INFORMATION
const CONTACT_INFO = {
  linkedin: 'https://www.linkedin.com/in/eduardo-marques-dos-santos-488111253',
  github: 'https://github.com/dudumsantos1976-design',
  email: 'eduardoomarques42@gmail.com'
};

// TYPING EFFECT
const phrases = [
  'Engenharia da Computação',
  'Desenvolvedor IoT & Sistemas Embarcados',
  'Automação'
];
let pi = 0, ci = 0, deleting = false;
const el = document.getElementById('typing-text');

function type() {
  const phrase = phrases[pi];
  if (!deleting) {
    el.textContent = phrase.substring(0, ci + 1);
    ci++;
    if (ci === phrase.length) {
      deleting = true;
      setTimeout(type, 1800);
      return;
    }
  } else {
    el.textContent = phrase.substring(0, ci - 1);
    ci--;
    if (ci === 0) {
      deleting = false;
      pi = (pi + 1) % phrases.length;
    }
  }
  setTimeout(type, deleting ? 40 : 75);
}
setTimeout(type, 500);

// SCROLL REVEAL
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// MODAL DATA
const projects = {
  forklift: {
    title: '<span>ForkLift</span> Control',
    tags: ['ESP32', 'LoRa SX1278', 'MQTT', 'HiveMQ Cloud', 'TypeScript', 'Supabase'],
    imgAlt: 'Screenshot — ForkLift Control: painel de autorização de empilhadeiras',
    sections: [
      {
        title: 'Visão Geral',
        text: 'Sistema IoT industrial para gerenciamento e liberação segura de empilhadeiras. Impede o acionamento mecânico até que uma autorização digital seja enviada via aplicativo, garantindo rastreabilidade total do uso do maquinário.'
      },
      {
        title: 'Arquitetura & Hardware',
        text: 'Dois módulos ESP32 operam como Publisher e Subscriber em comunicação sem fio via Rádio LoRa (SX1278). O protocolo MQTT é gerenciado via HiveMQ Cloud. Na ponta física, um Módulo Relé isolado controla um motor DC que simula a ignição, com sensor LED para feedback de estado.'
      },
      {
        title: 'Software & Segurança',
        text: 'Aplicativo móvel desenvolvido em TypeScript, integrado ao Supabase para autenticação diferenciada de operadores e gestores. Todos os eventos são gravados em tempo real em banco de dados, gerando logs completos de uso: quem autorizou, quando e por quanto tempo o maquinário operou.'
      }
    ]
  },
  securemall: {
    title: '<span>Secure</span>Mall',
    tags: ['Raspberry Pi 4', 'Python', 'DeepFace', 'OpenCV', 'Flask API', 'SQLite', 'LGPD'],
    imgAlt: 'Screenshot — SecureMall: interface de reconhecimento facial e gestão de acessos',
    sections: [
      {
        title: 'Visão Geral',
        text: 'Sistema residencial e patrimonial de controle de acessos automatizado utilizando Inteligência Artificial para identificação biométrica em tempo real. Processa rostos localmente, sem dependência de nuvem para os dados sensíveis.'
      },
      {
        title: 'Arquitetura & Hardware',
        text: 'Raspberry Pi 4 atua como nó de processamento local com capacidade de inferência de IA. Uma Webcam USB realiza captura contínua de frames. O resultado da autenticação aciona um módulo relé que controla a trava eletrônica via servo motor.'
      },
      {
        title: 'Software & Segurança',
        text: 'Desenvolvido em Python com as bibliotecas DeepFace (vetorização facial) e OpenCV (captura e processamento de imagem). A API em Flask gerencia o banco de perfis ativos/inativos e o log de todas as tentativas de acesso. Todo o sistema foi projetado em conformidade com a LGPD: dados biométricos armazenados como embeddings vetoriais, não como imagens.'
      }
    ]
  },
  triagem: {
    title: 'Triagem de <span>Cargas</span>',
    tags: ['Arduino Uno', 'C++', 'USB Host Shield', 'HID Protocol', 'I2C', 'LCD 16x2', 'Bematech BR-400'],
    imgAlt: 'Screenshot — Sistema de Triagem: leitura de código de barras e exibição no display LCD',
    sections: [
      {
        title: 'Visão Geral',
        text: 'Protótipo voltado para automação industrial e logística portuária. Realiza leitura e classificação automatizada de mercadorias por código de barras, exibindo o status diretamente no display físico para o operador.'
      },
      {
        title: 'Arquitetura & Hardware',
        text: 'Arduino Uno integrado com USB Host Shield para comunicação com o Leitor de Código de Barras Bematech BR-400 via protocolo HID (emulação de teclado USB). Os resultados são exibidos em Display LCD 16x2 com módulo I2C, reduzindo o número de pinos utilizados.'
      },
      {
        title: 'Lógica de Software (C++)',
        text: 'Firmware configurado com varredura automática por gatilho. O código processa a string escaneada, armazena em buffer, valida o código contra uma matriz de grupos pré-definidos e retorna visualmente o status da carga (Aprovado / Rejeitado / Desconhecido) ao operador em menos de 200ms.'
      }
    ]
  },
  brassagem: {
    title: 'Automação de <span>Brassagem</span>',
    tags: ['Arduino Uno', 'C++', 'DS18B20', 'Relé 4 Canais', 'Histerese', '220V'],
    imgAlt: 'Screenshot — Automação de Brassagem: gráfico de temperatura e rampas enzimáticas',
    sections: [
      {
        title: 'Visão Geral',
        text: 'Sistema de controle microcontrolado para automação de rampas de aquecimento no processo de mosturação (mashing) da produção de cerveja artesanal. Mantém as temperaturas alvo com precisão para respeitar as janelas enzimáticas.'
      },
      {
        title: 'Arquitetura & Hardware',
        text: 'Arduino Uno atua como controlador central. O sensor de temperatura DS18B20 à prova d\'água monitora continuamente a temperatura do mosto líquido via protocolo 1-Wire. O módulo relé de 4 canais gerencia o acionamento do fogão elétrico de alta potência (220V/5500W).'
      },
      {
        title: 'Lógica de Controle',
        text: 'Algoritmo em C++ com leitura analógica/digital e lógica de histerese configurável. O sistema liga o elemento aquecedor quando a temperatura cai X°C abaixo do alvo e desliga quando ultrapassa Y°C acima, evitando ciclos rápidos de liga/desliga que degradam o relé. As rampas enzimáticas (beta-glucanase, proteólise, sacarificação) são programadas em sequência com temporizador.'
      }
    ]
  },
  abcomm: {
    title: 'Prêmio <span>Abcomm</span> 2025',
    tags: ['Bubble.io', 'APIs REST', 'Banco de Dados Relacional', 'UX/UI Responsivo', 'Autenticação'],
    imgAlt: 'Screenshot — Prêmio Abcomm 2025: plataforma de votação e premiação digital',
    sections: [
      {
        title: 'Visão Geral',
        text: 'Plataforma web desenvolvida para gerenciamento da maior premiação do mercado digital brasileiro, centralizando inscrições, categorias e votação online em um único ambiente robusto e escalável.'
      },
      {
        title: 'Funcionalidades',
        text: 'Sistema de votação seguro com controle de duplicidade, gerenciamento administrativo completo de categorias e candidatos, autenticação de usuários e dashboards operacionais para acompanhamento em tempo real do volume de votos e participações.'
      },
      {
        title: 'Arquitetura & Escalabilidade',
        text: 'Estrutura otimizada para suportar mais de 50 mil acessos e alto volume de interações simultâneas durante o período de votação. A arquitetura garante integridade dos dados e disponibilidade mesmo sob picos de tráfego intensos.'
      }
    ]
  },
  abconecta: {
    title: 'ABConecta <span>Jobs</span>',
    tags: ['Bubble.io', 'APIs REST', 'JavaScript', 'Banco de Dados Relacional', 'Multiusuário'],
    imgAlt: 'Screenshot — ABConecta Jobs: portal de vagas e gestão de candidaturas',
    sections: [
      {
        title: 'Visão Geral',
        text: 'Plataforma web para recrutamento e conexão entre empresas e candidatos através de um sistema moderno de vagas e gestão de currículos, com experiência otimizada para ambos os lados da contratação.'
      },
      {
        title: 'Funcionalidades',
        text: 'Cadastro e publicação de vagas pelas empresas, filtros inteligentes de busca por área, salário e localidade, autenticação multiusuário (empresa/candidato), dashboard administrativo e gerenciamento completo de candidaturas e status.'
      },
      {
        title: 'Arquitetura & Dados',
        text: 'Estrutura orientada para escalabilidade e gerenciamento eficiente de grandes volumes de registros de candidatos e vagas. Integração com APIs REST para enriquecer funcionalidades e garantir sincronização de dados em tempo real.'
      }
    ]
  },
  yolo: {
    title: 'Contador de <span>Colônias</span> YOLOv8',
    tags: ['YOLOv8', 'Python', 'OpenCV', 'Deep Learning', 'Visão Computacional'],
    imgAlt: 'Screenshot — Contador de Colônias: detecção e contagem automatizada via IA',
    sections: [
      {
        title: 'Visão Geral',
        text: 'Sistema de visão computacional para identificação e contagem automatizada de colônias laboratoriais utilizando Inteligência Artificial. Elimina a contagem manual, reduzindo erros humanos e acelerando análises em ambientes de pesquisa e controle de qualidade.'
      },
      {
        title: 'Arquitetura & IA',
        text: 'Modelo YOLOv8 (You Only Look Once v8) treinado especificamente para reconhecimento de padrões laboratoriais — variações de tamanho, cor e densidade das colônias. O treinamento customizado garante alta precisão em condições reais de laboratório.'
      },
      {
        title: 'Pipeline de Processamento',
        text: 'Pipeline em Python utilizando OpenCV para pré-processamento das imagens (normalização, ajuste de contraste, segmentação). O sistema realiza detecção, classificação e contagem em tempo real, exibindo os resultados com bounding boxes e relatório numérico final.'
      }
    ]
  },
  certificados: {
    title: 'Automação de <span>Certificados</span>',
    tags: ['Make (Integromat)', 'Google Sheets', 'APIs REST', 'No-Code', 'Integração'],
    imgAlt: 'Screenshot — Automação de Certificados: fluxo de geração e distribuição automática',
    sections: [
      {
        title: 'Visão Geral',
        text: 'Sistema automatizado para geração e distribuição de certificados digitais integrado ao Google Sheets e plataformas web. Elimina o trabalho manual de criação individual de certificados, transformando horas de trabalho em execução instantânea.'
      },
      {
        title: 'Funcionalidades',
        text: 'Criação dinâmica de certificados personalizados (nome, curso, data, carga horária), atualização automática de links de download na planilha de origem e integração entre múltiplas plataformas para distribuição por e-mail ou publicação direta.'
      },
      {
        title: 'Arquitetura & Impacto',
        text: 'Fluxos automatizados construídos no Make para orquestrar a comunicação entre Google Sheets, geradores de PDF e plataformas de e-mail. O resultado foi uma redução significativa no tempo de emissão e gerenciamento de certificados, com ganho operacional direto para a equipe.'
      }
    ]
  },
  totvs: {
    title: 'Integração <span>ERP TOTVS</span>',
    tags: ['Python', 'APIs', 'SQL', 'Integração de Sistemas', 'Backend'],
    imgAlt: 'Screenshot — Integração ERP TOTVS: sincronização de sistemas empresariais',
    sections: [
      {
        title: 'Visão Geral',
        text: 'Atuação no desenvolvimento de automações internas e integrações de dados utilizando Python no VS Code e Google Colab, conectando APIs, bancos de dados SQL e processos corporativos para reduzir tarefas manuais e melhorar a eficiência operacional.'
      },
      {
        title: 'Funcionalidades',
        text: 'Automação de rotinas administrativas, processamento e manipulação de dados, integração entre sistemas corporativos, consultas SQL para análise e sincronização de informações, além da geração de fluxos automatizados para otimização operacional.'
      },
      {
        title: 'Arquitetura & Confiabilidade',
        text: 'Estrutura desenvolvida com foco em automação backend, tratamento de dados e integração de sistemas. Utilização de Python para scripts e automações, SQL para consultas e manipulação de dados, APIs REST para comunicação entre plataformas e ambiente VS Code/Google Colab para desenvolvimento e testes.'
      }
    ]
  },
  ajudaai: {
    title: '<span>AJUDAAI</span> — Plataforma Social',
    tags: ['Bubble.io', 'APIs REST', 'Banco de Dados Relacional', 'UX/UI', 'Mobile-First'],
    imgAlt: 'Screenshot — AJUDAAI: plataforma de descoberta e divulgação de ONGs',
    sections: [
      {
        title: 'Visão Geral',
        text: 'Plataforma social desenvolvida para organização, categorização e divulgação de ONGs e projetos sociais. Conecta pessoas que querem ajudar com instituições que precisam de apoio, democratizando o acesso à informação sobre causas sociais.'
      },
      {
        title: 'Funcionalidades',
        text: 'Cadastro de instituições com perfil completo, sistema de busca inteligente por causa, localização e tipo de apoio necessário, categorização dinâmica por área de atuação (saúde, educação, meio ambiente etc.) e interface totalmente responsiva.'
      },
      {
        title: 'Arquitetura & UX',
        text: 'Estrutura otimizada para acessibilidade e navegação intuitiva, desenvolvida com abordagem Mobile-First para garantir a melhor experiência em dispositivos móveis — o principal meio de acesso do público-alvo. Banco de dados relacional estruturado para buscas eficientes mesmo com alto volume de cadastros.'
      }
    ]
  }
};

function openModal(key) {
  const p = projects[key];
  document.getElementById('modal-title').innerHTML = p.title;
  document.getElementById('modal-body').innerHTML = `
    <div class="modal-img">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" width="48" height="48">
        <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
      </svg>
      <span class="modal-img-label">${p.imgAlt}</span>
    </div>
    <div class="modal-section">
      <div class="modal-section-title">Tecnologias</div>
      <div class="modal-tech-list">${p.tags.map(t => `<span class="modal-tag">${t}</span>`).join('')}</div>
    </div>
    ${p.sections.map(s => `
      <div class="modal-section">
        <div class="modal-section-title">${s.title}</div>
        <p>${s.text}</p>
      </div>
    `).join('')}
  `;
  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

function handleOverlayClick(e) {
  if (e.target === document.getElementById('modal-overlay')) closeModal();
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// FILTER
function filterProjects(cat, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.project-card').forEach(card => {
    if (cat === 'all' || card.dataset.cat === cat) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}

// FORM
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.textContent = 'Enviando...';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = '✓ Enviado!';
    document.getElementById('success-msg').style.display = 'block';
    e.target.reset();
    setTimeout(() => {
      btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg> Enviar Mensagem';
      btn.disabled = false;
      document.getElementById('success-msg').style.display = 'none';
    }, 4000);
  }, 1200);
}
