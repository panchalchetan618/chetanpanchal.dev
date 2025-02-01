"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";
import { projects } from "@/components/constants";
import { headings } from "../styles";

export default function Portfolio() {
    return (
        <section id="portfolio" className="px-4 py-10 max-w-[1280px] mx-auto">
            <h2 className={`${headings.h2} text-center mb-8`}>Portfolio</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
                {projects.map((project) => (
                    <CardContainer key={project.id} className="inter-var">
                        <CardBody className="relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-transparent border-white/[0.2] w-full max-w-sm h-auto rounded-xl p-6 border">
                            <CardItem
                                translateZ="50"
                                className="text-xl font-bold text-white"
                            >
                                {project.name}
                            </CardItem>
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-sm max-w-sm mt-2 text-neutral-300"
                            >
                                {project.skills.join(", ")}
                            </CardItem>
                            <CardItem translateZ="100" className="w-full mt-4">
                                <Image
                                    src={project.image}
                                    height={1080}
                                    width={1080}
                                    className="h-auto w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                    alt={project.name}
                                />
                            </CardItem>
                            <div className="flex flex-wrap gap-3 justify-between items-center mt-6">
                                <CardItem
                                    translateZ={20}
                                    as={Link}
                                    href={project.web}
                                    target="__blank"
                                    className="px-4 py-2 rounded-xl text-xs font-normal text-white hover:text-zinc-300 transition"
                                >
                                    View Project →
                                </CardItem>
                                <CardItem
                                    translateZ={20}
                                    as={Link}
                                    href="#contact"
                                    className="px-4 py-2 rounded-xl text-xs font-normal hover:text-white border border-white hover:bg-transparent bg-white text-black transition"
                                >
                                    Hire me
                                </CardItem>
                            </div>
                        </CardBody>
                    </CardContainer>
                ))}
            </div>
        </section>
    );
}
