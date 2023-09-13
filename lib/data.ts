import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import amazonUI from "@/public/amazon_clone.png";
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
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "BSc Computer Science ",
    location: "University of Rochester",
    description:
      "Relevant courses: Data Structures & Algorithms,  Design & Analysis of Efficient Algorithms, Web Programming, Mobile App Development, Database Systems, Artificial Intelligence.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2023",
  },
  {
    title: "Help Desk Assistant",
    location: "University of Rochester",
    description:
      "On-phone, online chat, and walk-in technical support and software troubleshooting for students and the university community members.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 -  2023",
  },
  {
    title: "Workshop Leader",
    location: "University of Rochester",
    description:
      "Guided weekly academic sessions, emphasizing core concepts and interactive discussions, while offering personalized mentoring in Data Structures and Algorithms Java",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Full-Stack Developer",
    location: "Remote (Rochester, NY)",
    description:
      "Enhanced application performance and user interface, collaborated to develop a sophisticated online reservation system, upgraded search functionalities, and spearheaded a team in optimizing the MERN-stack LASSO application, ensuring adherence to scrum agile methodology. ",
    icon: React.createElement(FaReact),
    date: "August 2022 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "GPT-Sync Avatar",
    description:
      "React application that imitates a virtual chat with a 3D Ready Player Me avatar (RPM) with help of OpenAI ChatGPT & Whisper APIs and Microsoft-speech-SDK",
    tags: ["React","Express.js", "Socket.io", "Three.js",  "ChatGPT API"],
    imageUrl: avatar,
    github:"https://github.com/3bdrahman/GPT-Sync-Avatar",
  },
  {
    title: "Self-driving Car",
    description:
      "Simulates a self-driving car experience in a 2D environment, leveraging neural networks for the vehicle's autonomous behavior. ",
    tags: ["HTML", "CSS", "JavaScript", "Neural Network"],
    imageUrl: selfDriving,
    github: "https://github.com/3bdrahman/Self-driving-car",
  },
  {
    title: "Amazon Clone",
    description:
      "An Amazon clone that uses React hooks, Firebase Authentication, Firestore, Stripe API.",
    tags: ["React", "Firebase Auth", "Stripe API", "Tailwind", "Firestore"],
    imageUrl: amazonUI,
    github:"https://github.com/3bdrahman/Clozon"
  },
] as const;

export const skillsData = [
  "Java",
  "JavaScript",
  "React",
  "HTML",
  "CSS",
  "Tailwind",
  "Python",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Git",
  "MongoDB",
  "Redux",
  "Express",
  "Framer Motion",
  "RESTful APIs"
] as const;