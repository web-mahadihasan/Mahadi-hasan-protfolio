import { BsFacebook, BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="w-full h-24 border-t border-gray-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 xl:px-0 flex items-center justify-between py-4 flex-wrap gap-6">
        <div>
          <p className="font-jost text-lg text-dark-black">
            {" "}
            &copy; 2024 - All right & reserved -{" "}
            <span className="py px-4 text-base border border-white/65 rounded-full text-white/80">
              <a href="https://github.com/web-mahadihasan" target="blank">
                @Mahadi
              </a>
              
            </span>
          </p>
          
        </div>
        <div>
          <p className="font-rubik text-lg text-dark-black">
            {" "}
            Made by ❤️{" "}
            <a
              href="https://www.linkedin.com/in/mahadihasan7/"
              target="blank"
              className="text-main"
            >
              Mahadi Hasan
            </a>{" "}
          </p>
        </div>
        <div className="flex items-center gap-[10px] text-text ">
          <a
            href="https://www.linkedin.com/in/mahadihasan7/"
            target="blank"
            className="text-[1.2rem] p-1.5 cursor-pointer group rounded-full hover:text-white hover:bg-main transition-all duration-300"
          >
            <BsLinkedin size={22} className=" group-hover:text-gray-100 " />
          </a>
          <a
            href="https://github.com/web-mahadihasan"
            target="blank"
            className="text-[1.3rem] p-1.5 cursor-pointer group rounded-full hover:text-white hover:bg-main  transition-all duration-300"
          >
            <BsGithub size={22} className="group-hover:text-gray-100" />
          </a>
          <a
            href="https://www.facebook.com/mehedi.hasan.0222/"
            target="blank"
            className="text-[1.2rem] p-1.5 cursor-pointer group rounded-full hover:text-white hover:bg-main transition-all duration-300"
          >
            <BsFacebook size={22} className=" group-hover:text-gray-100" />
          </a>
          <a
            href="https://x.com/MeheDiH96935415"
            target="blank"
            className="text-[1.2rem] group p-1.5 cursor-pointer rounded-full hover:text-white hover:bg-main transition-all duration-300"
          >
            <BsTwitter size={22} className=" group-hover:text-gray-100 " />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
