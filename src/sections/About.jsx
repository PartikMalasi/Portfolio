import React, { useEffect } from "react";
import hello from "../../hello.json";
import Lottie from "lottie-react";
import AOS from "aos";

const About = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section id="about" className="pt-8">
      <div
        data-aos="fade" // Apply AOS fade-in animation
        data-aos-delay="400" // Optional delay
        data-aos-duration="1200"
        className="flex flex-col items-center justify-center min-h-screen  px-4 sm:px-0"
      >
        {" "}
        {/* Added px-4 sm:px-0 */}
        <h1 className="p-3 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 text-6xl font-bold text-center">
          About Me
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto">
          <div className="md:w-1/2">
            <Lottie animationData={hello} />
          </div>
          <div className="md:w-2/3 md:pl-8">
            <p className="mx-5 text-xl text-slate-300">
              <span className="first-letter text-6xl text-blue-500">I </span>
              am a passionate and dedicated Computer Science enthusiast
              currently pursuing my Bachelor of Technology degree in Computer
              Science at the Indian Institute of Information Technology, Kota.
            </p>
            <br />
            <p className="mx-5 text-xl text-slate-300">
              I'm constantly seeking opportunities to expand my knowledge and
              skills in the fields of software engineering, data structures, and
              algorithms. Additionally, I am a fitness enthusiast and an avid
              learner, constantly striving for self-improvement in both my
              professional and personal pursuits.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up" // Apply AOS fade-in animation
          data-aos-delay="400" // Optional delay
          data-aos-duration="1200"
          style={{ backgroundColor: "#2caed8" }}
          className="flex flex-col items-center justify-center w-full max-w-6xl text-black rounded-lg mx-2 md:mx-4 lg:mx-10 mt-8"
        >
          <h1 className="text-2xl mb-4 font-bold">Core Fundamentals</h1>
          <div className="flex flex-wrap justify-center">
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-4">
              <ul className="list-disc pl-4">
                <li className="text-lg">DBMS</li>
                <li className="text-lg">Software Engineering</li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-4">
              <ul className="list-disc pl-4">
                <li className="text-lg">Computer Architecture</li>
                <li className="text-lg">Operating System</li>
              </ul>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-4">
              <ul className="list-disc pl-4">
                <li className="text-lg">Computer Networks</li>
                <li className="text-lg">Artificial Intelligence</li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-4">
              <ul className="list-disc pl-4">
                <li className="text-lg">Data Structures and Algorithms</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
