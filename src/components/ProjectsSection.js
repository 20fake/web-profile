import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const ProjectsSection = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("/db/detaildata.json")
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => console.log(err));
    }, [])

    const [text] = useTypewriter({
        words: ['My Works'],
        loop: {},
        typeSpeed: 80,
        deleteSpeed: 80,
    });

    return (
        <>
            <section className="bg-gray-900 h-full flex flex-col" id="projects">
                <div className="flex flex-col h-full items-center mt-20">
                    <h1 className="text-white font-bold text-3xl">{text} <Cursor /></h1>
                    <p className="text-gray-500 mt-2 text-lg dark:text-gray-400">This is my past work, including my bootcamp, task, etc.</p>
                    <div className="grid grid-cols-2 gap-20 mt-10 mb-20 justify-center">
                        {
                            data !== null && data.length !== 0 && data.map((item, i) => {
                                return <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={item.id}>
                                    <div className="p-5">
                                        <a href="#">
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
                                        </a>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
                                        <Link to={item.srccode} target="_blank" rel="noreferer" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            Github
                                        </Link>
                                    </div>
                                </div>
                            })
                        }
                    </div>

                </div>
            </section>
        </>
    )
}

export default ProjectsSection;