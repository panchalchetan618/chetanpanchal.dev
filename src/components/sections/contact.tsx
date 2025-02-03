"use client";

import { headings, links, text } from "../styles";
import { LuInstagram } from "react-icons/lu";
import { MdAlternateEmail } from "react-icons/md";
import { FiLinkedin } from "react-icons/fi";
import Link from "next/link";
import { motion } from "framer-motion";
import { childVariants, containerVariants } from "../animations";

const Contact = () => {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
            id="contact"
            className="w-full flex justify-center items-center gap-10 flex-wrap my-20 p-4"
        >
            <div className="min-w-[200px] w-full max-w-[400px] flex flex-col justify-center items-start gap-5">
                <motion.h2
                    className={headings.h2}
                    variants={childVariants}
                    viewport={{ once: true, amount: 0.1 }}
                >
                    Contact
                </motion.h2>
                <motion.p
                    className={text.normal}
                    variants={childVariants}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    Let&apos;s Work together,
                    <br />
                    There&apos;re multiple ways to connect with me.
                </motion.p>
                <motion.div
                    variants={childVariants}
                    viewport={{ once: true, amount: 0.1 }}
                    className="flex flex-col justify-center items-start gap-5"
                >
                    <Link
                        href="https://instagram.com/chetanpanchal.dev"
                        className={`${links.primary} flex items-center gap-2`}
                    >
                        <LuInstagram />
                        <span>Instagram</span>
                    </Link>
                    <Link
                        href="mailto:panchalchetan315@gmail.com"
                        className={`${links.primary} flex items-center gap-2`}
                    >
                        <MdAlternateEmail />
                        <span>Email</span>
                    </Link>
                    <Link
                        href="https://linkedin.com/in/panchalchetan618"
                        className={`${links.primary} flex items-center gap-2`}
                    >
                        <FiLinkedin />
                        <span>LinkedIn</span>
                    </Link>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Contact;
