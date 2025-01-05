import { FiDownload } from "react-icons/fi";
import { HiMenu } from "react-icons/hi";
import { PiMoonThin } from "react-icons/pi";
import { TiWeatherSunny } from "react-icons/ti";
import { Link, NavLink } from "react-router";

const Navbar = () => {

    const navLinks = <>
        <li> <NavLink to={"/"}>Home</NavLink> </li>
        <li><NavLink to={"/rooms"}>Skills</NavLink></li>
        <li><NavLink to={"/my-bookings"}>Experience</NavLink></li>
        <li><NavLink to={"/about-us"}>About me</NavLink></li>
        <li><NavLink to={"/contact-us"}>Contact</NavLink></li>
    </>
    return (
        <div className="py-3 border-b shadow">
            <div className="container mx-auto px-4 xl:px-0 flex items-center justify-between">
                {/* Logo  */}
                <div>
                    <Link to={"/"} className=" text-3xl font-bold">Mahadi</Link>
                </div>

                {/* Nav links  */}
                <div className="hidden lg:block">
                    <ul className="flex uppercase items-center text-sm font-medium text-secondary-black gap-4 space-x-6 border p-2 px-6 rounded-full">
                        {navLinks}
                    </ul>
                    
                </div>

                <div className="flex items-center gap-4">
                    <div className="flex">
                        <span><TiWeatherSunny size={24}/></span>
                        <span><PiMoonThin size={24}/></span>
                    </div>
                    <Link to={"/"}><button className="px-5 py-1.5 bg-primary text-white rounded-full shadow-xl border border-primary hover:bg-secondary-black hover:border-secondary-black duration-500 tracking-wide flex items-center gap-2">Resume <span><FiDownload /></span></button></Link>
                    <div className="lg:hidden"><HiMenu size={30} /></div>
                    <aside>
                        {/* <MobileMenuAside/> */}
                    </aside>
                </div>
                {/* Action button  */}
            </div>
            
        </div>
    );
};

export default Navbar;

