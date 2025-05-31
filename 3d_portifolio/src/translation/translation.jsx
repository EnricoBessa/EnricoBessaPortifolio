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
      projects_intro: "I've embarked on a variety of projects that showcase my problem-solving skills, technological expertise, and clean code. The following projects are the ones I'm most proud of — each one has taught me new things and helped me grow as a developer."
    
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
      projects_intro: "Embarquei em uma variedade de projetos que mostram minha capacidade de solucionar problemas, meu conhecimento tecnológico e código limpo. Os trabalhos abaixo são os que mais me orgulham — cada um me serviu como um novo aprendizado e me ajudou a crescer como desenvolvedor."
    
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
