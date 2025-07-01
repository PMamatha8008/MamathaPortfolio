import React, { Fragment } from "react";
import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Front-End Developer(Intern)",
    company: "Metrolabs Services",
    date: "2021 - 2022",
    responsibilities: [
      "Built reusable and responsive UI components.",
      "Worked with the team to integrate REST APIs.",
      "Suggested ideas to enhance user experience.",
    ],
  },
  {
    job: "Front-End Developer",
    company: "Cintap",
    date: "2022 -2023",
    responsibilities: [
      "Built UI screens using React and Material UI.",
      "Integrated APIs and collaborated with backend team.",
      "Developed responsive and reusable components.",
      "Improved web performance and page speed.",
    ],
  },
  {
    job: "Front-End Developer",
    company: "Apaar Software",
    date: "2023 - Present",
    responsibilities: [
      "Built modular UIs with React and Tailwind CSS.",
      "Integrated APIs and handled state with Redux.",
      "Optimized performance with lazy loading.",
      "Worked closely with teams to deliver clean and scalable solutions.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <Fragment key={index}>
            <SingleExperience experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </Fragment>
        );
      })}
    </div>
  );
};

export default AllExperiences;
