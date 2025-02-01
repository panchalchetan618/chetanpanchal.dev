"use client";

import { buttons, headings, text } from "../styles";
import Image from "next/image";
import { motion } from "framer-motion";
import { containerVariants, childVariants } from "../animations";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const About = () => {
    return (
        <motion.section
            id="about"
            className="w-full flex justify-center items-center gap-10 flex-wrap my-20 px-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
        >
            <motion.div
                className="max-w-[480px] flex flex-col justify-center items-center gap-5"
                variants={childVariants}
                viewport={{ once: true, amount: 0.1 }}
            >
                <h2 className={headings.h2}>About</h2>
                <p className={text.normal}>
                    Hey, I&apos;m Chetan,{" "}
                    <span className={text.highlighted}>
                        Full Stack Developer
                    </span>{" "}
                    & <span className={text.highlighted}>UI/UX Designer</span>{" "}
                    specializing in{" "}
                    <span className={text.highlighted}>
                        high-performance websites
                    </span>{" "}
                    and{" "}
                    <span className={text.highlighted}>
                        mobile applications
                    </span>
                    . Expert in creating seamless,{" "}
                    <span className={text.highlighted}>
                        production-ready digital solutions
                    </span>{" "}
                    with a focus on user{" "}
                    <span className={text.highlighted}>experience</span>,{" "}
                    <span className={text.highlighted}>functionality</span>, and{" "}
                    <span className={text.highlighted}>performance</span>.
                </p>
                <p className="w-full">
                    <Link href="#contact" className={`${buttons.primary} flex items-center gap-2 hover:gap-4 transition-all duration-200 w-fit`}>
                        <span>Hire me</span> <FaArrowRightLong />
                    </Link>
                </p>
            </motion.div>

            <motion.div
                className="relative w-[320px] h-[320px]"
                variants={childVariants}
                viewport={{ once: true, amount: 0.3 }}
            >
                <Image
                    src="/assets/images/about-section/bg-1.png"
                    alt="Background Image 1"
                    width={250}
                    height={250}
                    className="absolute top-0 left-0 h-[200px] w-[200px]"
                />
                <Image
                    src="/assets/images/about-section/Chetan-Panchal.jpg"
                    alt="Background Image 2"
                    width={250}
                    height={250}
                    className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-[250px] w-[250px] z-[1] rounded-full"
                />
                <Image
                    src="/assets/images/about-section/bg-2.png"
                    alt="Chetan Panchal"
                    width={250}
                    height={250}
                    className="absolute right-0 bottom-0 h-[200px] w-[200px]"
                />
            </motion.div>
        </motion.section>
    );
};

export default About;
