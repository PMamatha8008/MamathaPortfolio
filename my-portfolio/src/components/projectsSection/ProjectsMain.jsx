import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "MCV",
    // year: "Mar2022",
    align: "right",
    image: "../../public/images/MCV.png",
    link: "https://dev.d3cvg3d3sr01jx.amplifyapp.com/"
  },
  {
    name: "Kidhood",
    // year: "Sept2022",
    align: "left",
    image: "../../public/images/Kidhood.png",
    link: "https://dev.d3ferxge2alqvl.amplifyapp.com/"
  },
  {
    name: "StacX",
    // year: "Jan2023",
    align: "right",
    image: "../../public/images/StacX.png",
    link: "https://employee-dash-stage.stacx.app/",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
