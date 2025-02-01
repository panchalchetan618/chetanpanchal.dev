"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { testimonials } from "../constants";
import { headings } from "../styles";

export default function Testimonials() {
    return (
        <section id="testimonis">
                <h2 className={`${headings.h2} text-center mb-8`}>
                    Testimonials
                </h2>
                <AnimatedTestimonials testimonials={testimonials} />
        </section>
    );
}
