import { headings, text } from "../styles";
import Image from "next/image";

const About = () => {
    return (
        <section
            id="about"
            className="w-full flex justify-center items-center gap-10 flex-wrap my-20"
        >
            <div className="max-w-[480px] flex flex-col justify-center items-start gap-5">
                <h2 className={headings.h2}>About me</h2>
                <p className={text.normal}>
                    Hey, I'm{" "}
                    <span className={text.highlighted}>Chetan Panchal</span>{" "}
                    <br /> I'm a{" "}
                    <span className={text.highlighted}>
                        Full Stack Developer & UI/UX Designer with extensive
                        industry-level experience in designing and developing
                        high-performance websites & mobile applications.
                    </span>
                    <br />
                    My expertise lies in{" "}
                    <span className={text.highlighted}>
                        creating seamless, production-ready digital solutions
                        with a strong emphasis on user experience,
                        functionality, and performance.
                    </span>
                    <br />
                    Whether it's building a robust web platform or crafting
                    intuitive interfaces, I'm{" "}
                    <span className={text.highlighted}>
                        passionate about delivering exceptional results that
                        balance both aesthetics and efficiency.
                    </span>
                </p>
            </div>
            <div className="relative w-[400px] h-[400px]">
                <Image
                    src="/assets/images/about-section/bg-1.png"
                    alt="Background Image 1"
                    width={250}
                    height={250}
                    className="absolute top-0 left-0 h-[250px] w-[250px]"
                />
                <Image
                    src="/assets/images/about-section/Chetan-Panchal.png"
                    alt="Background Image 2"
                    width={250}
                    height={250}
                    className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-[250px] w-[250px] z-[1]"
                />
                <Image
                    src="/assets/images/about-section/bg-2.png"
                    alt="Chetan Panchal"
                    width={250}
                    height={250}
                    className="absolute right-0 bottom-0 h-[250px] w-[250px]"
                />
            </div>
        </section>
    );
};

export default About;