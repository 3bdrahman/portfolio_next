import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import clay from "@/public/clay.png";
import selfDriving from "@/public/Self_driving_2D.png";
import avatar from "@/public/avatar.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Timeline",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "MS AI in Business (GPA:3.6)",
    location: "Simon Business School",
    description:
      "AI & Business, Analytics Design, Regression Analysis, Microeconomics & Marketing Strategy, Professional Communication, Operations Management. ",
    icon: React.createElement(LuGraduationCap),
    date: "2024 - 2025",
  },
  {
    title: "AI Code Trainer",
    location: "Outlier",
    description:
      "Annotated AI interactions to improve models’ coding and reasoning capabilities.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - 2025",
  },
  {
    title: "Lead Full-Stack Developer",
    location: "Universtiy IT",
    description:
      "Led a team of six developers, providing mentorship through regular code reviews and establishing standardized project documentation, maximizing rollout efficiency.",
    icon: React.createElement(FaReact),
    date: "2021 - 2023",
  },
  {
    title: "Help Desk Assistant",
    location: "University IT",
    description:
      "On-phone, online chat, and walk-in technical support and software troubleshooting for students and staff.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 -  2022",
  },
  {
    title: "BSc Computer Science | Business Minor",
    location: "University of Rochester",
    description:
      "Design & Analysis of Efficient Algorithms, Programming Language Design & Implementation, AI, Web Programming, Data Structures & Algorithms,  Mobile App Development, Database Systems, Computer Organization.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2023",
  }
] as const;

export const projectsData = [
  {
    title: "AI Chess Battle",
    description:
      "AI Chess Battle where language models are benchmarked against each other in strategic gameplay!",
    tags: ["Python", "OpenAI API", "Anthropic API", "Ollama"],
    imageUrl: selfDriving,
    github: "https://github.com/3bdrahman/chess",
  },
  {
    title: "Clay",
    description:
      "AI assistant with RAG, Python analysis, and web search capabilities.",
    tags: ["Python", "Streamlit", "Langchain", "langgraph", "Ollama"],
    imageUrl: clay,
    github:"https://github.com/3bdrahman/Clay"
  },
  {
    title: "AvatarGPT",
    description:
      "Conversational 3D avatar powered by ChatGPT and Whisper APIs alongside Microsoft-speech-SDK.",
    tags: ["React","Express.js", "Socket.io", "Three.js",  "ChatGPT API"],
    imageUrl: avatar,
    github:"https://github.com/3bdrahman/GPT-Sync-Avatar",
  },
  
] as const;

export const skillsData = [
  "Python",
  "NumPy",
  "Pandas",
  "Matplotlib",
  "Seaborn",
  "Sklearn",
  "Streamlit",
  "Tableau",
  "Java",
  "JavaScript",
  "React",
  "HTML",
  "CSS",
  "Tailwind",
  "Node.js",
  "Version Control",
  "RESTful APIs"
] as const;