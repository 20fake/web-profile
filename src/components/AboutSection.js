import React from "react";
import image from "../logo.svg"
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import imageSecond from "../assets/adobe_illustrator.png";

const AboutSection = () => {

    const [text] = useTypewriter({
        words : ['About Me'],
        loop : 3,
        typeSpeed : 80,
        deleteSpeed : 80,
    });

    return (
        <>
            <section className="bg-gray-900 h-screen" id="about" >
                <div className="h-screen flex flex-col items-center justify-center">
                    <h1 className="text-white font-bold text-3xl mb-5 md:mt-0 md:mb-10">
                        {text}<Cursor />
                    </h1>
                    <div className="gap-16 items-center justify-center px-4 mx-5 md:mx-14 max-w-screen-xl lg:grid lg:grid-cols-2 lg:px-6">
                        <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                            <h2 className="mb-4 text-2xl md:text-3xl tracking-tight font-bold text-gray-900 dark:text-white">You can call me Fathur</h2>
                            <p className="mb-2 md:mb-4">Fresh Graduate from Computer and Network Engineering, Politeknik Negeri Ujung Pandang, 2022. Have many various organizational experience on Major Student Organization level and Polytechnic Student Organization level.</p> <p>Actively studying about digital or IT fields by joining online bootcamp, online course, and sertification. Can handle front end web development, logo design, graphic design. Currently working as a Freelancer.</p>
                        </div>

                        <div className="grid grid-rows md:grid-cols-2 mt-5 md:mt-10 gap-5 md:gap-10">
                            <div className="max-w-xs flex flex-row md:flex-none md:flex-col min-h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <div className="flex items-center justify-center">
                                    <HashLink to="#projects" smooth>
                                        <img className="rounded-t-lg h-20 md:h-40 hidden md:block" src={image} alt="React JS" />
                                    </HashLink>
                                </div>
                                <div className="p-5">
                                    <HashLink to="#projects" smooth>
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Programming</h5>
                                    </HashLink>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Tools using React JS, Tailwind CSS, Javascript, Python, Kivy, KivyMD, etc.</p>
                                    <HashLink to="#projects" smooth className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Portfolio
                                    </HashLink>
                                </div>
                            </div>
                            <div className="max-w-xs flex flex-row md:flex-none md:flex-col min-h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <div className="flex items-center justify-center">
                                    <Link to="https://www.behance.net/faturrizki" target="_blank" rel="noreferer">
                                        <img className="rounded-t-lg h-20 md:h-40 p-4 hidden md:block" src={imageSecond} alt="Adobe Illustrator" />
                                    </Link>
                                </div>
                                <div className="p-5">
                                    <Link to="https://www.behance.net/faturrizki" target="_blank" rel="noreferer">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Designing</h5>
                                    </Link>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Tools using Adobe Illustrator, Adobe Photoshop, Canva, Sketchbook, etc.</p>
                                    <Link to="https://www.behance.net/faturrizki" target="_blank" rel="noreferer">
                                        <span className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            Portfolio
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutSection;
