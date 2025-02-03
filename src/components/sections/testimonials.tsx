"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { testimonials } from "../constants";
import { headings } from "../styles";
import { motion } from "framer-motion";
import { childVariants, containerVariants } from "../animations";

export default function Testimonials() {
    return (
        <motion.section
            id="testimonis"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
        >
            <motion.h2
                className={`${headings.h2} text-center mb-8`}
                viewport={{ once: true, amount: 0.1 }}
                variants={childVariants}
            >
                Testimonials
            </motion.h2>
            <motion.div
                viewport={{ once: true, amount: 0.2 }}
                variants={childVariants}
            >
                <AnimatedTestimonials testimonials={testimonials} />
            </motion.div>
        </motion.section>
    );
}
