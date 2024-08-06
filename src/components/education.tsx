import React from "react";
import Typewriter from 'typewriter-effect';

const Education = React.forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <div {...props} className="min-h-screen bg-black" ref={ref}>
            <div className="text-white flex justify-center items-center py-36 text-3xl tracking-[18px] h-32">
                <h1>EDUCATION</h1>
            </div>
            <div className="text-center text-white">
                <div className="flex flex-col items-center gap-3 text-3xl tracking-wide py-16">
                    <h1>HERE IS A LITTLE</h1>
                    <h1 className="text-yellow-500">INTRODUCTION</h1>
                </div>
                <div className="flex flex-col items-center gap-2 text-2xl tracking-wide">
                    <h1>Hi, I'm</h1>
                    <span className="text-yellow-500 tracking-wide">
                        <Typewriter
                            options={{
                                strings: ["Ritesh Chaudhary"],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </span>
                </div>
                <p className="text-white text-2xl tracking-wide mt-6 mx-4">
                    I am currently pursuing a Bachelor of Technology (B.Tech) in Computer Science
                    <br />
                    from Veer Bahadur Singh Purvanchal University, Jaunpur.
                </p>
            </div>
        </div>
    );
});

export default Education;
