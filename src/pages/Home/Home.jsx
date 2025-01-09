import {  Outlet } from "react-router";
import Banner from "../../components/common/Banner";
// import PersonalInfo from "./PersonalInfo";
import Tabs from "./Tabs";
import { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import Education from "./Education";
import Skills from "./Skills";

const Home = () => {
    const [tabsBody, setTabsBody] = useState(0)
    return (
        <div>
            <Banner/>
            {/* About me section  */}
            <section className="max-w-7xl mx-auto px-4 xl:px-0 my-24">
                <div className="text-center ">
                    <h4 className="text-lg text-primary my-3 mx-auto font-jost py-1 px-5 border-2 w-fit rounded-full border-gray-700">About me</h4>
                    <h2 className="text-4xl font-rubik text-white/85 font-semibold tracking-wide">Explorer the creativity & more</h2>
                    <p className="font-rubik mt-6 max-w-5xl mx-auto text-lg ">Welcome to my digital space!
                    I am Mahadi Hasan, a Frontend Developer with a deep passion for crafting intuitive and visually stunning web experiences. I’m always open to new opportunities, collaborations, and conversations. Whether you have a project in mind or just want to connect, feel free to reach out.</p>
                    <p className="font-rubik text-lg text-dark-black max-w-5xl mx-auto">Let&apos;s create something extraordinary together</p>
                    <div className="max-w-md mx-auto border py-1.5 px-1.5 bg-[#000]/90 border-[#212121] my-6 rounded-lg">
                        <Tabs setTabsBody={setTabsBody}/>
                    </div>
                    
                </div>
                <div>
                    {tabsBody ===  0 && <PersonalInfo/>}
                    {tabsBody ===  1 && <Education/>}
                    {tabsBody ===  2 && <Skills/>}
                </div>
                
            </section>
        </div>
    );
};

export default Home;