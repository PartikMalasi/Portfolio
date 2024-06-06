import { Button } from "@mui/material";
const ProjectCard = ({ data }) => {
  return (
    <div>
      <link rel="stylesheet" href="/project.css" />
      <div class="project-card-sm">
        <div class="card-border-gradient"></div>
        <div class="card-container">
          <img className="" src={data.img} alt="" />
          <div class="wrapper">
            <h1 className="text-2xl font-bold  mb-2">{data.name}</h1>

            <p>{data.content}</p>
            <div class="tech-stack flex flex-wrap gap-4 mt-4 justify-center sm:justify-start">
              {data.icons.map((i) => {
                return (
                  <img src={i} alt="Tech 1" class="w-8 h-8 object-contain" />
                );
              })}
            </div>
            <div class="tech-stack flex flex-wrap gap-4 mt-4 justify-center sm:justify-start">
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
  );
};
export default ProjectCard;
