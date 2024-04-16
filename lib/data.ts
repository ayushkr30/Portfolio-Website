import React from "react";
import {CgWorkAlt} from "react-icons/cg";
import {FaReact} from "react-icons/fa";
import{LuGraduationCap} from "react-icons/fa";
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
        icon: React.createElement(FaReact);
        date: "2021-present",
    },
] as const;

