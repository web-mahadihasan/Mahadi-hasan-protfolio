import Lottie from "lottie-react";
import { motion } from "motion/react";
import { BsFacebook, BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import about from "../../assets/image/about1.json";
import aboutSvg from "../../assets/icons/about.svg";

const PersonalInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
      className="bg-[#2b323e] p-8 rounded-lg shadow-lg backdrop-blur-2xl mt-16"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 min-h-[400px]">
        <div className="flex-1 relative h-full">
          {/* <img src={aboutSvg} alt="" className="mx-auto"/> */}
          <div className="h-full overflow-hidden">
            <Lottie
              animationData={about}
              loop={true}
              className="h-full max-h-[400px] w-full object-cover scale-125"
            />
          </div>
          {/* <img src="https://i.ibb.co.com/cc6pX7b/banner-me.png" alt="" className="w-full max-h-[400px] object-cover z-40"/>
                    <img className="absolute w-full h-full top-0 left-0 z-10 mix-blend-screen bg-[#2b323e] rounded-lg" src="https://triprex.b-cdn.net/wp-content/themes/triprex/assets/img/home2/home2-about-img-bg-vector.png" alt=""/> */}
        </div>
        <div className="flex-1">
          <h3 className="text-3xl font-medium font-raison text-white/80">
            Personal Info
          </h3>
          <p className="font-jost text-lg my-4 text-dark-black max-w-5xl mx-auto">
            As a professional{" "}
            <span className="text-main">MERN Stack Developer</span>, I have
            acquired the skills and knowledge necessary to make your project a
            success. I enjoy every step of the design process, from discussion
            and collaboration.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-[#1f242d] rounded-md">
              <p className="font-rubik text-lg text-dark-black">Email</p>
              <p className="font-jost text-lg tracking-wide text-white/75">
                mehedihasanmilu7@gmail.com
              </p>
            </div>
            <div className="p-4 bg-[#1f242d] rounded-md">
              <p className="font-rubik text-lg text-dark-black">
                Phone/WhatsApp
              </p>
              <p className="font-jost text-lg tracking-wide text-white/75">
                +8801794943980
              </p>
            </div>
            <div className="p-4 bg-[#1f242d] rounded-md">
              <p className="font-rubik text-lg text-dark-black">Address</p>
              <p className="font-jost text-lg tracking-wide text-white/75">
                Rangpur, Dhaka Bangladesh
              </p>
            </div>
            <div className="p-4 bg-[#1f242d] rounded-md">
              <p className="font-rubik text-lg text-dark-black">Github</p>
              <a
                href="https://github.com/web-mahadihasan"
                target="blank"
                className="font-jost text-lg tracking-wide text-white/75"
              >
                github.com/web-mahadihasan
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PersonalInfo;
