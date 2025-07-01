const SingleContactSocial = ({ Icon, link }) => {
  return (
    <div className="text-2xl h-12 w-12 border border-orange text-orange rounded-full p-3 flex items-center justify-center ">
      <a href={link} className="cursor-pointer hover:text-[#3283a5] transition-all duration-300">
        <Icon />
      </a>
    </div>
  );
};

export default SingleContactSocial;
