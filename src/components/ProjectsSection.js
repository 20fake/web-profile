import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTypewriter } from "react-simple-typewriter";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import CardsComponent from "./MobileCard";

const ProjectsSection = () => {
    const [data, setData] = useState([]);
    const [isTablet, setIsTablet] = useState(window.innerWidth < 768);
    const [slidesToShow, setSlidesToShow] = useState(isTablet ? 1 : 3);

    useEffect(() => {
        axios
            .get("/db/detaildata.json")
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => console.log(err));

        const handleResize = () => {
            const tablet = window.innerWidth < 768;
            setIsTablet(tablet);
            setSlidesToShow(tablet ? 1 : 3);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const [text] = useTypewriter({
        words: ["My Works"],
        loop: 3,
        typeSpeed: 80,
        deleteSpeed: 80,
    });

    const settings = {
        dots: true,
        infinite: true,
        autoplay: 1,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
    };

    return (
        <>
            <section className="bg-gray-900 h-max lg:h-screen justify-center flex flex-col" id="projects">
                <div className="flex flex-col items-center justify-center mt-10">
                    <div className="mb-5 md:mb-0">
                        <h1 className="text-white font-bold text-3xl md:mt-0 md:mb-5">
                            {text}
                        </h1>
                    </div>
                    <p className="text-gray-400 text-sm md:text-lg lg:text-xl">This is my past work, including my bootcamp, task, etc.</p>
                </div>
                <div className="flex items-center justify-center mt-10 mb-10">
                    <div className="w-72 md:w-10/12 md:max-w-4xl ">
                        <div>
                            <Slider {...settings}>
                                {data !== null &&
                                    data.length !== 0 &&
                                    data.map((item, i) => (
                                        <div className="md:h-80 md:w-44 h-max lg:h-64 w-56 p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={item.id}>
                                            <div className="md:h-20 lg:h-16">
                                                <h1 className="text-gray-900 dark:text-white">
                                                    {item.title}
                                                </h1>
                                            </div>
                                            <div className="h-36 lg:h-24 overflow-hidden">
                                                <p className="text-gray-900 dark:text-gray-400">
                                                    {item.description}
                                                </p>
                                            </div>
                                            <div>
                                                <Link
                                                    to={item.srccode}
                                                    target="_blank"
                                                    rel="noreferer"
                                                    className="inline-flex items-center px-3 py-2 md:mt-4 text-sm text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                                >
                                                    Read More
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProjectsSection;
