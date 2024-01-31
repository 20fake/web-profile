import React, { useContext, useEffect, useState } from "react";
import Navbar from "./navbar";
import imgFirst from "../assets/adobe_illustrator.png";
import { ChevronRight, ChevronLeft } from "react-feather";
import CardDetail from "./CardDetail";

const prev = () => {
    alert('kiri klik');
}

const next = () => {
    alert('kanan klik');
}

const DetailProject = () => {

    return (

        <>
            <Navbar />
            {/* <CardDetail /> */}
            <section className="h-screen flex bg-gray-900 items-center justify-center">
                <div className="h-screen flex flex-row gap-5 items-center justify-center">
                    <div className="flex flex-wrap items-center justify-center bg-white dark:bg-gray-700 h-60 w-96 rounded-xl border-4 border-gray-900 dark:border-gray-500 overflow-hidden relative">
                        <div className="absolute inset-0 flex items-center justify-between p-4">
                            <button
                                onClick={prev}
                                className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
                            >
                                <ChevronLeft size={20} />
                            </button>
                            <button
                                onClick={next}
                                className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>
                        <img className="" src={imgFirst}></img>
                    </div>
                    <div className="flex flex-col p-5 bg-white dark:bg-gray-900 border dark:border-gray-700 h-60 max-h-60 w-96 max-w-96 rounded-xl">
                        <h1 className="dark:text-white text-lg font-semibold mb-5">MANAKO ANJAY</h1>
                        <p className="dark:text-gray-400 mb-2">Time : </p>
                        <p className="dark:text-gray-400 mb-2">Tools : </p>
                        <p className="dark:text-gray-400 mb-2">Description : </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DetailProject;