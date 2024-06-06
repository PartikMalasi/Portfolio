import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { useEffect } from "react";
const Hero = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <div className="sm:p-40 relative bg-cover bg-center   flex justify-center gap-2 items-center">
      <div className="flex flex-col-reverse md:flex-row justify-center md:justify-center gap-24 items-center w-full px-4 py-20 md:py-16">
        {/* First column */}
        <div
          data-aos="fade-up" // Apply AOS fade-in animation
          data-aos-delay="400" // Optional delay
          data-aos-duration="1200"
          className="w-full md:w-1/2 mt-8 md:mt-0 md:mb-0"
        >
          <h1 className="text-4xl md:text-6xl mb-5 font-bold leading-normal">
            Hey,
          </h1>
          <h1 className="text-4xl md:text-6xl mb-5 font-bold leading-normal">
            I'm <span className="text-red-500">Partik Malasi</span>
          </h1>
          <p className="mb-6 text-lg">
            <TypeAnimation
              sequence={[
                "I'm a MERN Developer",
                1000,
                "I'm a DSA Enthusiast",
                1000,
                "I'm a Competitive Programmer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />
          </p>
          <p className="mb-6 text-lg">
            A Pre-Final Student at IIIT Kota pursuing Computer Science and
            Engineering
          </p>
          <div className="flex space-x-4">
            <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-full w-40">
              <a href="/#contact">Contact Me</a>
            </button>
            <button className="bg-white text-black hover:bg-gray-300 font-semibold py-2 px-6 rounded-full w-40 border border-grey-500">
              <a href="https://drive.google.com/file/d/1cQ_zRUtZv5yI8YXHTDYTiwVIjnupVb9b/view?usp=sharing">
                Resume
              </a>
            </button>
          </div>
        </div>
        {/* Second column */}

        <img
          data-aos="flip-left" // Apply AOS fade-in animation
          data-aos-delay="400" // Optional delay
          data-aos-duration="1200"
          src="/Screenshot 2023-11-24 223154.png"
          alt="Your Image"
          className="rounded-full h-96 w-96"
        />
      </div>
    </div>
  );
};

export default Hero;
