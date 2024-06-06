import nike from "../assets/project/nike.png";
import todo from "../assets/project/todo.png";
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
    name: "Nike Clone",
    img: nike,
    content:
      "Successfully replicated Nike's frontend design with React and Tailwind CSS, ensuring responsive and mobile-friendly UI/UX.",
    icons: [react, tailwind],
    git: "https://github.com/PartikMalasi/Nike-Clone",
    link: "https://nike-clone-partik.netlify.app/",
  },
  {
    name: "To Do List",
    img: todo,
    content:
      "Built a Node.js and Express-based backend with a dynamic, CRUD-functional to-do list interface using EJS and CSS.",
    icons: [css, node, express],
    git: "https://github.com/PartikMalasi/To-do-list",
    link: "https://github.com/PartikMalasi/To-do-list",
  },
  {
    name: "Know Your Country",
    img: country,
    content:
      "Displayed fetched information, such as population, flag, and capital, in a visually appealing and organized manner using REST API.",
    icons: [react, rest, tailwind],
    git: "https://github.com/PartikMalasi/Know-your-country",
    link: "https://know-countries-ok.netlify.app/",
  },
  {
    name: "The Fitness Catalyst",
    img: fitness,
    content:
      "Created a responsive, interactive fitness website , featuring a BMI calculator and dark theme.",
    icons: [html, bootstrap, css, js],
    git: "https://github.com/PartikMalasi/The-fitness-Catalyst",
    link: "https://partikmalasi.github.io/The-fitness-Catalyst/",
  },
];
export default project;
