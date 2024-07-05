import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import project from "../assets/constant";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <div
      id="projects"
      className="flex flex-col items-center justify-center min-h-screen pt-16"
    >
      <h1 className="p-3 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 text-6xl font-bold mb-8 text-center">
        Projects
      </h1>
      <div
        className="flex flex-wrap justify-center gap-10 p-4"
        data-aos="fade-up" // Apply AOS fade-in animation
        data-aos-delay="400" // Optional delay
        data-aos-duration="1200"
      >
        {project.map((e, i) => (
          <ProjectCard data={e} b={i} key={e.id} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
