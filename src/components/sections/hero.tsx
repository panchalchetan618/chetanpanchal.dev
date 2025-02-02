"use client";

import Link from "next/link";
import { buttons, headings } from "../styles";
import { GoArrowDown } from "react-icons/go";
import { motion } from "framer-motion";
import { containerVariants, childVariants } from "../animations";
import { LampContainer } from "../ui/lamp";

const Hero = () => {
    return (
        <motion.section
            id="hero"
            className="min-h-[100dvh] w-full flex flex-col justify-center items-center relative"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <LampContainer>
                <motion.h1 className={headings.h1} variants={childVariants}>
                    <span className="text-slate-400">Full Stack</span> Developer
                </motion.h1>
                <motion.h1 className={headings.h1} variants={childVariants}>
                    <span className="text-slate-400">UI/UX</span> Designer
                </motion.h1>
                <motion.div
                    className="mt-5 flex justify-between items-center gap-5"
                    variants={childVariants}
                >
                    <Link href="#about" className={buttons.primary}>
                        About me
                    </Link>
                    <Link href="#contact" className={buttons.secondary}>
                        Hire me
                    </Link>
                </motion.div>
            </LampContainer>
            <Link
                href="#about"
                className="absolute bottom-10 mx-auto border-2 border-slate-400 rounded-full text-3xl px-1 py-2 text-slate-100 hover:border-slate-100 hover:bg-slate-100 hover:text-slate-700 transition-all duration-200"
            >
                <GoArrowDown />
            </Link>
        </motion.section>
    );
};

export default Hero;
