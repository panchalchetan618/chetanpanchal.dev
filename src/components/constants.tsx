import { Project, Skill } from "./interfaces";

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
        quote: "The portfolio design turned out even better than I expected, and the pricing was reasonable too. Really happy with the work, and I'd definitely recommend Chetan to anyone looking for a great website.",
        name: "Avinash Saini",
        designation: "Video Editor - Freelancer",
        src: "https://avinashsaini.vercel.app/_next/image?url=%2Fimages%2Fprofile.jpg&w=1920&q=75",
    },
    {
        quote: "We needed a website for our agency, and I had a rough idea of what I wanted. Chetan took that idea and turned it into exactly what we needed. The process was smooth, and the end result speaks for itself.",
        name: "Deepanshu Kumar",
        designation: "Co-Founder at Hawk Studioz",
        src: "/assets/images/testimonials/hawk-studioz.webp",
    },
    {
        quote: "I had a tight budget, but Chetan still managed to build a clean, well-performing e-commerce site for me. It does exactly what I need, and I'm really glad I went with his service.",
        name: "Rajesh Rai",
        designation: "Founder at Dental Duct",
        src: "/assets/images/testimonials/dentalduct.webp",
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
];
