// src/translation.jsx
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      //Navbar
      welcome: "Welcome",
      about: "About",
      home: "Home",
      projects: "Projects",
      contact: "Contact",

      //CTA
      cta_texto1: "Have a project in mind?",
      cta_texto2: "Let's build something together!",
      cta_botao: "Contact",

      //Contact
      contact_title: "Get in Touch",
      name: "Name",
      email: "Email",
      message: "Your Message",
      placeholder_name: "Maria",
      placeholder_email: "email@example.com",
      placeholder_message: "Message you want to send",
      submit: "Submit",
      success: "Your message has been sent.",
      sending: "Sending...",
      error_name: "Name is required.",
      error_email_required: "Email is required.",
      error_email_invalid: "Email is invalid.",
      error_message: "Message must be at least 10 characters",
      error_send: "Something went wrong. Please try again.",

      //Projects
      projects_title: "My",
      projects_span: "Projects",
      projects_intro: "I've embarked on a variety of projects that showcase my problem-solving skills, technological expertise, and clean code. The following projects are the ones I'm most proud of — each one has taught me new things and helped me grow as a developer.",

      projects_list: [
        {
          name: "Portfolio Website",
          initialDescription:
            "A responsive website to showcase my projects, skills, and experiences in a professional way.",
          technology: "Technologies",
          description: `
          Frontend: React with Tailwind CSS for a modern and responsive design
          Design: Optimized interface for desktop and mobile, with focus on usability
          Extra: Modular code, easy to expand and update

          Why it is valued:
          Demonstrates mastery of modern frontend (React + Tailwind)
          Serves as a personal portfolio for recruiters and companies
          Shows attention to UI/UX and content organization`,
          IconUrl: '/EnricoBessaPortifolio/images/react.svg',
          theme: 'bg-gradient-to-tr from-orange-400 to-yellow-500',
          link: 'https://github.com/EnricoBessa/EnricoBessaPortifolio'
        },
        {
          name: "AimTrainer",
          initialDescription:
            "Aim training game mainly built with the pygame library.",
          technology: "Technologies",
          description: `
          Backend: Python with Pygame integration`,
          IconUrl: '/EnricoBessaPortifolio/images/python.svg',
          theme: 'bg-gradient-to-tr from-indigo-500 to-purple-600',          
          link: 'https://github.com/EnricoBessa/AimTrainer',
        },
        {
          name: "AiAgent",
          initialDescription:
            "Customizable application with modules like sales, inventory, scheduling, and finance.",
          technology: "Technologies",
          description: `
          Backend: Python with Ollama integration
          AI: Gemma 3B model for conversational responses`,
          IconUrl: '/EnricoBessaPortifolio/images/python.svg',
          theme: 'bg-gradient-to-tr from-teal-400 to-cyan-500',
          link: 'https://github.com/EnricoBessa/AiAgent',
        },
        {
          name: "Fitness App",
          initialDescription:
            "A Flutter app designed to display workout categories, recommended diets, and popular diets.",
          technology: "Technologies",
          description: `
          Frontend: Flutter with responsive interface and cross-platform support (Android/iOS)
          Design: Modern and minimalistic UI, using SVGs and dynamic lists`,
          IconUrl: '/EnricoBessaPortifolio/images/flutter.svg',
          theme: 'bg-gradient-to-tr from-pink-500 to-red-500',
          link: 'https://github.com/EnricoBessa/FitnessApp',
        },
      ],

      //About 
      about_title: "Hello, I'm",
      about_intro: "I am a Software Engineering student at PUC Minas and hold a Technical degree in Computer Science from Cotemig. I have worked as an intern in several companies, utilizing languages such as Python, C#, .NET, HTML5, CSS, and Databases. I seek opportunities to apply and expand my knowledge in the field of software development, valuing teamwork to achieve common goals.",
      about_my_skills: "My Skills",
      about_education: "Education",
      about_education_intro: "I studied at Cotemig School, where I began my learning in the field of computer science. I am currently pursuing a degree in Software Engineering at PUC Minas.",
      about_experience: "Experience",
      about_experience_intro: "I've worked with all sorts of companies, leveling up my skills and teaming up with smart people. Here's the rundown:",

    },
  },
  pt: {
    translation: {
      //Navbar
      welcome: "Bem-vindo",
      about: "Sobre",
      home: "Início",
      projects: "Projetos",
      contact: "Contato",

      //CTA
      cta_texto1: "Tem um projeto em mente?",
      cta_texto2: "Vamos construir algo juntos!",
      cta_botao: "Contato",

      //Contact
      contact_title: "Entre em Contato",
      name: "Nome",
      email: "Email",
      message: "Sua Mensagem",
      placeholder_name: "Maria",
      placeholder_email: "email@exemplo.com",
      placeholder_message: "Mensagem que deseja enviar",
      submit: "Enviar",
      success: "Sua mensagem foi enviada.",
      sending: "Enviando...",
      error_name: "O nome é obrigatório.",
      error_email_required: "O email é obrigatório.",
      error_email_invalid: "O email é inválido.",
      error_message: "A mensagem deve ter pelo menos 10 caracteres.",
      error_send: "Algo deu errado. Tente novamente.",

      //Projects
      projects_title: "Meus",
      projects_span: "Projetos",
      projects_intro: "Embarquei em uma variedade de projetos que mostram minha capacidade de solucionar problemas, meu conhecimento tecnológico e código limpo. Os trabalhos abaixo são os que mais me orgulham — cada um me serviu como um novo aprendizado e me ajudou a crescer como desenvolvedor.",

      projects_list: [
        {
          name: "Portfolio Website",
          initialDescription:
            "Um site responsivo para apresentar meus projetos, habilidades e experiências de forma profissional.",
          technology: "Tecnologias",
          description: `
          Frontend: React com Tailwind CSS para estilização moderna e responsiva
          Design: Interface otimizada para desktop e mobile, com foco em usabilidade
          Extra: Código modular, fácil de expandir e atualizar

          Por que é valorizado:
          Demonstra domínio de frontend moderno (React + Tailwind)
          Serve como vitrine pessoal para recrutadores e empresas
          Mostra preocupação com UI/UX e organização de conteúdo`,
          IconUrl: '/EnricoBessaPortifolio/images/react.svg',
          theme: 'bg-gradient-to-tr from-orange-400 to-yellow-500',
          link: 'https://github.com/EnricoBessa/EnricoBessaPortifolio'
        },
        {
          name: "AimTrainer",
          initialDescription:
            "Jogo de treino de mira feito com base principal na biblioteca pygame.",
          technology: "Tecnologias",
          description: `
          Backend: Python usando integração ao Pygame`,
          IconUrl: '/EnricoBessaPortifolio/images/python.svg',
          theme: 'bg-gradient-to-tr from-indigo-500 to-purple-600',
          link: 'https://github.com/EnricoBessa/AimTrainer',
        },
        {
          name: "AiAgent",
          initialDescription:
            "Aplicação personalizável com módulos como vendas, estoque, agenda e finanças.",
          technology: "Tecnologias",
          description: `
          Backend: Python com integração ao Ollama
          IA: Modelo Gemma 3B para respostas conversacionais`,
          IconUrl: '/EnricoBessaPortifolio/images/python.svg',
          theme: 'bg-gradient-to-tr from-teal-400 to-cyan-500',
          link: 'https://github.com/EnricoBessa/AiAgent',
        },
        {
          name: "Fitness App",
          initialDescription:
            "Um aplicativo desenvolvido em Flutter com o objetivo de exibir categorias de treinos, dietas recomendadas e dietas populares.",
          technology: "Tecnologias",
          description: `
          Frontend: Flutter com interface responsiva e suporte multiplataforma (Android/iOS)
          Design: Visual moderno e minimalista, utilizando SVGs e listas dinâmicas`,
          IconUrl: '/EnricoBessaPortifolio/images/flutter.svg',
          theme: 'bg-gradient-to-tr from-pink-500 to-red-500',
          link: 'https://github.com/EnricoBessa/FitnessApp',
        },
      ],

      //About 
      about_title: "Olá, eu sou",
      about_intro: "Sou estudante de Engenharia de Software na PUC Minas e formado como Técnico em Informática pelo Cotemig. Já atuei como estagiário em algumas empresas, trabalhando com linguagens como Python, C#, .NET, HTML5, CSS e Banco de Dados. Busco oportunidades para aplicar e expandir meus conhecimentos na área de desenvolvimento de software, valorizando o trabalho em equipe para alcançar objetivos em comum.",
      about_my_skills: "Minhas Habilidades",
      about_education: "Formação",
      about_education_intro: "Eu estudei no colégio Cotemig, onde iniciei meu aprendizado na área de informática. Atualmente, curso Engenharia de Software na PUC Minas.",
      about_experience: "Experiência",
      about_experience_intro: "Trabalhei com diversos tipos de empresas, aprimorando minhas habilidades e colaborando com pessoas talentosas. Aqui está um resumo:",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;