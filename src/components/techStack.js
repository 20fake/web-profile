import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import jsicon from "../assets/javascript.png"
import tailwindicon from "../assets/tailwindcss.svg"
import reactimg from "../assets/React-icon.png"
import adobe_illustrator from "../assets/adobe_illustrator.png"
import adobe_photoshop from "../assets/adobe_photoshop.png"
import canva from "../assets/canva.png"

const TechStack = () => {

    const [text] = useTypewriter({
        words: ['Tech Stack'],
        loop: 3,
        typeSpeed: 80,
        deleteSpeed: 80,
    });


    return (
        <>
            <section className="h-60 md:h-80 lg:h-96 flex bg-gray-900 items-center justify-center">
                <div className="flex flex-col w-full items-center justify-center">
                    <h1 className="text-white font-bold text-3xl mb-5 md:mt-0 md:mb-10">
                        {text} <Cursor />
                    </h1>
                    <div className="flex w-full flex-wrap items-center justify-center mt-5">
                        <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/html-icon.png" className="max-h-12 md:max-h-16 lg:max-h-20 mx-2 my-2 md:my-0" alt="profile"></img>
                        <img src={jsicon} className="max-h-12 md:max-h-16 lg:max-h-20 mx-2 my-2 md:my-0" alt="javascript"></img>
                        <img src={reactimg} className="max-h-12 md:max-h-16 lg:max-h-20 mx-2 my-2 md:my-0" alt="react"></img>
                        <img src={tailwindicon} className="max-h-12 md:max-h-16 lg:max-h-20 mx-2 my-2 md:my-0" alt="tailwind"></img>
                        <img src={adobe_illustrator} className="max-h-12 md:max-h-16 lg:max-h-20 mx-2 my-2 md:my-0" alt="adobe-illustrator"></img>
                        <img src={adobe_photoshop} className="max-h-12 md:max-h-16 lg:max-h-20 mx-2 my-2 md:my-0" alt="adobe-photoshop"></img>
                        <img src={canva} className="max-h-12 md:max-h-16 lg:max-h-20 mx-2 my-2 md:my-0" alt="canva"></img>
                    </div>
                </div>
            </section>

        </>
    )
}

export default TechStack;