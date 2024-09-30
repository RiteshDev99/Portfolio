import React from "react";
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { motion } from "framer-motion";

const Education = React.forwardRef<HTMLDivElement>((props, ref) => {
    const [text] = useTypewriter({
        words: ["Ritesh Chaudhary"],
        loop: true,
    });

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8 } }
    };

    const slideUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    return (
        <div {...props} className="min-h-screen bg-zinc-900" ref={ref}>
            <motion.div
                className="text-white flex justify-center items-center py-36 text-3xl tracking-[18px] h-32"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
            >
                <h1>EDUCATION</h1>
            </motion.div>

            <motion.div
                className="text-center text-white"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ delay: 0.2 }}
            >
                <motion.div
                    className="flex flex-col items-center gap-3 text-3xl tracking-wide py-16"
                    initial="hidden"
                    animate="visible"
                    variants={slideUp}
                >
                    <h1>HERE IS A LITTLE</h1>
                    <h1 className="text-yellow-500">INTRODUCTION</h1>
                </motion.div>

                <motion.div
                    className="flex flex-col items-center gap-2 text-2xl tracking-wide"
                    initial="hidden"
                    animate="visible"
                    variants={slideUp}
                    transition={{ delay: 0.4 }}
                >
                    <h1>Hi, I'm</h1>
                    <span className="text-yellow-500 tracking-wide">
                        {text}
                        <Cursor />
                    </span>
                </motion.div>

                <motion.p
                    className="text-white text-2xl tracking-wide mt-6 mx-4"
                    initial="hidden"
                    animate="visible"
                    variants={slideUp}
                    transition={{ delay: 0.6 }}
                >
                    I am currently pursuing a Bachelor of Technology (B.Tech) in Computer Science
                    <br />
                    from Veer Bahadur Singh Purvanchal University, Jaunpur.
                </motion.p>
            </motion.div>
        </div>
    );
});

export default Education;
