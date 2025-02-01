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

export const servicesData = [
    {
        category: "Web Development",
        title: "Build modern web applications",
        description:
            "Scalable, high-performance websites and web apps. We build responsive, fast, and secure applications that meet industry standards.",
        imageSrc: "/assets/images/services/web-development.webp",
    },
    {
        category: "Mobile Apps",
        title: "Create stunning mobile experiences",
        description:
            "We design and develop cross-platform and native mobile applications that provide a seamless user experience across all devices.",
        imageSrc: "/assets/images/services/mobile-development.webp",
    },
    {
        category: "UI/UX Design",
        title: "Design seamless and beautiful interfaces",
        description:
            "Creating user-friendly and visually appealing interfaces that improve customer engagement and usability.",
        imageSrc: "/assets/images/services/ui-ux.webp",
    },
];

export const testimonials = [
    {
        quote: "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
        name: "Avinash Saini",
        designation: "Video Editor - Freelancer",
        src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        quote: "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
        name: "Deepanshu Kumar",
        designation: "Co-Founder of Hawk Studioz",
        src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        quote: "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
        name: "Rajesh Rai",
        designation: "Founder of Dental Duct",
        src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        quote: "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
        name: "Rudra Patel",
        designation: "Devflow",
        src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];

const baseUrl = "/assets/images/projects/";
export const projects: Project[] = [
    {
        id: 1,
        name: "Dentalduct",
        web: "https://dentalduct.com",
        image: baseUrl + "dentalduct.webp",
        skills: ["Next.js", "Typescript", "Figma", "AWS"],
    },
    {
        id: 2,
        name: "Hawk studioz",
        web: "https://hawkstudioz.com",
        image: baseUrl + "hawkstudioz.webp",
        skills: ["Next.js", "Typescript", "Vercel", "AWS"],
    },
    {
        id: 3,
        name: "Portfolio - Video Editing",
        web: "https://avinashsaini.vercel.app",
        image: baseUrl + "avinashsaini.webp",
        skills: ["Next.js", "Typescript", "Vercel", "AWS"],
    },
    {
        id: 4,
        name: "Community App",
        web: "https://devflow-js.vercel.app",
        image: baseUrl + "devflow.webp",
        skills: ["Next.js", "Typescript", "Shadcn UI", "Clerk", "Vercel"],
    },
];
