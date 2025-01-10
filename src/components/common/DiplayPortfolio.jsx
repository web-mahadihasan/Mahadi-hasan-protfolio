import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const steps = [
  {
    id: "learn-mate",
    title: "Learn Mate",
    subtitle: "Connecting learners with expert tutors.",
    description: "Learn Mate simplifies learning with easy tutor connections and hassle-free scheduling.",
    techStack: ["React", "Express", "Node", "Firebase", "Framer Motion"],
  },
  {
    id: "portfolio",
    title: "PortFolio",
    subtitle: "Showcasing creativity and innovation.",
    description: "A responsive portfolio showcasing my skills, projects, and developer journey with sleek design and smooth animations.",
    techStack: ["React", "Framer Motion"],
  },
];

function DisplayPortfolio() {
  const [activeStep, setActiveStep] = useState(-1);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const sections = document.querySelectorAll("[data-step]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const step = parseInt(entry.target.getAttribute("data-step") || "0");
            setActiveStep(step);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full text-white relative">
      <div className="relative">
        {steps.map((step, index) => (
          <section
            key={step.id}
            data-step={index}
            className="min-h-[700px] relative flex items-center"
          >
            <div className="absolute inset-y-0 flex items-center">
              <div className="relative h-full">
                <div className="absolute left-[7px] top-0 w-0.5 h-full bg-gray-800" />
                <motion.div 
                  className="absolute left-[7px] top-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"
                  style={{
                    height: useTransform(
                      scrollYProgress,
                      [index / steps.length, (index + 1) / steps.length],
                      ["0%", "100%"]
                    ),
                    originY: 0
                  }}
                />
                <motion.div
                  className="absolute -left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gray-700"
                  style={{
                    backgroundColor: useTransform(
                      scrollYProgress,
                      [index / steps.length, (index + 0.5) / steps.length],
                      ["#1f2937", "rgb(59, 130, 246)"]
                    )
                  }}
                />
                
              </div>
            </div>
            <div className="w-full ml-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: index <= activeStep ? 1 : 0, y: index <= activeStep ? 0 : 20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <h2 className="text-6xl font-bold mb-4">{step.title}</h2>
                <p className="text-xl text-gray-400 mb-6">{step.subtitle}</p>
                <p className="text-gray-400 mb-8">{step.description}</p>
                <div className="space-y-3">
                  <h3 className="text-sm text-gray-500">Tech Used:</h3>
                  <div className="flex flex-wrap gap-2">
                    {step.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-sm bg-gray-800 text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default DisplayPortfolio;

