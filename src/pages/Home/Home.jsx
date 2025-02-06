import Banner from "../../components/common/Banner";
import Tabs from "./Tabs";
import { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import Education from "./Education";
import MySkills from "./MySkills";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import ProtfolioCarousel from "../Portfolio/ProtfolioCarousel";
import { MdOutlineExplore } from "react-icons/md";
import UcommingProject from "../../components/common/UcommingProject";
import { useLoaderData } from "react-router";
import ContactForm from "../../components/common/ContactForm";
import { RiMailSendLine } from "react-icons/ri";

const Home = () => {
  const [tabsBody, setTabsBody] = useState(0);
  const { upcommingProject } = useLoaderData();
  return (
    <div>
      <Banner />
      {/* About me section  */}
      <section id="skill" className="max-w-7xl mx-auto px-4 xl:px-0 my-24">
        <div className="text-center ">
          <h4 className="text-lg text-main my-3 mx-auto font-jost py-1 px-5 border-2 w-fit rounded-full border-gray-700">
            About me
          </h4>
          <h2 className="text-4xl font-rubik text-white/85 font-semibold tracking-wide">
            Explorer the creativity & more
          </h2>
          <p className="font-rubik mt-6 max-w-5xl mx-auto text-lg text-dark-black">
            Welcome to my digital space! I am Mahadi Hasan, a Frontend Developer
            with a deep passion for crafting intuitive and visually stunning web
            experiences. I’m always open to new opportunities, collaborations,
            and conversations. Whether you have a project in mind or just want
            to connect, feel free to reach out.
          </p>
          <p className="font-rubik text-lg text-dark-black max-w-5xl mx-auto">
            Let&apos;s create something extraordinary together
          </p>
          <div className="max-w-md mx-auto border py-1.5 px-1.5 bg-[#000]/90 border-[#212121] my-6 rounded-lg">
            <Tabs setTabsBody={setTabsBody} />
          </div>
        </div>
        <div>
          {tabsBody === 0 && <PersonalInfo />}
          {tabsBody === 1 && <Education />}
          {tabsBody === 2 && <MySkills />}
        </div>
      </section>

      {/* Experience Section  */}
      <section id="experience" className="max-w-7xl mx-auto px-4 xl:px-0 my-24">
        <h4 className="text-base text-main my-3 font-jost py-1 px-5 border-2 w-fit rounded-full border-gray-700">
          Experience
        </h4>
        <h3 className="text-2xl md:text-3xl font-raison font-medium my-4 text-white/75 flex items-center gap-2">
          <svg
            aria-hidden="true"
            className="e-font-icon-svg e-fas-university"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            fill="#7cf03d"
            width={"36px"}
          >
            <path d="M496 128v16a8 8 0 0 1-8 8h-24v12c0 6.627-5.373 12-12 12H60c-6.627 0-12-5.373-12-12v-12H24a8 8 0 0 1-8-8v-16a8 8 0 0 1 4.941-7.392l232-88a7.996 7.996 0 0 1 6.118 0l232 88A8 8 0 0 1 496 128zm-24 304H40c-13.255 0-24 10.745-24 24v16a8 8 0 0 0 8 8h464a8 8 0 0 0 8-8v-16c0-13.255-10.745-24-24-24zM96 192v192H60c-6.627 0-12 5.373-12 12v20h416v-20c0-6.627-5.373-12-12-12h-36V192h-64v192h-64V192h-64v192h-64V192H96z"></path>
          </svg>
          My <span className="text-main">Experience</span> Expedition
        </h3>
        <p className="font-jost text-lg my-8 text-dark-black max-w-3xl">
          Embark on a journey through my professional growth, showcasing the
          skills, achievements, and milestones that define my career path.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-16">
          <div className="flex items-center justify-between p-6 experience-border-left relative">
            <div className="flex items-center gap-4">
              <img
                className="rounded-full w-20 h-20"
                src="https://i.ibb.co.com/DVtFRt1/includework-logo-e-1744243200-v-beta-t-p0on26hds-VZG2-Hu7ue-Ghw8-PYJWNd-FEeu-WXBHfhe-ISl-E.jpg"
                alt=""
              />
              <div>
                <h3 className="text-xl md:text-2xl my-2 font-rubik font-semibold text-white/90">
                  Include Work
                </h3>
                <p className="text-base font-medium text-dark-black font-jost">
                  Web Recharger / Data Analyst
                </p>
              </div>
            </div>
            <div>
              <h5 className="text-lg md:text-xl tracking-wide my-2 font-rubik font-semibold text-white/90">
                1.3 Years
              </h5>
              <p className="text-base font-medium text-dark-black font-jost">
                May 2023 - Jul 2024
              </p>
            </div>
          </div>
          <div className="flex items-center p-6 justify-between experience-border-right relative">
            <div className="flex items-center gap-4">
              <img
                className="rounded-full w-20 h-20"
                src="https://i.ibb.co.com/RP04430/intelligent-image-management-logo-e-1744243200-v-beta-t-vp3a-QV7m-Nt5-Nu-vs-BMr8s-Qqk-LJSq-Rnw-Tfr-G.jpg"
                alt=""
              />
              <div>
                <h3 className="text-xl md:text-2xl my-2 font-rubik font-semibold text-white/90">
                  IIML
                </h3>
                <p className="text-base font-medium text-dark-black font-jost">
                  Data Analyst
                </p>
              </div>
            </div>
            <div>
              <h5 className="text-lg md:text-xl tracking-wide my-2 font-rubik font-semibold text-white/90">
                4.3 Years
              </h5>
              <p className="text-base font-medium text-dark-black font-jost">
                Feb 2019 - Apr 2023
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project sectiono  */}
      <section id="project" className="max-w-7xl mx-auto px-4 xl:px-0">
        <h4 className="text-base text-main my-3 font-jost py-1 px-5 border-2 w-fit rounded-full border-gray-700">
          Project
        </h4>
        <h3 className="text-2xl md:text-3xl font-raison font-medium my-4 text-white/75 flex items-center gap-2">
          <AiOutlineFundProjectionScreen className="text-main" />
          Innovative Project <span className="text-main">Portfolio</span>
        </h3>
        <p className="font-jost text-lg my-4 text-dark-black max-w-3xl">
          Discover a showcase of my innovative projects, reflecting my expertise
          in web development, creative problem-solving, and delivering impactful
          solutions that combine design and functionality seamlessly.
        </p>
        <div>
          {/* <ProjectDisplay/> */}
          <ProtfolioCarousel />
        </div>
      </section>

      {/* Upcomming Project  */}
      <section className="max-w-7xl mx-auto px-4 xl:px-0 my-24">
        <div className="max-w-2xl ">
          <h4 className="text-base  text-main my-3 font-jost py-1 px-5 border-2 w-fit rounded-full border-gray-700">
            Upcomming Project
          </h4>
          <h3 className="text-2xl md:text-3xl font-raison font-medium my-4 text-white/75 flex items-center gap-2">
            <MdOutlineExplore className="text-main" />
            What’s Coming Next
          </h3>
          <p className="font-jost text-lg my-4 text-dark-black max-w-3xl">
            Discover a showcase of my innovative projects, reflecting my
            expertise in web development, creative problem-solving, and
            delivering impactful solutions that combine design and functionality
            seamlessly.
          </p>
        </div>
        <div className="space-y-10">
          {upcommingProject?.map((project, idx) => (
            <UcommingProject key={idx} projectData={project} idx={idx} />
          ))}
        </div>
      </section>

      {/* Contact section  */}
      <section id="contact" className="max-w-7xl mx-auto px-4 xl:px-0 my-24">
        <div className="max-w-2xl mx-auto text-center">
          <h4 className="text-base mx-auto text-center text-main my-3 font-jost py-1 px-5 border-2 w-fit rounded-full border-gray-700">
            Contact
          </h4>
          <h3 className="text-2xl mx-auto text-center justify-center  md:text-3xl font-raison font-medium my-4 text-white/75 flex items-center gap-2">
            <RiMailSendLine className="text-main" />
            Get in Touch
          </h3>
          <p className="font-jost text-lg my-4 text-dark-black max-w-3xl">
            Feel free to drop me a message anytime. I’d love to hear your ideas,
            questions, or feedback!
          </p>
        </div>
        <div>
          <ContactForm />
        </div>
      </section>

      <section></section>
    </div>
  );
};

export default Home;
