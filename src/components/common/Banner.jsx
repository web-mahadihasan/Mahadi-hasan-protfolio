import { FiDownload } from "react-icons/fi";
import { BsFacebook, BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { Link } from "react-router";
import { Typewriter } from 'react-simple-typewriter'

const Banner = () => {
    return (
        <div className="bg-[#1f242d] dark:[#1f242d]">
            <div className="max-w-7xl mx-auto px-4 xl:px-0 py-24 flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="flex-1 order-2 lg:order-1">
                    <p className="text-2xl font-jost font-semibold">Hi 👋, I&apos;m Mahadi Hasan  </p>
                    <h1 className=" flex flex-col gap-2 font-extrabold font-rubik text-primary-black my-8">
                        <span className="text-4xl md:text-5xl text-white">A Creative </span>
                        <span className="text-4xl md:text-5xl lg:text-4xl xl:text-5xl" style={{ WebkitTextStroke: '1px #7cf03d', color: 'transparent' }}>
                        <Typewriter
                            words={['MERN Stack Developer', 'Frontend Developer', 'React Js Developer', 'Web Developer']}
                            loop={5}
                            cursor
                            cursorStyle='|'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                        </span>
                    </h1>
                    <p className="font-jost text-xl my-4">A Creative Frontend Developer turning ideas into engaging digital experiences with style and precision. Let’s build something remarkable!</p>
                    <div className="flex items-center gap-6 my-6">
                        {/* <button>Hire Me</button> */}
                        <button className="px-5 font-rubik tracking-wide py-2.5 text-sm bg-transparent border-primary text-primary  uppercase font-semibold rounded-full shadow-xl border hover:bg-primary hover:text-primary-black duration-500 ease-in-out flex items-center gap-2">Hire me <span></span></button>
                        <Link to={"https://drive.google.com/file/d/1WReb-meGnzGYc-TwJLNVgltSdMIY8DzD/view?usp=sharing"} target="blank"><button className="px-5 box-shadow font-rubik tracking-wide py-2.5 text-sm bg-primary text-primary-black uppercase font-semibold rounded-full shadow-xl border border-primary hover:shadow-none focus:shadow-none duration-500 flex items-center gap-2">Download Resume <span><FiDownload size={16}/></span></button></Link>
                    </div>
                    <div className="flex items-center gap-[10px] text-text ">
                        <a href="https://www.linkedin.com/in/mahadihasan7/" target="blank" className="text-[1.2rem] p-1.5 cursor-pointer group rounded-full hover:text-white hover:bg-primary transition-all duration-300">
                            <BsLinkedin size={22} className=" group-hover:text-gray-100 "/>
                        </a>
                        <a href="https://github.com/web-mahadihasan" target="blank" className="text-[1.3rem] p-1.5 cursor-pointer group rounded-full hover:text-white hover:bg-primary  transition-all duration-300">
                            <BsGithub size={22} className="group-hover:text-gray-100"/>
                        </a>
                        <a href="https://www.facebook.com/mehedi.hasan.0222/" className="text-[1.2rem] p-1.5 cursor-pointer group rounded-full hover:text-white hover:bg-primary transition-all duration-300">
                            <BsFacebook size={22} className=" group-hover:text-gray-100"/>
                        </a>
                        <a href="https://x.com/MeheDiH96935415" target="blank" className="text-[1.2rem] group p-1.5 cursor-pointer rounded-full hover:text-white hover:bg-primary transition-all duration-300">
                            <BsTwitter size={22} className=" group-hover:text-gray-100 "/>
                        </a>
                </div>
                </div>
                <div className="flex-1 flex justify-center lg:justify-end w-full order-1 lg:order-2">
                    <div className="w-full h-[400px] md:w-[50vw] lg:w-[40vw] lg:h-[40vw] xl:w-[28vw] xl:h-[28vw] bg-[#1f242d] rounded-full p-[5px] img-box relative flex items-center justify-center overflow-hidden">
                        <div className="w-full h-full bg-[#1f242d] rounded-full relative flex justify-center overflow-hidden z-40 border border-[#1f242d]">
                            <img src="https://i.ibb.co.com/YQPxhFr/banner-me1.png" alt="" className="absolute z-50 mix-blend-lighten top-7 block w-[85%] object-cover"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;