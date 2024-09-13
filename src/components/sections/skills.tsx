import { skills } from "../constants";
import { buttons, headings } from "../styles";

const Skills = () => {
    return (
        <section
            id="skills"
            className="max-w-[768px] mx-auto my-20 flex flex-col justify-center items-center gap-10"
        >
            <h2 className={headings.h2}>Skills</h2>
            <div className="flex flex-wrap justify-center items-center gap-4">
                {skills.map((skill: any) => (
                    <div
                        key={skill.id}
                        className={
                            skill.highlight
                                ? buttons.primary
                                : buttons.secondary
                        }
                    >
                        {skill.name}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
