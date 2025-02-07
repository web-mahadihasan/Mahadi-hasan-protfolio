import Lottie from "lottie-react";
import { motion } from "motion/react";
import about from "../../assets/image/about1.json";
import aboutSvg from "../../assets/icons/about.svg";
import { Briefcase, Code, Heart, Server } from "lucide-react";
import { IconCloud } from "@/components/ui/interactive-icon-cloud"

const PersonalInfo = () => {
  const slugs = [
    "typescript",
    "javascript",
    "mysql",
    "mongodb",
    "react",
    "html5",
    "nodedotjs",
    "express",
    "nextdotjs",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "redux",
    "postman",
    "shadcnui",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
    "python"
  ]
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
          <div className="relative flex size-full max-w-xl items-center justify-center overflow-hidden rounded-lg  bg-background px-20 pb-20 pt-8 ">
            <IconCloud iconSlugs={slugs} />
          </div>
          </div>
          {/* <img src="https://i.ibb.co.com/cc6pX7b/banner-me.png" alt="" className="w-full max-h-[400px] object-cover z-40"/>
                    <img className="absolute w-full h-full top-0 left-0 z-10 mix-blend-screen bg-[#2b323e] rounded-lg" src="https://triprex.b-cdn.net/wp-content/themes/triprex/assets/img/home2/home2-about-img-bg-vector.png" alt=""/> */}
        </div>
        <div className="flex-1">
          <h3 className="text-3xl font-medium font-raison text-white/80">
            Personal Info
          </h3>
          <p className="font-jost text-lg my-4 text-dark-black max-w-5xl mx-auto">
          Hey there! I&apos;m Mahadi, a passionate{" "}
            <span className="text-main">MERN Stack Developer</span>, who's always excited about diving into new
            web technologies. My journey in the world of coding kicked off with Programming Hero, and since then,
            it&apos;s been an exhilarating ride of constant learning and growth.
          </p>
          <p className="font-jost text-lg my-4 text-dark-black max-w-5xl mx-auto">
            I&apos;m all about creating web applications that not only work smoothly but also look great and provide an
            awesome user experience. My go-to tech stack is MERN (MongoDB, Express.js, React, Node.js and NEXT js), but
            I&apos;m always eager to expand my toolkit. I love the challenge of solving complex problems and turning
            creative ideas into reality through code.
          </p>
          {/* <div className="mt-4 flex items-center">
            <Code className="h-5 w-5 text-gray-400 mr-2" />
            <span className="text-gray-600 dark:text-gray-300">MERN Stack Developer</span>
          </div> */}
          <div className="mt-2 flex items-center">
            <Briefcase className="h-5 w-5 text-main mr-2" />
            <span className="text-main-light/90 font-rubik tracking-wide">Open for Opportunities</span>
          </div>
          <div className="mt-2 flex items-center">
            <Heart className="h-5 w-5 text-main mr-2" />
            <span className="text-main-light/90 font-rubik tracking-wide">
              Enthusiast for Web Technologies & Problem Solving
            </span>
          </div>
          <div className="mt-2 flex items-center">
            <Server className="h-5 w-5 text-main mr-2" />
            <span className="text-main-light/90 font-rubik tracking-wide">
              API Development & Integration Expert
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
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
