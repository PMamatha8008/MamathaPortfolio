import { useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import Typed from "typed.js";

const HeroText = () => {
  useEffect(() => {
    const options = {
      strings: ["ReactJS", "NextJS", "Front End", "Web"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    };

    const typed = new Typed(".typing-element", options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      {/* Title with typed text */}
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <h2 className="text-3xl font-bold text-blue-500 sm:text-3xl">
          I'm a{" "}
          <span className="text-teal-300 typing-element" /> Developer
        </h2>
      </motion.div>

      {/* Name */}
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-orange font-bold uppercase"
      >
        Mamatha Pondara
      </motion.h1>

      {/* Description */}
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg mt-4"
      >
        A Passionate Web Developer <br /> with 3 years of experience.
      </motion.p>
    </div>
  );
};

export default HeroText;


// import { motion } from "framer-motion";
// import { fadeIn } from "../../framerMotion/variants";
// import Typed from 'typed.js';

// const HeroText = () => {
// useEffect(() => {
//     const options = {
//       strings: [
//         "ReactJS",
//         "NextJS",
//         "Front End",
//         "Web"
//       ],
//       typeSpeed: 100,
//       backSpeed: 100,
//       backDelay: 1000,
//       loop: true,
//     };

//     const typed = new Typed(".typing-element", options);

//     return () => {
//       typed.destroy();
//     };
//   }, []);

//   return (
//     <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
//       <motion.h2
//         variants={fadeIn("down", 0.2)}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: false, amount: 0 }}
//         className="lg:text-2xl sm:text-xl  uppercase text-lightGrey "
//       >
//         {/* Front-End Web Developer */}
//                   <h2 className="text-3xl font-bold text-blue-500 sm:text-3xl">
//             I'm a{" "}
//             <span className="text-teal-300 typing-element "> </span> Developer
//           </h2>
//           {/* <p className="max-w-md py-4 text-gray-400">
//             I love to work on web applications using technologies like
//             HTML, CSS, JavaScript, ReactJS, NextJS.
//           </p> */}
//       </motion.h2>
//       <motion.h1
//         variants={fadeIn("right", 0.4)}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: false, amount: 0 }}
//         className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-orange font-bold uppercase"
//       >
//         Mamatha Pondara
        
//       </motion.h1>
//       <motion.p
//         variants={fadeIn("up", 0.6)}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: false, amount: 0 }}
//         className="text-lg mt-4"
//       >
//         A Passionate Web Developer <br /> with 3 years of
//         experience.
//       </motion.p>
//     </div>
//   );
// };

// export default HeroText;
