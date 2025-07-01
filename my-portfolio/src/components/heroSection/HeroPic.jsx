import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
      className="relative h-full flex items-center justify-center"
    >
      {/* Outer glowing background */}
      <div className="absolute -z-10 w-[380px] h-[450px] md:w-[420px] md:h-[500px] rounded-xl bg-gradient-to-tr from-cyan-400 via-purple-500 to-pink-400 opacity-30 blur-2xl animate-pulse" />

      {/* Border frame */}
      <div className="absolute w-[320px] h-[420px] md:w-[360px] md:h-[460px] rounded-xl border-2 border-cyan-500 shadow-[0_0_30px_4px_rgba(0,255,255,0.3)] animate-[pulse_4s_ease-in-out_infinite]" />

      {/* Taller image */}
      <img
        src="/images/Mamatha.png"
        alt="Mamatha Pondara"
        className="w-[320px] h-[420px] md:w-[360px] md:h-[460px] rounded-xl object-cover shadow-lg"
      />
    </motion.div>
  );
};

export default HeroPic;
