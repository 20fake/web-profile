import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import ReactWhatsapp from "react-whatsapp";

const Navbar = () => {

    const resume = "https://drive.google.com/file/d/15Cy01wMETv5EMunPVMNvQYdapAiabaxL/view?usp=sharing"

    return (
        <div>
            <nav className="backdrop-filter backdrop-blur-lg bg-opacity-30 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <div>
                        <a href="/" className="text-white font-sans font-medium hover:text-blue-500">
                            fathurstudio
                        </a>
                    </div>
                    <div className="justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col items-center p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-700">
                            <li>
                                <Link to="#home" smooth>
                                    <span className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#about" smooth>
                                    <span className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#projects" smooth>
                                    <span className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Projects</span>
                                </Link>
                            </li>
                            <li>
                                <div>
                                    <ReactWhatsapp number="62-853-4200-0534" message="Halo, dengan fathurstudio?" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"><span>Contact</span></ReactWhatsapp>
                                </div>
                            </li>
                            <li>
                                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                                    <Link to={resume} target="_blank" rel="noreferrer" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Resume</Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar;