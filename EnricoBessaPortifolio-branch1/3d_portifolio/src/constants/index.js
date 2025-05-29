// constants/index.js
// site usado para pegar imagens https://simpleicons.org/
export const skills = [
  {
    name: 'C#',
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
    description: 'A responsive portfolio website built with React and Tailwind CSS to showcase my skills and projects.',
    IconUrl: '/images/react.svg', 
    link: '',
    theme: 'bg-gradient-to-tr from-orange-400 to-red-500'
  },
  {
    name: 'Task Manager API',
    description: 'A RESTful API for managing tasks with user authentication, built using Node.js and MongoDB.',
    IconUrl: '/images/nodejs.svg',
    link: 'https://github.com/yourusername/task-manager-api',
    theme: 'bg-gradient-to-tr from-green-400 to-green-600'
  },
  {
    name: 'Weather App',
    description: 'A simple weather app that fetches real-time weather data using the OpenWeatherMap API.',
    IconUrl: '/images/javascript.svg',
    link: 'https://your-weather-app-link.com',
    theme: 'bg-gradient-to-tr from-blue-400 to-cyan-500'
  },
  {
    name: 'Blog Platform',
    description: 'A blog platform built with PHP and MySQL, supporting post creation, comments, and user roles.',
    IconUrl: '/images/php.svg',
    link: 'https://github.com/yourusername/blog-platform',
    theme: 'bg-gradient-to-tr from-indigo-500 to-purple-600'
  },
  {
    name: 'Finance Tracker',
    description: 'An app to track personal income and expenses, created with Python and SQLite.',
    IconUrl: '/images/python.svg',
    link: 'https://github.com/yourusername/finance-tracker',
    theme: 'bg-gradient-to-tr from-yellow-400 to-orange-500'
  },
];


