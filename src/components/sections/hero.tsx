import Link from "next/link";
import { buttons, headings } from "../styles";
import { GoArrowDown } from "react-icons/go";

const Hero = () => {
    return (
        <section
            id="hero"
            className="min-h-screen w-full flex flex-col justify-center items-center relative"
        >
            <h1 className={headings.h1}>
                Full Stack <span className="text-gray-500">Developer</span>
            </h1>
            <h1 className={headings.h1}>
                UI/UX <span className="text-gray-500">Designer</span>
            </h1>
            <div className="mt-5 flex justify-between items-center gap-5">
                <Link href="#about" className={buttons.primary}>
                    About me
                </Link>
                <Link href="#contact" className={buttons.secondary}>
                    Hire me
                </Link>
            </div>
            <Link
                href="#about"
                className="absolute bottom-10 mx-auto border-2 border-gray-500 rounded-full text-3xl px-1 py-2 text-gray-100 hover:border-gray-100 hover:bg-gray-100 hover:text-gray-700 transition-all duration-200"
            >
                <GoArrowDown />
            </Link>
        </section>
    );
};

export default Hero;
