import React from "react";
import Social from "./socialmedia";
import Typewriter from 'typewriter-effect';

const HeroSection = React.forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <div {...props} className="page bg-zinc-950" ref={ref}>
            <div className="bg-custom-image bg-cover bg-center h-screen flex flex-col items-center justify-center px-4">
                <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-screen-xl">

                    <div className="lg:text-left lg:w-1/2 mb-8 lg:mb-0">
                        <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">Hi There, I'm</h1>
                        <h2 className="text-xl lg:text-2xl font-bold text-yellow-400 mb-4">
                            <Typewriter
                                options={{
                                    strings: ["Ritesh Chaudhary"],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h2>
                        <p className="text-lg lg:text-xl text-white mb-4">
                            I Am Into <span className="text-blue-400">Web Development</span>
                        </p>
                        <button onClick={() => {
                            window.open("https://linktr.ee/riteshdev99");
                        }} className="px-8 py-3 rounded-3xl bg-blue-500 text-white hover:bg-blue-600 transition mb-6 lg:mb-0">
                            About Me
                        </button>
                        <div className="flex justify-center lg:justify-start gap-4 flex-wrap mt-5">
                            <Social onClick={() => window.open("https://github.com/RiteshDev99")}>
                                <img src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png" alt="GitHub" className="w-full h-full lg:w-full lg:h-full" />
                            </Social>
                            <Social onClick={() => window.open("https://www.linkedin.com/in/ritesh-chaudhary-055949272?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app")}>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT05_97Wd-5dAjbSP9K0WAryxhYpCl4ao-pn_yR8nNmgXAtFve4M2lJPxgxa_aqbfD7Wfc&usqp=CAU" alt="LinkedIn" className="w-full h-full lg:w-full lg:h-full" />
                            </Social>
                            <Social onClick={() => window.open("https://x.com/RiteshDev99?s=09")}>
                                <img src="https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg" alt="Twitter" className="w-full h-full lg:w-full lg:h-full" />
                            </Social>
                            <Social onClick={() => window.open("https://www.instagram.com/riteshchaudhary08?igsh=MWV2eDNmYmQ3djV5Yw==")}>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-pv2b6DA01wqg52R8Pcl6uBzwT49Vr_zSKg&s" alt="Instagram" className="w-full h-full lg:w-full lg:h-full " />
                            </Social>
                        </div>
                    </div>

                    <div className="flex items-center justify-center lg:w-1/2 mt-8 lg:mt-0">
                        <div className="rounded-full overflow-hidden w-48 h-48 lg:w-80 lg:h-80 bg-gray-800 flex items-center justify-center ml-[10vw]">
                            <img src="pic.jpeg" alt="Profile" className="object-cover w-full h-full" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default HeroSection;
