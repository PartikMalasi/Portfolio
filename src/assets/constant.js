import nike from "../assets/project/nike.png";
import todo from "../assets/project/todo.png";
import geeky from "../assets/project/geekybytes.png";
import portfolio from "../assets/project/portfolio.png";
import fitness from "../assets/project/fittness.png";
import country from "../assets/project/country.png";
import html from "/skillsicon/html.png";
import css from "/skillsicon/css-3.png";
import js from "/skillsicon/js.png";
import react from "/skillsicon/react.png";
import bootstrap from "/skillsicon/bootstrap.png";
import express from "/skillsicon/express.png";
import git from "/skillsicon/git.png";
import mongodb from "/skillsicon/mongodb.png";
import rest from "/skillsicon/rest.png";
import mui from "/skillsicon/mui.png";
import tailwind from "/skillsicon/tailwind.png";
import node from "/skillsicon/node.png";
import c from "/skillsicon/c.png";
import cpp from "/skillsicon/cpp.png";
import python from "/skillsicon/python.png";
const project = [
  {
    name: "GeekyBytes",
    img: geeky,
    content:
      "Built a tech blogging website using the MERN stack (MongoDB, Express, React, Node.js) with features for creating, reading, updating, and deleting blog posts and visual enrichment of blog posts.",
    icons: [react, tailwind, mongodb, node, express],
    git: "https://github.com/PartikMalasi/GeekyBytes-Frontend",
    link: "https://geeky-bytes-weld.vercel.app",
  },

  {
    name: "Personal Portfolio",
    img: portfolio,
    content:
      "Designed and developed a personal portfolio website using React and Tailwind CSS, showcasing responsive design and a seamless user experience.Integrated EmailJS to facilitate  communication",
    icons: [react, tailwind],
    git: "https://github.com/PartikMalasi/Portfolio",
    link: "https://partik-malasi-portfolio.vercel.app/",
  },

  {
    name: "Nike Clone",
    img: nike,
    content:
      "Successfully replicated Nike's frontend design with React and Tailwind CSS, ensuring responsive and mobile-friendly UI/UX. It is a dynamic website containing modern effects for better user experience.",
    icons: [react, tailwind],
    git: "https://github.com/PartikMalasi/Nike-Clone",
    link: "https://nike-clone-partik.netlify.app/",
  },
  {
    name: "To Do List",
    img: todo,
    content:
      "Built a Node.js and Express-based backend with a dynamic, CRUD-functional to-do list interface using EJS and CSS.Its intuitive interface and dynamic features make it an engaging educational tool.",
    icons: [css, node, express],
    git: "https://github.com/PartikMalasi/To-do-list",
    link: "https://github.com/PartikMalasi/To-do-list",
  },
  {
    name: "The Fitness Catalyst",
    img: fitness,
    content:
      "For all fitness enthusiast, I created a responsive, interactive fitness website , featuring a BMI calculator and dark theme. It includes special plans for all individuals and featuring personalized diet charts.",
    icons: [html, bootstrap, css, js],
    git: "https://github.com/PartikMalasi/The-fitness-Catalyst",
    link: "https://partikmalasi.github.io/The-fitness-Catalyst/",
  },
  {
    name: "Know Your Country",
    img: country,
    content:
      "Displayed fetched information, such as population, flag, and capital, in a organized manner using REST API.Its  interface and dynamic features make it an engaging educational tool for discovering the world.",
    icons: [react, rest, tailwind],
    git: "https://github.com/PartikMalasi/Know-your-country",
    link: "https://know-countries-ok.netlify.app/",
  },
];
export default project;
