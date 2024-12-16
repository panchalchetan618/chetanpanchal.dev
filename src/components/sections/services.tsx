"use client";

import { FiChevronDown } from "react-icons/fi";
import { services } from "../constants";
import { useState } from "react";
import { headings } from "../styles";

const ServicesSection = () => {
    const [activeId, setActiveId] = useState<number | null>(1);

    const toggleAccordion = (id: number) => {
        setActiveId((prevId) => (prevId === id ? null : id));
    };

    return (
        <section className="py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col justify-center items-center gap-8 lg:flex-row lg:items-start lg:gap-16">
                    <div className="w-full lg:w-3/4">
                        <div className="lg:max-w-2xl mx-auto">
                            <div className="mb-8">
                                <h2 className={headings.h2}>Services</h2>
                            </div>
                            <div className="accordion-group space-y-8">
                                {services.map((service) => (
                                    <div
                                        key={service.id}
                                        className="accordion border-b border-gray-900 pb-4"
                                    >
                                        <button
                                            className="accordion-toggle flex justify-between items-center text-lg font-medium text-gray-300 w-full transition duration-300"
                                            onClick={() =>
                                                toggleAccordion(service.id)
                                            }
                                            aria-expanded={
                                                activeId === service.id
                                            }
                                            aria-controls={`service${service.id}`}
                                        >
                                            <h3 className={headings.h3}>
                                                {service.title}
                                            </h3>
                                            <FiChevronDown
                                                className={`w-5 h-5 transition-transform transform ${
                                                    activeId === service.id
                                                        ? "rotate-180"
                                                        : ""
                                                } text-gray-200`}
                                            />
                                        </button>
                                        <p
                                            id={`service${service.id}`}
                                            className={`accordion-content mt-4 transition-max-height duration-300 overflow-hidden ${
                                                activeId === service.id
                                                    ? "max-h-screen"
                                                    : "max-h-0"
                                            }`}
                                        >
                                            {service.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
