"use client";

import { headings } from "../styles";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { servicesData } from "../constants";
import ServiceCard from "../ui/service-card";

const ServicesSection = () => {
    const cards = servicesData.map((service, index) => (
        <Card 
            key={service.title} 
            card={{
                title: service.title,
                category: service.category,
                content: <ServiceCard {...service} />,
                src: service.imageSrc
            }} 
            index={index} 
        />
    ));

    return (
        <section className="py-24">
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col justify-center items-center gap-8 lg:flex-row lg:items-start lg:gap-16">
                    <div className="w-full">
                        <div className="lg:max-w-[1080px] mx-auto">
                            <div className="text-center">
                                <h2 className={headings.h2}>Services</h2>
                            </div>
                            <Carousel items={cards} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
