import React from "react";
import photo from "../photo.png";
import ReactWhatsapp from "react-whatsapp";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaInstagram, FaGithub, FaBehance, FaGit } from "react-icons/fa";
import { IconContext } from "react-icons";

const HeroSection = () => {

    const [text] = useTypewriter({
        words: ['Front End Developer, Graphic Designer'],
        loop: 3,
        typeSpeed: 40,
        deleteSpeed: 40,
    });

    return (
        <section className="bg-gray-900 h-screen" id="home">
            <div className="h-screen flex flex-col">
                <div className="h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-around mt-5 mx-5 lg:mx-40">
                    <div className="flex flex-col items-center justify-center mt-10 lg:mt-20">
                        <div>
                            <h1 className="text-slate-400 lg:text-left text-center font-sans text-lg md:text-2xl">
                                Welcome! My name is
                            </h1>
                            <p className="text-white lg:text-left text-center font-bold text-2xl md:text-5xl">
                                Muhammad Fathurrahman
                            </p>
                            <h1 className="text-white lg:text-left text-center font-sans font-normal text-md md:text-3xl">
                                Working as {' '}
                                <span>
                                    {text}
                                </span>
                                <Cursor />
                            </h1>
                            <p className="text-slate-400 mt-2 text-center lg:text-left"><i>"Ku Alleangi Tallanga Na Toalia"</i></p>
                            <div className="flex justify-center lg:justify-start">
                                <ReactWhatsapp number="62-853-4200-0534" message="Halo, dengan fathurstudio?" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mt-5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><span>Contact Me</span></ReactWhatsapp>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 lg:mt-0">
                        <img src={photo} className="max-w-60 lg:max-w-72" alt="Profile" />
                    </div>
                </div>
                <div className="flex flex-col items-center mb-5 text-slate-400">
                    <p>Find Me On:</p>
                    <div className="flex flex-row">
                        <IconContext.Provider value={{ className: "global-class-name", size: "1.5em" }}>
                            <div className="p-2">
                                <a href="https://instagram.com/muhfathur.r" target="_blank" rel="noreferrer"><FaInstagram /></a>
                            </div>
                            <div className="p-2">
                                <a href="https://github.com/20fake" target="_blank" rel="noreferrer"><FaGithub /></a>
                            </div>
                            <div className="p-2">
                                <a href="https://www.behance.net/faturrizki" target="_blank" rel="noreferrer"><FaBehance /></a>
                            </div>
                        </IconContext.Provider>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default HeroSection;