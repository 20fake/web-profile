import React from 'react'

const FooterSection = () => {
    return (
        <>
            <section className="bg-gray-900 h-max flex flex-col" id="footer">
                <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
                    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                            © 2023{" "}
                            <a 
                                href="https://fathurstudio.netlify.app" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                FathurStudio_™
                            </a>
                            . All Rights Reserved.
                        </span>

                        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                            <li>
                                <a href="/about" className="hover:underline me-4 md:me-6">
                                    About
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="https://github.com/20fake" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="hover:underline me-4 md:me-6"
                                >
                                    Github
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="https://behance.net/faturrizki" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="hover:underline me-4 md:me-6"
                                >
                                    Behance
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="https://instagram.com/fathurstudio_" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="hover:underline"
                                >
                                    Instagram
                                </a>
                            </li>
                        </ul>
                    </div>
                </footer>
            </section>
        </>
    )
}

export default FooterSection
