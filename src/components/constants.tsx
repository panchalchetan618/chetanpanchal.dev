import { Project, Services, Skill } from "./interfaces";

export const skills: Skill[] = [
    {
        id: 1,
        name: "NextJS",
        highlight: true,
    },
    {
        id: 2,
        name: "Django",
        highlight: true,
    },
    {
        id: 3,
        name: "ReactJS",
        highlight: true,
    },
    {
        id: 4,
        name: "React Native",
        highlight: false,
    },
    {
        id: 5,
        name: "Tailwind",
        highlight: false,
    },
    {
        id: 6,
        name: "HTML 5",
        highlight: false,
    },
    {
        id: 7,
        name: "CSS 3",
        highlight: false,
    },
    {
        id: 8,
        name: "SCSS",
        highlight: false,
    },
    {
        id: 9,
        name: "Python",
        highlight: true,
    },
    {
        id: 10,
        name: "JavaScript",
        highlight: true,
    },
    {
        id: 11,
        name: "TypeScript",
        highlight: true,
    },
    {
        id: 12,
        name: "Shadcn UI",
        highlight: false,
    },
    {
        id: 13,
        name: "NodeJS",
        highlight: true,
    },
    {
        id: 14,
        name: "Express",
        highlight: true,
    },
    {
        id: 15,
        name: "AWS",
        highlight: false,
    },
    {
        id: 16,
        name: "Git",
        highlight: false,
    },
    {
        id: 17,
        name: "GitHub",
        highlight: false,
    },
    {
        id: 18,
        name: "Mongo DB",
        highlight: true,
    },
    {
        id: 19,
        name: "PostgreSQL",
        highlight: true,
    },
    {
        id: 20,
        name: "MySQL",
        highlight: false,
    },
];

export const services: Services[] = [
    {
        id: 1,
        title: "UI/UX Design",
        description:
            "Crafting intuitive and visually stunning user experiences that keep your users engaged and delighted.",
    },
    {
        id: 2,
        title: "Graphics Design",
        description:
            "Bringing your brand to life with creative visuals, logos, and marketing assets that captivate audiences.",
    },
    {
        id: 3,
        title: "Web Application Development",
        description:
            "Developing secure, scalable, and high-performing web platforms tailored to your business needs.",
    },
    {
        id: 4,
        title: "Mobile Application Development",
        description:
            "Delivering seamless, feature-rich mobile experiences across iOS and Android to connect with users on the go.",
    },
];

const baseUrl = "/assets/images/projects/";
export const projects: Project[] = [
    {
        id: 1,
        name: "Community App",
        web: "https://devflow-js.vercel.app",
        image: baseUrl + "devflow.png",
        skills: ["Next.js", "Typescript", "Shadcn UI", "Clerk", "Vercel"],
    },
    {
        id: 2,
        name: "Portfolio - Video Editing",
        web: "https://avinashsaini.vercel.app",
        image: baseUrl + "portfolio-videoediting.png",
        skills: ["Next.js", "Typescript", "Vercel", "AWS"],
    },
    {
        id: 3,
        name: "Ecommerce - Dentist tools",
        web: "https://webcoders.site",
        image: baseUrl + "dentalduct.png",
        skills: ["Next.js", "Typescript", "Figma", "AWS"],
    },
];
