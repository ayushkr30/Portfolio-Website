import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import{ LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
        title:"Graduated BootCamp",
        location:"Miami, FL",
        description: 
        "I graduated after 6 months of Studying. I immediately found a job as a front-end developer.",
        icon: React.createElement(LuGraduationCap),
        date: "2019"
    },
    {
        title: "Front-end Developer",
        location: "Houstan, TX",
        description: 
        "I Worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
        icon: React.createElement(CgWorkAlt),
        date: "2019-2021",  
    },
    {
        title: "Full-Stack Developer",
        location: "Houstan, TX",
        description: 
        "I'm now a Full-Stack developer working as a freelancer. My stack include React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
        icon: React.createElement(FaReact),
        date: "2021-present",
    },
] as const;

export const projectData = [
    {
        title: "CorpComment",
        description: 
        "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
        tags: ["React","Next.js","MongoDB", "Prisma"],
        imageUrl: corpcommentImg,
    },
    {
        title: "rmtDev",
        description: 
        "Job board for remote developer jobs. I was the front-end developer. It has features like flitering, sorting and pagination.",
        tags: ["React","TypeScript","Next.js", "Redux"],
        imageUrl: rmtdevImg,
    },
    {
        title:"Word Analytics",
        description:
        "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
        tags: ["React","Next.js","SQL", "Tailwind","Prisma","Framer"],
        imageUrl: wordanalyticsImg,
    },
] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "Prisma",
    "MongoDB",
    "Redux",
    "GraphQL",
    "Apollo",
    "Express",
    "PostreSQL",
    "Python",
    "Django",
    "Framer Motion",

] as const;