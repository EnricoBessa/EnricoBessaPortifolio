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

export const experience = [
  {
    title: "Support and Data Analysis Intern",
    company_name: "EMATER-MG",
    icon: "/images/emater.png",
    iconBg: "white",
    date: "April 2023 - March 2024",
    points: [
      "Provided support in IT and data analysis operations.",
      "Assisted in data management and internal system maintenance.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "DTG Consultoria e Projetos",
    icon: "/images/dtg.jpeg",
    iconBg: "white",
    date: "April 2024 - Present",
    points: [
      "Working on software engineering projects in a hybrid environment.",
      "Collaborating with multidisciplinary teams to deliver robust technical solutions.",
    ],
  },
];

export const education = [
  {
    title: "Technical Degree in IT",
    institution_name: "COTEMIG - College and High School",
    icon: "/images/cotemig.png",
    iconBg: "white",
    date: "January 2020 - December 2022",
    points: [
      "Hands-on experience with HTML5, MySQL, PHP, and other technologies.",
      "Built foundational knowledge in networks, programming, and databases.",
    ],
  },
  {
    title: "Bachelor's in Software Engineering",
    institution_name: "PUC Minas",
    icon: "/images/puc.png",
    iconBg: "white",
    date: "January 2023 - Present",
    points: [
      ".NET Framework development and core software engineering subjects.",
      "Focus on backend development, databases, and software architecture.",
    ],
  },
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
    name: 'Plataforma de Quiz com IA ou Recomendação Personalizada',
    initialDescription: 'Uma plataforma de quizzes com análise de desempenho e sugestões personalizadas com base nos erros.',
    technology: 'Tecnologias',
    description: `
    Backend: Python (com Flask + Pandas) ou C#
    Frontend: JS + HTML/CSS
    Extra: API com recomendação personalizada (pode usar ML básico)

    Por que é valorizado:
    Liga com Educação (área em expansão)
    Mostra lógica, análise de dados e foco no usuário`,
    IconUrl: '/images/python.svg',
    link: '#',
    theme: 'bg-gradient-to-tr from-indigo-500 to-purple-600' 
  },
  {
    name: 'Plataforma Modular para Pequenos Negócios',
    initialDescription: 'Aplicação personalizável com módulos como vendas, estoque, agenda e finanças.',
    technology: 'Tecnologias',
    description: `
    Backend: C# com ASP.NET MVC ou Python
    Frontend: HTML/CSS/JS
    Banco: SQL Server, PostgreSQL
    Extra: Login por perfil (admin, cliente, vendedor), permissões, etc.

    Por que é valorizado:
    Aborda problemas reais de negócios
    Mostra escalabilidade e arquitetura
    Pode virar produto real`,
    IconUrl: '/images/dotnet.svg',
    link: '#',
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