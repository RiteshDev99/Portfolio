import React from "react";
import SkillsIcon from "./skillsIcon";

const Skill = React.forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <div {...props} ref={ref} className="min-h-screen bg-black flex items-center justify-center py-16 px-4">

            <div className="flex flex-col items-center justify-between min-h-[50vh]">

                <div className="text-white text-center text-3xl lg:text-5xl  mb-8 tracking-[18px]">
                    <h1>SKILLS</h1>
                </div>

                <span className="text-white text-center mb-12">
                    <h4 className=" lg:text-xl  text-lg tracking-[8px]  ">
                        SKILLS I KNOW AS A <span className="text-yellow-500 font-semibold">FRONTEND DEVELOPER</span>
                    </h4>
                </span>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                    <SkillsIcon>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ-RS3Oeb0xs2q4aJmYZ4FGWnFuPnn4yFNHg&s"
                            alt="React"
                            className="w-full h-full lg:w-24 lg:h-24 object-contain transition-transform transform hover:scale-110"
                        />
                    </SkillsIcon>
                    <SkillsIcon>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAw6g643X_IP059eZ03Jh_kcr9-a-oQpMdhQ&s"
                            alt="Node.js"
                            className="w-full h-full lg:w-24 lg:h-24 object-contain transition-transform transform hover:scale-110"
                        />
                    </SkillsIcon>
                    <SkillsIcon>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png"
                            alt="JavaScript"
                            className="w-full h-full lg:w-24 lg:h-24 object-contain transition-transform transform hover:scale-110"
                        />
                    </SkillsIcon>
                    <SkillsIcon>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDML5CFq70Y9FJ52YnyCjfdyUA3g9B6is_jA&s"
                            alt="TypeScript"
                            className="w-full h-full lg:w-24 lg:h-24 object-contain transition-transform transform hover:scale-110"
                        />
                    </SkillsIcon>
                    <SkillsIcon>
                        <img
                            src="https://cdn.iconscout.com/icon/premium/png-256-thumb/html-2752158-2284975.png?f=webp&w=256"
                            alt="HTML"
                            className="w-full h-full lg:w-24 lg:h-24 object-contain transition-transform transform hover:scale-110"
                        />
                    </SkillsIcon>
                    <SkillsIcon>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png"
                            alt="CSS"
                            className="w-full h-full lg:w-24 lg:h-24 object-contain transition-transform transform hover:scale-110"
                        />
                    </SkillsIcon>
                </div>
            </div>
        </div>
    );
});

export default Skill;
