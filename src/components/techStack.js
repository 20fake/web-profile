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
        words : ['Tech Stack'],
        loop : {},
        typeSpeed : 80,
        deleteSpeed : 80,
    });


    return (
        <>
            <section className="h-60 flex bg-gray-900 items-center justify-center">
                <div className="h-60 flex flex-col items-center justify-center">
                    <div>
                        <h1 className="text-white font-bold text-3xl">
                            {text} <Cursor />
                        </h1>
                    </div>
                    <div className="flex flex-row items-center justify-center mt-5">
                        <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/html-icon.png" className="max-h-16 mx-2"></img>
                        <img src={jsicon} className="max-h-16 mx-2"></img>
                        <img src={reactimg} className="max-h-16 mx-2"></img>
                        <img src={tailwindicon} className="max-h-16 mx-2"></img>
                        <img src={adobe_illustrator} className="max-h-16 mx-2"></img>
                        <img src={adobe_photoshop} className="max-h-16 mx-2"></img>
                        <img src={canva} className="max-h-16 mx-2"></img>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TechStack;