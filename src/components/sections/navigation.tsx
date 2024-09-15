"use client";
import Link from "next/link";
import { buttons, headings, links } from "../styles";
import { useEffect, useState } from "react";

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const openMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

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
                    ? "bg-gray-400/10 backdrop-blur-lg rounded-full shadow-md max-w-[768px] top-5 max-sm:max-w-[300px] max-lg:max-w-[600px]"
                    : ""
            }`}
        >
            <h2 className={headings.h2}>Chetan</h2>

            <button
                className="sm:hidden flex flex-col justify-evenly gap-1"
                onClick={openMenu}
            >
                <span
                    className={`w-5 h-[2px] rounded-full bg-gray-100 transform transition-transform duration-300 ${
                        isMenuOpen
                            ? "rotate-45 translate-y-[6px]"
                            : ""
                    }`}
                ></span>
                <span
                    className={`w-5 h-[2px] rounded-full bg-gray-200 transition-opacity duration-300 ${
                        isMenuOpen ? "opacity-0" : "opacity-100"
                    }`}
                ></span>
                <span
                    className={`w-5 h-[2px] rounded-full bg-gray-100 transform transition-transform duration-300 ${
                        isMenuOpen
                            ? "-rotate-45 -translate-y-[6px]"
                            : ""
                    }`}
                ></span>
            </button>

            <div className={`${isMenuOpen ? "flex bg-gray-400/10 backdrop-blur-lg rounded-xl shadow-md" : "max-sm:hidden"} max-sm:absolute max-sm:top-20 right-[50%] left-[50%] translate-x-[-50%] text-nowrap sm:flex max-sm:flex-col justify-evenly gap-5 items-center`}>
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
