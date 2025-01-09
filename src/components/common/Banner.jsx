import { FiDownload } from "react-icons/fi";
import { BsFacebook, BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

const Banner = () => {
    return (
        <div className="bg-[#1f242d] dark:[#1f242d]">
            <div className="max-w-7xl mx-auto px-4 xl:px-0 py-24 flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="flex-1 order-2 lg:order-1">
                    <p className="text-2xl font-jost font-semibold">Hi 👋, I&apos;m Mahadi Hasan  </p>
                    <h1 className="text-6xl flex flex-col gap-2 font-extrabold font-rubik text-primary-black my-8">
                        <span className="text-white">A Creative </span>
                        <span style={{ WebkitTextStroke: '1px #7cf03d', color: 'transparent' }}>Frontend Developer</span>
                    </h1>
                    <p className="font-jost text-xl my-4">A Creative Frontend Developer turning ideas into engaging digital experiences with style and precision. Let’s build something remarkable!</p>
                    <div className="flex items-center gap-6 my-6">
                        {/* <button>Hire Me</button> */}
                        <button className="px-5 font-rubik tracking-wide py-2.5 text-sm bg-transparent border-primary text-primary  uppercase font-semibold rounded-full shadow-xl border hover:bg-primary hover:text-primary-black duration-500 ease-in-out flex items-center gap-2">Hire me <span></span></button>
                        <button className="px-5 box-shadow font-rubik tracking-wide py-2.5 text-sm bg-primary text-primary-black uppercase font-semibold rounded-full shadow-xl border border-primary hover:bg-secondary-black hover:border-secondary-black duration-500 flex items-center gap-2">Download Resume <span><FiDownload size={16}/></span></button>
                    </div>
                    <div className="flex items-center gap-[10px] text-text ">
                        <a className="text-[1.2rem] p-1.5 cursor-pointer group rounded-full hover:text-white hover:bg-primary transition-all duration-300">
                            <BsLinkedin size={22} className=" group-hover:text-gray-100 "/>
                        </a>
                        <a className="text-[1.3rem] p-1.5 cursor-pointer group rounded-full hover:text-white hover:bg-primary  transition-all duration-300">
                            <BsGithub size={22} className="group-hover:text-gray-100"/>
                        </a>
                        <a className="text-[1.2rem] p-1.5 cursor-pointer group rounded-full hover:text-white hover:bg-primary transition-all duration-300">
                            <BsFacebook size={22} className=" group-hover:text-gray-100"/>
                        </a>
                        <a className="text-[1.2rem] group p-1.5 cursor-pointer rounded-full hover:text-white hover:bg-primary transition-all duration-300">
                            <BsTwitter size={22} className=" group-hover:text-gray-100 "/>
                        </a>
                </div>
                </div>
                <div className="flex-1 justify-end w-full order-1 lg:order-2">
                    <div className="w-full h-[400px] md:w-[32vw] md:h-[32vw] bg-[#1f242d] rounded-full p-[5px] img-box relative flex items-center justify-center overflow-hidden">
                        <div className="w-full h-full bg-[#1f242d] rounded-full relative flex justify-center overflow-hidden z-50 border border-[#1f242d]">
                            <img src="https://i.ibb.co.com/YQPxhFr/banner-me1.png" alt="" className="absolute z-50 mix-blend-lighten top-7 block w-[85%] object-cover"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;