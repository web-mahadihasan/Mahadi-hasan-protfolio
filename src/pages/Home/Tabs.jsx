import { useEffect, useRef, useState } from "react";

const Tabs = ({setTabsBody}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const tabsRef = useRef([]);

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
             {["About", "Education", "Skill"].map((tab, index) => (
                 <a
                 key={index}
                 href="#"
                 className={`tab font-jost text-dark-black tracking-wide ${activeIndex === index ? "active" : ""}`}
                 onClick={(e) => {
                     e.preventDefault();
                     handleClick(index);
                 }}
                 ref={(el) => (tabsRef.current[index] = el)}
                 >
                 {tab}
                 </a>
             ))}
         </div>
    );
};

export default Tabs;