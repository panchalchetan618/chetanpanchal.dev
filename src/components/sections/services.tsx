"use client";

import { headings } from "../styles";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { servicesData } from "../constants";
import ServiceCard from "../ui/service-card";
import { motion } from "framer-motion";
import { childVariants, containerVariants } from "../animations";

const ServicesSection = () => {
    const cards = servicesData.map((service) => (
        <Card
            key={service.title}
            card={{
                title: service.title,
                category: service.category,
                content: <ServiceCard {...service} />,
                src: service.imageSrc,
            }}
        />
    ));

    return (
        <motion.section
            className="py-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
        >
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col justify-center items-center gap-8 lg:flex-row lg:items-start lg:gap-16">
                    <div className="w-full">
                        <div className="lg:max-w-[1080px] mx-auto">
                            <motion.div
                                className="text-center"
                                viewport={{ once: true, amount: 0.1 }}
                                variants={childVariants}
                            >
                                <h2 className={headings.h2}>Services</h2>
                            </motion.div>
                            <motion.div
                                viewport={{ once: true, amount: 0.2 }}
                                variants={childVariants}
                            >
                                <Carousel items={cards} />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default ServicesSection;
