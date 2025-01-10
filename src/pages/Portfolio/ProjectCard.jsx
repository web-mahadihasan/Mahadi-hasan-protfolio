import { useRef, useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { HiMiniArrowRight } from "react-icons/hi2";
import "../../components/common/skill.css"
import { div } from "framer-motion/client";

const ProjectCard = ({ projectData, idx }) => {
  const imageRef = useRef(null);
  const [scrollDistance, setScrollDistance] = useState(0);

  const { name, des, img, liveLink, githubRepo, tech } = projectData || {};
  const color = '#4A8C44'
  // Calculate scroll distance when the image is fully loaded
  const handleImageLoad = () => {
    const imageElement = imageRef.current;
    if (imageElement) {
      const imageHeight = imageElement.offsetHeight;
      const containerHeight = 400; // container height we set
      const distanceToScroll = imageHeight - containerHeight;

      // Scroll only if the image is taller than the container
      setScrollDistance(distanceToScroll > 0 ? distanceToScroll : 0);
    }
  };

  return (
    <div className="max-w-7xl mx-auto pt-10 px-4 xl:px-0">
      <div className=" media-object "
            style={{
                "--color2": color,
                "--color3": color,
              }}
        >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center h-full lg:max-h-[500px] p-6 rounded-lg porfolioCarousel-shadow bg-[#1f242d]">
        {/* Left Section */}
        <div className="space-y-6 order-2 md:order-1">
          <h1 className="text-6xl flex flex-col gap-2 font-semibold font-rubik text-primary-black my-8">
            <span
              style={{ WebkitTextStroke: "1px #7cf03d", color: "transparent" }}
              className="tracking-wider"
            >
              0{idx +1}
            </span>
          </h1>
          <h2 className="text-3xl lg:text-5xl font-bold bg-gradient-to-br from-white via-white/70 to-white/50 bg-clip-text text-transparent ">
            {name}
          </h2>
          <p className="text-lg font-normal text-dark-black font-jost">{des}</p>
          <div className="flex items-center gap-4">
            <h4 className="text-lg font-medium font-jost">Tech Use:</h4>
            
            {
              tech && tech.map((item, idx) => (
                <svg
                  key={idx}
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  role="img"
                  viewBox={item?.viewBox}
                  height="28"
                  width="28"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    color: item?.color,
                    zIndex: "40",
                  }}
                >
                  <path d={item?.icon}></path>
                </svg>
              ))
            }
            
          </div>
          <div className="flex items-center space-x-6">
            <a
              href={liveLink}
              target="blank"
              className="flex items-center justify-center bg-gray-800 text-green-400 rounded-full hover:bg-green-500 hover:text-white transition"
            >
              <div className="group w-48 rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800">
                <div
                  className="min-w-full animate-shimmer bg-clip-text bg-no-repeat [background-position:0_0] [background-size:var(--shimmer-width)_100%] [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite] bg-gradient-to-r from-transparent via-black/80 via-50% to-transparent dark:via-white/80"
                  style={{ "--shimmer-width": "70px", "--shimmer-height": "50px" }}
                >
                  <p className="mx-auto py-1.5  text-neutral-600/70 dark:text-neutral-400/70  flex items-center justify-center transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                    <span className="">✨ View Project</span>
                    <HiMiniArrowRight />
                  </p>
                </div>
              </div>
            </a>
            <a
              href={githubRepo}
              target="blank"
              className="w-12 h-12 flex items-center border border-primary/15 justify-center bg-gray-800 text-green-400 rounded-full hover:bg-green-500 hover:text-white transition"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>

        {/* Right Section (Image with Scroll on Hover) */}
        <div className={`h-[400px] overflow-hidden rounded-lg group cursor-pointer order-1 md:order-2`}>
            {
                img && <><img
                ref={imageRef}
                src={img}
                alt="Project Screenshot"
                className="h-auto w-full object-cover transform transition-transform duration-[4s] ease-in-out max-h-400px"
                onLoad={handleImageLoad} 
                />
                <style jsx>{`
                .group:hover img {
                    transform: translateY(-${scrollDistance}px); 
                }
                `}</style></>
            } 
          </div>
      

      </div>
      </div>
    </div>
  );
};

export default ProjectCard;
