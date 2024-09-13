"use client";
import Link from "next/link";
import { buttons, headings, links } from "../styles";
import { useEffect, useState } from "react";

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section
            className={`fixed top-0 left-0 right-0 flex justify-between items-center w-full p-4 mx-auto max-w-[1280px] transition-all duration-500 z-[10] ${
                isScrolled
                    ? "bg-gray-400/10 backdrop-blur-lg rounded-full shadow-md max-w-[768px] top-5"
                    : ""
            }`}
        >
            <h2 className={headings.h2}>Chetan</h2>
            <div className="flex justify-evenly gap-5 items-center">
                <Link href="#about" className={links.primary}>
                    About
                </Link>
                <Link href="#skills" className={links.primary}>
                    Skills
                </Link>
                <Link href="#portfolio" className={links.primary}>
                    Portfolio
                </Link>
                <Link href="#contact" className={buttons.primary}>
                    Hire me
                </Link>
            </div>
        </section>
    );
};

export default Navigation;
