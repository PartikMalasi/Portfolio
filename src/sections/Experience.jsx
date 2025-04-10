import React, { useEffect } from "react";
import AOS from "aos";
import { FaGlobe, FaLinkedin } from "react-icons/fa";
import cyble from "../assets/experience/cyble.jpg";
import dhagakart from "../assets/experience/dhagakart.jpg";

const Experience = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section id="experience" className="pt-8">
      <div
        data-aos="fade"
        data-aos-delay="400"
        data-aos-duration="1200"
        className="flex flex-col items-center gap-4 justify-center px-4 py-8 sm:px-2"
      >
        <h1 className="p-3 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 text-6xl font-bold text-center">
          Experience
        </h1>
      </div>
      <div className="flex gap-8 w-full max-w-6xl mx-auto px-4 md:px-8 lg:px-16 mt-8">
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="1200"
          className="bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8 transition-transform transform hover:scale-105"
        >
          <div className="flex flex-col gap-2 items-center text-center">
            <img src={cyble} alt="Cyble Logo" className="w-16 h-16 mb-2" />
            <div className="flex flex-col items-center">
              <div className="flex flex-col items-center">
                <h2 className="text-2xl font-bold text-white">Cyble</h2>
              </div>
              <div className="flex gap-4 mt-2">
                <a
                  href="https://cyble.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGlobe className="text-white text-2xl hover:text-blue-400" />
                </a>
                <a
                  href="https://www.linkedin.com/company/cyble-global/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-white text-2xl hover:text-blue-400" />
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-lg text-gray-300">
                Software Engineering Intern
              </p>
              <p className="text-lg text-gray-300">(Feb 2025 - Present)</p>
            </div>
          </div>
          <ul className="mt-4 space-y-2 text-lg text-gray-400 list-disc list-inside px-4">
            <li>
              Optimized client-side routing, reducing load time from 8.38s to
              1.09s.
            </li>
            <li>
              Fixed routing to retain filters, improving usability in Cyble Hawk
              Dark Web Posts.
            </li>
          </ul>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="1200"
          className="bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8 transition-transform transform hover:scale-105"
        >
          <div className="flex flex-col gap-1 items-center text-center">
            <img
              src={dhagakart}
              alt="DhagaKart Logo"
              className="w-16 h-16 mb-2"
            />
            <div className="flex flex-col items-center">
              <div className="flex flex-col items-center">
                <h2 className="text-2xl font-bold text-white">DhagaKart</h2>
              </div>
              <div className="flex gap-4 mt-2">
                <a
                  href="https://dhagakart.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGlobe className="text-white text-2xl hover:text-blue-400" />
                </a>
                <a
                  href="https://www.linkedin.com/company/dhagakart/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-white text-2xl hover:text-blue-400" />
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-lg text-gray-300">
                Software Engineering Intern
              </p>
              <p className="text-lg text-gray-300">(Oct 2024 - Dec 2024)</p>
            </div>
          </div>
          <ul className="mt-4 space-y-2 text-lg text-gray-400 list-disc list-inside px-4">
            <li>
              Boosted website traffic by 20% and reduced page load time by 15%.
            </li>
            <li>
              Improved user experience with intuitive navigation and seamless
              workflows.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
