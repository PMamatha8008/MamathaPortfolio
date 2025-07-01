import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn, FaUser } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <div className="text-2xl h-12 w-12 border border-orange text-orange rounded-full p-3 flex items-center justify-center">
            <a
        href="/Mamatha_Pondara_Frontend_Developer.pdf"
        download
        target="_blank"
        rel="noopener noreferrer"
        className="text-xl hover:text-[#38bdf8] transition-all duration-300"
        title="Download Resume"
      >
        <FaUser />
      </a>
      </div>
      <SingleContactSocial link="https://www.linkedin.com/in/mamatha-pondara/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/PMamatha8008/" Icon={FiGithub} />
      {/* <SingleContactSocial link="#" Icon={FaInstagram} /> */}
    </div>
  );
};

export default ContactSocial;
