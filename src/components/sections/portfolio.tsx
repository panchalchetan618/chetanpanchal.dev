import Link from "next/link";
import { projects } from "../constants";
import { headings } from "../styles";

const Portfolio = () => {
    return (
        <section
            id="portfolio"
            className="max-w-[1080px] mx-auto my-20 flex flex-col justify-center items-center gap-10"
        >
            <h2 className={headings.h2}>Portfolio</h2>
            <div className="flex flex-wrap justify-center items-start gap-12">
                {projects.map((project: any) => (
                    <Link
                        key={project.id}
                        href={project.web}
                        className="relative w-[250px] h-[250px] overflow-hidden"
                        style={{
                            backgroundImage: `url('${project.image}')`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        {/* Content wrapper, initially hidden and shows on hover */}
                        <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <div className="bg-gray-950/75 w-full h-full flex flex-col justify-between items-start p-3">
                                <div className="flex justify-between items-center w-full">
                                    <h3 className={headings.h3}>
                                        {project.name}
                                    </h3>
                                    <span className="px-2 py-1 rounded-full bg-gray-100/50 text-gray-950 text-xs capitalize">
                                        {project.difficulty}
                                    </span>
                                </div>
                                <div>
                                    <p className="text-sm my-1">
                                        {project.description}
                                    </p>
                                    <p className="flex justify-start items-center gap-1 flex-wrap">
                                        {project.skills.map((skill: string) => (
                                            <span key={skill} className="px-2 py-1 rounded-full bg-black/25 text-gray-300 text-xs capitalize">
                                                {skill}
                                            </span>
                                        ))}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
