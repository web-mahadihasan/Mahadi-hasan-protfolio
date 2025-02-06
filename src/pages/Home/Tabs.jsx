import { useEffect, useRef, useState } from "react";
import { FaGraduationCap, FaTools, FaUser } from "react-icons/fa";
import { Icon } from "@iconify/react";

const Tabs = ({setTabsBody}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const tabsRef = useRef([]);
    const tabs = [
      { name: "About", icon: "solar:user-bold-duotone" },
      { name: "Education", icon: "mingcute:school-fill" },
      { name: "Skill", icon: "material-symbols:build-circle" },
    ];

  useEffect(() => {
    // Ensure the runner is correctly positioned and sized on initial render
    const runner = document.querySelector(".bg-runner");
    if (tabsRef.current[activeIndex]) {
      runner.style.width = `${tabsRef.current[activeIndex].offsetWidth}px`;
      runner.style.left = `${tabsRef.current[activeIndex].offsetLeft}px`;
    }
  }, [activeIndex]);
  
    const handleClick = (index) => {
      setActiveIndex(index);
      setTabsBody(index)     
    };

    return (
        <div className="tabs">
      {/* Runner element for smooth animation */}
             <div
                 className="bg-runner"
             ></div>
             {tabs.map((tab, index) => (
                <a
                  key={index}
                  href="#"
                  className={`tab font-jost text-dark-black tracking-wide flex items-center gap-2 ${
                    activeIndex === index ? "active" : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(index);
                  }}
                  ref={(el) => (tabsRef.current[index] = el)}
                >
                  <Icon icon={tab.icon} className="text-xl text-dark-black" /> {tab.name}
                </a>
              ))}
         </div>
    );
};

export default Tabs;