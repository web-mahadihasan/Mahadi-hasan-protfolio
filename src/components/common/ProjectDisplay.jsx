import DisplayPortfolio from "./DiplayPortfolio";

const projects = [
    {
      id: 1,
      title: "Portfolio",
      techUsed: ["Next.js", "Tailwind CSS"],
      description:
        "A responsive portfolio showcasing my skills, projects, and developer journey with sleek design and smooth animations.",
      imageUrl: "/path-to-your-image1.jpg",
    },
    {
      id: 2,
      title: "Learn Mate",
      techUsed: ["React", "Node.js", "Express", "MongoDB"],
      description:
        "Learn Mate simplifies learning with easy tutor connections and hassle-free scheduling.",
      imageUrl: "/path-to-your-image2.jpg",
    },
    // Add more projects here
  ];
  
  const ProjectDisplay = () => {
    return (
      <section className="text-gray-600 body-font">
        <div>
            <DisplayPortfolio/>
        </div>
                      <div className="max-w-7xl px-4 xl:px-0 my-12 mx-auto flex flex-wrap">
                          <div className=" w-full">
                          <div className="">
                              <div className="flex relative items-center pb-12">
                              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                  <div className="h-full w-[2px] bg-gray-600 pointer-events-none"></div>
                              </div>
                              <div className="flex-shrink-0 w-10 h-10 bg-[#1D232A] rounded-full  inline-flex items-center justify-center text-black font-bold font-jost relative z-10">
                                  <div className="h-5 w-5 rounded-full bg-[#2b323e] border border-white/15"></div>
                              </div>
                              <div className="flex-grow pl-4 grid grid-cols-3 items-center justify-center max-h-[320px] gap-6">
                                <div className="items-start">
                                    <h4 className="text-[40px] tracking-wide font-semibold font-jost text-white/75">
                                        Stay Room
                                    </h4>
                                   <div>
                                        <p>Tech Use: </p>
                                   </div>
                                   <p>A responsive portfolio showcasing my skills, projects, and developer journey with sleek design and smooth animations.</p>
                                   <p>View Project</p>
                                </div>
                                <div className="col-span-2">
                                        <p>Connecting learners with expert tutors.</p>
                                    <div className="grid gap-4 grid-cols-2 items-center justify-between">
                                        <div>
                                            <img className="w-full h-full max-h-[300px]" src="https://i.ibb.co.com/Mg3y63m/room1.png" alt="" />
                                        </div>
                                        <div>
                                            <p></p>
                                            <img className="w-full h-full max-h-[300px]" src="https://i.ibb.co.com/NpxC2sh/fluent1.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                                                         
                              </div>
                              </div>
                              <div className="flex relative">
                              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                  <div className="h-full w-[2px] bg-gray-200 pointer-events-none"></div>
                              </div>
                              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary inline-flex items-center justify-center text-black font-bold font-jost relative z-10">
                                  2
                              </div>
                              <div className="flex-grow pl-4">
                              <h4 className="text-2xl tracking-wide font-semibold font-rubik sm:text-base text-white/80">
                                      Higher Secondary Education(HSC)
                                  </h4>
                                  <h4 className="text-xl font-semibold sm:text-base font-jost text-white/65">
                                      Fulbari Degree College
                                  </h4>
                                  <p className="text-sm text-gray-600 font-jost">2014 - 2016</p>
                                  <p className="text-lg font-jost text-dark-black/85 my-4 max-w-2xl">
                                      Completed Higher Secondary Education with a focus on Science. 
                                      Gained foundational knowledge in subjects such as Physics, Chemistry, Mathematics, Biology, etc. laying the groundwork for further academic and professional pursuits.
                                  </p>                       
                              </div>
                              </div>
      
                          </div>
                          </div>
                      </div>
                  </section>
    );
}

export default ProjectDisplay