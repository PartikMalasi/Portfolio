import { Button } from "@mui/material";
import { FaGithub } from "react-icons/fa";
import { TbLogin2 } from "react-icons/tb";
const ProjectCard = ({ data }) => {
  return (
    <div>
      <link rel="stylesheet" href="/project.css" />
      <div class="project-card-sm">
        <div class="card-border-gradient"></div>
        <div class="card-container flex flex-col gap-3">
          <div class="wrapper  flex gap-4 sm:flex-row flex-col-reverse ">
            <div className="flex flex-col sm:w-[35%]">
              <h1 className="text-2xl font-bold  mb-2">{data.name}</h1>
              <p className="pt-2">{data.content}</p>
            </div>
            <div className="sm:w-[65%]">
              <img className="" src={data.img} alt="" />
            </div>
          </div>
          <div className="sm:flex w-full  sm:justify-between ">
            <div class="tech-stack flex flex-wrap gap-4 sm:mt-4 justify-center ">
              {data.icons.map((i) => {
                return (
                  <img src={i} alt="Tech 1" class="w-8 h-8 object-contain" />
                );
              })}
            </div>
            <div class="tech-stack flex flex-wrap gap-2 mt-4 justify-center sm:mt-3  ">
              <div className="hidden sm:flex items-center">
                <a title="Github" href={data.git}>
                  <FaGithub className="h-8 w-8" />
                </a>
              </div>
              <div className="hidden sm:flex items-center">
                <a title="Live Link" href={data.link}>
                  <TbLogin2 className="h-8 w-8" />
                </a>
              </div>
              <div className="flex sm:hidden items-center">
                <Button variant="outlined" href={data.git}>
                  Github
                </Button>
                <Button variant="outlined" href={data.link}>
                  Hosted Live
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
