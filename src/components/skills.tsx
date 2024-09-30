import React from "react";
import SkillsIcon from "./skillsIcon";
import { motion } from "framer-motion";

const Skill = React.forwardRef<HTMLDivElement>((props, ref) => {

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div {...props} ref={ref} className="min-h-screen bg-zinc-900 flex items-center justify-center py-16 px-4">
            <div className="flex flex-col items-center justify-between min-h-[50vh]">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="text-white text-center text-3xl lg:text-5xl mb-8 tracking-[18px]"
                >
                    <h1>SKILLS</h1>
                </motion.div>

                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 1 }}
                    className="text-white text-center mb-12"
                >
                    <h4 className=" lg:text-xl  text-lg tracking-[8px]">
                        SKILLS I KNOW AS A <span className="text-yellow-500 font-semibold">FRONTEND DEVELOPER</span>
                    </h4>
                </motion.span>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                    {[
                        { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ-RS3Oeb0xs2q4aJmYZ4FGWnFuPnn4yFNHg&s", alt: "React" },
                        { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAw6g643X_IP059eZ03Jh_kcr9-a-oQpMdhQ&s", alt: "Node.js" },
                        { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png", alt: "JavaScript" },
                        { src: "https://www.interviewbit.com/blog/wp-content/uploads/2021/09/C-2.png", alt: "C" },
                        { src: "https://images.ctfassets.net/in6v9lxmm5c8/57MXX73Nx2rUnUI730EykA/8d13236943bb46948155f92f2325369e/firebase.png?q=50&fm=webp", alt: "Firebase" },
                        { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDML5CFq70Y9FJ52YnyCjfdyUA3g9B6is_jA&s", alt: "TypeScript" },
                        { src: "https://cdn.iconscout.com/icon/premium/png-256-thumb/html-2752158-2284975.png?f=webp&w=256", alt: "HTML" },
                        { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png", alt: "CSS" },
                        { src: "https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/3000/figma-logo-512.png", alt: "Figma" },
                    ].map((icon, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            initial="hidden"
                            animate="visible"
                            className="flex items-center justify-center"
                        >
                            <SkillsIcon>
                                <img
                                    src={icon.src}
                                    alt={icon.alt}
                                    className="w-full h-full lg:w-24 lg:h-24 object-contain transition-transform transform hover:scale-110"
                                />
                            </SkillsIcon>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
});

export default Skill;
