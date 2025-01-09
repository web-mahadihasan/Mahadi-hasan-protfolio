import { motion } from "motion/react";

const Education = () => {
    return (
        <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}  
        exit={{ opacity: 0, y: 100 }}   
        transition={{ duration: 0.5 }} 
        >
            {/* <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid max-w-2xl mx-auto">
                    <div className="flex">
                    <div className="flex flex-col items-center mr-6">
                        <div className="w-px h-10 opacity-0 sm:h-full" />
                        <div>
                        <div className="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full">
                            1
                        </div>
                        </div>
                        <div className="w-px h-full bg-gray-300" />
                    </div>
                    <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
                        <div className="mt-6">
                            <h4 className="text-xl font-semibold font-rubik sm:text-base">
                                Bachelor of Science(BSc)
                            </h4>
                            <h4 className="text-xl font-semibold sm:text-base font-jost">
                                Prime University
                            </h4>
                            <p className="text-sm text-gray-600 font-jost">2019 - 2023</p>
                            <p className="text-sm text-gray-700">
                                Successfully completed a Bachelor of Science degree, focusing on Computer Science and Engineering. 
                                Gained in-depth knowledge and practical experience in key areas such as programming, data structures & Algorithm, software engineering, system design.
                            </p>
                            <p>Key Achievements:</p>
                            <ul className="list-disc list-inside ml-6 mb-8">
                                <li>Consistently maintained strong academic performance.</li>
                                <li>Developed a solid foundation in problem-solving, critical thinking, and teamwork.</li>
                            </ul>
                        </div>
                    </div>
                    </div>

                    <div className="flex">
                    <div className="flex flex-col items-center mr-6">
                        <div className="w-px h-10 bg-gray-300 sm:h-full" />
                        <div>
                        <div className="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full">
                            2
                        </div>
                        </div>
                        <div className="w-px h-full bg-gray-300" />
                    </div>
                    <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
                        <div>
                        <p className="text-xl font-semibold sm:text-base">Heart attack</p>
                        <p className="text-sm text-gray-700">
                            A flower in my garden, a mystery in my panties. Heart attack
                            never stopped old Big Bear. I didn't even know we were calling
                            him Big Bear.
                        </p>
                        </div>
                    </div>
                    </div>

                </div>
            </div>             */}
            
            <section className="text-gray-600 body-font">
                <div className="max-w-2xl mx-auto text-center mt-16">
                    <h3 className="text-3xl font-rubik font-medium my-4 text-white/65">My Educational Journey</h3>
                    <p className="text-lg mb-6 font-jost text-dark-black">A summary of my formal education and key experiences that have shaped my knowledge in technology and development, fueling my ongoing growth and passion for learning.</p>
                </div>
                <div className="max-w-5xl px-5 py-24 mx-auto flex flex-wrap">
                    <div className=" w-full">
                    <div className="">
                        <div className="flex relative pb-12">
                        <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                            <div className="h-full w-[2px] bg-gray-200 pointer-events-none"></div>
                        </div>
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary inline-flex items-center justify-center text-black font-bold font-jost relative z-10">
                            1
                        </div>
                        <div className="flex-grow pl-4">
                            <h4 className="text-2xl tracking-wide font-semibold font-rubik sm:text-base text-white/80">
                                Bachelor of Science(BSc)
                            </h4>
                            <h4 className="text-xl font-semibold sm:text-base font-jost text-white/65">
                                Prime University
                            </h4>
                            <p className="text-sm text-gray-600 font-jost">2019 - 2023</p>
                            <p className="text-lg font-jost text-dark-black/85 my-4 max-w-2xl">
                                Successfully completed a Bachelor of Science degree, focusing on Computer Science and Engineering. 
                                Gained in-depth knowledge and practical experience in key areas such as programming, data structures & Algorithm, software engineering, system design.
                            </p>
                            <p className="text-xl font-jost text-dark-black/85 my-4">Key Achievements:</p>
                            <ul className="list-disc list-inside ml-6 mb-8 text-lg font-jost text-dark-black/85 my-4">
                                <li>Consistently maintained strong academic performance.</li>
                                <li>Developed a solid foundation in problem-solving, critical thinking, and teamwork.</li>
                            </ul>                        
                        </div>
                        </div>
                        <div className="flex relative pb-12">
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
        </motion.div>
    );
};

export default Education;

{/* <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className=" w-full">
      <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
            1
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 1</h2>
            <p className="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
          </div>
        </div>
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
            2
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 2</h2>
            <p className="leading-relaxed">Vice migas literally kitsch +1 pok pok. Truffaut hot chicken slow-carb health goth, vape typewriter.</p>
          </div>
        </div>

      </div>
    </div>
  </div>
</section> */}