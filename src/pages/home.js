import React from "react";
import Navbar from "../components/navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import TechStack from "../components/techStack";
import ProjectsSection from "../components/ProjectsSection";
import Contact from "../components/ContactSection";

const Home = () => {

    return (
        <>
            <Navbar />
            <HeroSection />
            <AboutSection />
            <TechStack />
            <ProjectsSection />
            <Contact />
        </>
    )
}

export default Home;