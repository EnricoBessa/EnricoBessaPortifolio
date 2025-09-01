// constants/index.js
// site usado para pegar imagens https://simpleicons.org/


export const skills = [
  {
    name: 'C#',
    imageUrl: '/images/csharp.png',
  },
  {
    name: 'DotNet',
    imageUrl: '/images/dotnet.svg',
  },
  {
    name: 'JavaScript',
    imageUrl: '/images/javascript.svg',
  },
  {
    name: 'HTML5',
    imageUrl: '/images/html5.svg',
  },
  {
    name: 'CSS',
    imageUrl: '/images/css.svg',
  },
  {
    name: 'Mysql',
    imageUrl: '/images/mysql.svg',
  },
  {
    name: 'Python',
    imageUrl: '/images/python.svg',
  },
  {
    name: 'C',
    imageUrl: '/images/c.svg',
  },
  {
    name: 'PHP',
    imageUrl: '/images/php.svg',
  },

  // {
  //   name: 'Networks',
  //   imageUrl: '/images/network.png', 
  // },
  // {
  //   name: 'Computer Architecture',
  //   imageUrl: '/images/architecture.png',
  // },
  // {
  //   name: 'English (Intermediate)',
  //   imageUrl: '/images/english.png',
  // },
];

export const projects = [
  {
    name: 'Portfolio Website',
    initialDescription: 'Um site responsivo para apresentar meus projetos, habilidades e experiências de forma profissional.',
    technology: 'Tecnologias',
    description: `
    Frontend: React com Tailwind CSS para estilização moderna e responsiva
    Design: Interface otimizada para desktop e mobile, com foco em usabilidade
    Extra: Código modular, fácil de expandir e atualizar

    Por que é valorizado:
    Demonstra domínio de frontend moderno (React + Tailwind)
    Serve como vitrine pessoal para recrutadores e empresas
    Mostra preocupação com UI/UX e organização de conteúdo`,
    IconUrl: '/images/react.svg',
    link: '',
    theme: 'bg-gradient-to-tr from-orange-400 to-yellow-500'
  },
  {
    name: 'AimTrainer',
    initialDescription: 'Jogo de treino de mira feito com base principal na biblioteca pygame.',
    technology: 'Tecnologias',
    description: `
    Backend: Python
    Extra: pygame`,
    IconUrl: '/images/python.svg',
    link: 'https://github.com/EnricoBessa/AimTrainer',
    theme: 'bg-gradient-to-tr from-indigo-500 to-purple-600'
  },
  {
    name: 'AiAgent',
    initialDescription: 'Aplicação personalizável com módulos como vendas, estoque, agenda e finanças.',
    technology: 'Tecnologias',
    description: `
    Backend: Python com integração ao Ollama
    IA: Modelo Gemma 3B para respostas conversacionais`,
    IconUrl: '/images/python.svg',
    link: 'https://github.com/EnricoBessa/AiAgent',
    theme: 'bg-gradient-to-tr from-teal-400 to-cyan-500'
  },
  {
    name: 'Plataforma SaaS Simples',
    initialDescription: 'Sistema web com autenticação, planos gratuitos e pagos, e funcionalidades úteis como CRM e agendamentos.',
    technology: 'Tecnologias',
    description: `
    Backend: C# com ASP.NET Core ou Python (Flask/Django)
    Frontend: HTML/CSS + JS ou framework como React
    Banco: SQL Server ou PostgreSQL
    Extra: Deploy na nuvem (Render, Azure, Vercel)

    Por que é valorizado:
    Mostra domínio de arquitetura fullstack
    Mostra entendimento de produto (UX/UI, problema x solução)
    SaaS está em alta no mercado`,
    IconUrl: '/images/html5.svg',
    link: '#',
    theme: 'bg-gradient-to-tr from-pink-500 to-red-500'
  },
  {
    name: 'Dashboard de Monitoramento de Rede ou Infraestrutura',
    initialDescription: 'Sistema que monitora máquinas, IPs, tráfego de rede e recursos do sistema em tempo real.',
    technology: 'Tecnologias',
    description: `
    Backend: Python com psutil, ping3 ou socket, ou C#
    Frontend: Dashboard com JS ou React
    Banco: SQLite ou PostgreSQL
    Extra: Gráficos com Chart.js ou Recharts

    Por que é valorizado:
    Mostra conhecimento em redes e sistemas
    Serve como ferramenta prática para empresas
    Pode evoluir para DevOps/SRE`,
    IconUrl: '/images/python.svg',
    link: '#',
    theme: 'bg-gradient-to-tr from-blue-600 to-sky-500'
  },
  {
    name: 'Sistema de RH ou Controle de Vagas com Recrutamento Inteligente',
    initialDescription: 'Plataforma para empresas publicarem vagas e receberem recomendações inteligentes de candidatos.',
    technology: 'Tecnologias',
    description: `
    Backend: C# ou Python
    Frontend: JS/HTML
    Banco: SQL
    Extra: Pode usar NLP (Processamento de Linguagem Natural) básico com Python para "match" de currículos

    Por que é valorizado:
    RH tech está crescendo muito
    Mostra aplicação de lógica, design de sistema e pode até entrar em temas de IA`,
    IconUrl: '/images/javascript.svg',
    link: '#',
    theme: 'bg-gradient-to-tr from-lime-400 to-green-600'
  }
];