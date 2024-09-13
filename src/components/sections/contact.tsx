import { buttons, headings, inputs, links, text } from "../styles";
import { LuInstagram } from "react-icons/lu";
import { MdAlternateEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import Link from "next/link";

const Contact = () => {
    return (
        <section
            id="contact"
            className="w-full flex justify-center items-center gap-10 flex-wrap my-20"
        >
            <div className="min-w-[200px] w-full max-w-[400px] flex flex-col justify-center items-start gap-5">
                <h2 className={headings.h2}>Contact</h2>
                <p className={text.normal}>
                    Let's Work together,
                    <br />
                    There're multiple ways to connect with me.
                </p>
                <Link
                    href="/"
                    className={`${links.primary} flex items-center gap-2`}
                >
                    <LuInstagram />
                    <span>Instagram</span>
                </Link>
                <Link
                    href="/"
                    className={`${links.primary} flex items-center gap-2`}
                >
                    <MdAlternateEmail />
                    <span>Email</span>
                </Link>
                <Link
                    href="/"
                    className={`${links.primary} flex items-center gap-2`}
                >
                    <FaGithub />
                    <span>GitHub</span>
                </Link>
                <Link
                    href="/"
                    className={`${links.primary} flex items-center gap-2`}
                >
                    <FiLinkedin />
                    <span>LinkedIn</span>
                </Link>
            </div>
            <form
                method="post"
                className="min-w-[200px] max-w-[400px] w-full flex flex-col justify-center gap-5"
            >
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    className={inputs.normal}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className={inputs.normal}
                />
                <textarea
                    name="message"
                    placeholder="Message"
                    rows={3}
                    required
                    className={inputs.textarea}
                />
                <button type="submit" className={buttons.primary}>
                    Send
                </button>
            </form>
        </section>
    );
};

export default Contact;
