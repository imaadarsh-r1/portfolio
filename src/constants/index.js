
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets'
import codsoft from "../assets/company/codsoft.jpeg";
import python from "../assets/tech/python.svg";
import ict from "../assets/company/ict.webp";
import pandas from "../assets/tech/pandas.png";
import numpy from "../assets/tech/nummpy.svg";
import tableau from "../assets/tech/t.png";
import tensorflow from "../assets/tech/tensorflow.svg";
import excel from "../assets/tech/excel.svg";
import powerbi from "../assets/tech/powerbi.png";
import langchain from "../assets/tech/langchainr.png";
import attendai from "../assets/attend.png";
import spam from "../assets/spam.png";
import agri from "../assets/agri.png";
import trans from "../assets/trans.png";
import customer from "../assets/customer.png";
import query from "../assets/query.jpeg";
import anjala from "../assets/anjala.jpg";
import issac from "../assets/issac.jpeg";
import austin from "../assets/austin 2.jpeg";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "certifications",
    title: "Certifications",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "AI/ML Engineer",
    icon: web,
  },
  {
    title: "Data Scientist",
    icon: mobile,
  },
  {
    title: "Data Analyst",
    icon: backend,
  },
  {
    title: "UI Designer",
    icon: creator,
  },
];

const technologies = [
  // Programming & Web
  { name: "NumPy", icon: numpy },
  { name: "Pandas", icon: pandas },

  { name: "TensorFlow", icon: tensorflow },
  { name: "tableau", icon: tableau },
  { name: "LangChain", icon: langchain },
  // Tools
  { name: "Python", icon: python },
  { name: "JavaScript", icon: javascript },
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  // Data Science & ML
  
  { name: "Power BI", icon: powerbi },
  { name: "Excel", icon: excel },

  { name: "MongoDB", icon: mongodb },
  { name: "MySQL", icon: mysql },

  // Animation & Design
  { name: "Figma", icon: figma },
];
const experiences = [
  {
    title: "Data Scientist Intern",
    company_name: "CodSoft",
    icon: codsoft,
    //iconBg: "#F3F3F3",
    date: "Apr 2024 - May 2024",
    points: [
      "Worked on real-world datasets to derive insights using Python, Pandas, and scikit-learn.",
      "Built machine learning models to predict customer behavior and business trends.",
    ],
  },
  {
    title: "Full-stack Developer Intern",
    company_name: "ICT Academy of Kerala",
    icon: ict,
    //iconBg: "#F3F3F3",
    date: "May 2023 - Jun 2023",
    points: [
      "Developed web-based applications using React.js, Node.js, and MongoDB.",
      "Worked on responsive design and performance optimization techniques.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Working with Adarsh has been great. He puts in a lot of effort and is always willing to support his team.",
    name: "Issac Sunny",
    designation: "SDE",
    company: "PKJ Technologies",
    image: issac,
  },
  {
    testimonial:
      "Adarsh is talented and always eager to learn new things. He brings positive energy to every project.",
    name: "Austin Siju",
    designation: "SDE",
    company: "Zuike Infotech",
    image: austin,
  },
  {
    testimonial:
      "Adarsh is a dedicated and smart person. He always finds the best way to solve problems and helps others when needed.",
    name: "Anjala Suhana",
    designation: "Project Manager & HR",
    company: "White Matrix",
    image: anjala,
  },
];

const projects = [
  {
    name: "AgriGuard: AI-Powered Crop Disease Detection",
    description:
      "Developed under the Young Innovators Program by K-DISC, It uses CNNs to detect crop diseases and provide farmers with real-time insights for early intervention.",
    tags: [
      { name: "cnn", color: "blue-text-gradient" },
      { name: "tensorflow", color: "green-text-gradient" },
      { name: "python", color: "pink-text-gradient" },
    ],
    image: agri, // Add this image to your assets
    source_code_link: "https://github.com",
  },
  
  {
    name: "SpamShield: AI-Powered Email Spam Detection",
    description:
      "SpamShield uses BERT and NLP to detect spam emails with high accuracy, improving inbox security by filtering out unwanted messages.",
    tags: [
      { name: "bert", color: "blue-text-gradient" },
      { name: "nlp", color: "green-text-gradient" },
      { name: "python", color: "pink-text-gradient" },
    ],
    image: spam, // Add image
    source_code_link: "https://github.com/adarsh417/SpamShield",
  },
  {
    name: "Translinguo: Multilingual Speech Translation",
    description:
      "An end-to-end multilingual speech translation system using LLMs. Integrates Hugging Face models for transcription, translation, and speech synthesis.",
    tags: [
      { name: "huggingface", color: "blue-text-gradient" },
      { name: "llm", color: "green-text-gradient" },
      { name: "speech-to-text", color: "pink-text-gradient" },
    ],
    image: trans, // Add image
    source_code_link: "https://github.com/adarsh417/Translinguo",
  },
  {
    name: "AI-Powered PDF Query System",
    description:
      "Built an app to query PDF content using Google Generative AI and FAISS. Automates text extraction, chunking, and context-aware answer retrieval.",
    tags: [
      { name: "faiss", color: "blue-text-gradient" },
      { name: "google-ai", color: "green-text-gradient" },
      { name: "langchain", color: "pink-text-gradient" },
    ],
    image: query, // Add image
    source_code_link: "https://github.com/adarsh417/PDFQuery",
  },
  {
    name: "AttendAI: Smart Attendance System",
    description:
      "An AI-based smart attendance system that uses face recognition and real-time video processing for efficient and contactless attendance tracking.",
    tags: [
      { name: "opencv", color: "blue-text-gradient" },
      //{ name: "face-recognition", color: "green-text-gradient" },
      { name: "deep-learning", color: "pink-text-gradient" },
    ],
    image: attendai, // Add image
    source_code_link: "https://github.com/adarsh417/AttendAI",
  },{
    name: "ChurnPro: AI-Driven Customer Retention",
    description:
      "Built a predictive model using ML algorithms to identify potential customer churn for a bank. Performed feature engineering and analyzed key factors affecting churn.",
    tags: [
      { name: "scikit-learn", color: "blue-text-gradient" },
      { name: "pandas", color: "green-text-gradient" },
      { name: "machine-learning", color: "pink-text-gradient" },
    ],
    image: customer, // Add to your assets
    source_code_link: "https://github.com/adarsh417/Churn-Prediction",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
