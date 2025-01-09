import { FiDownload } from "react-icons/fi";
import { HiMenu } from "react-icons/hi";
import { PiMoonThin } from "react-icons/pi";
import { TiWeatherSunny } from "react-icons/ti";
import { Link, NavLink } from "react-router";

const Navbar = () => {
    
    const navLinks = <>
        <li className="navlink relative"> <NavLink to={"/"}>Home</NavLink> </li>
        <li className="navlink relative"><NavLink to={"/rooms"}>Skills</NavLink></li>
        <li className="navlink relative"><NavLink to={"/my-bookings"}>Experience</NavLink></li>
        <li className="navlink relative"><NavLink to={"/about-us"}>About me</NavLink></li>
        <li className="navlink relative"><NavLink to={"/contact-us"}>Contact</NavLink></li>
    </>
    return (
        <div className="py-3 border-b shadow">
            <div className="max-w-7xl mx-auto px-4 xl:px-0 flex items-center justify-between gap-6">
                {/* Logo  */}
                <div>
                    <Link to={"/"} className=" text-4xl font-bold font-rubik tracking-wider text-primary">Mahadi</Link>
                </div>

                {/* Nav links  */}
                <div className="hidden lg:block flex-1">
                    <ul className="nav-menu flex w-fit mx-auto uppercase items-center text-sm text-secondary-black gap-4 space-x-6 border p-2 px-6 rounded-full border-gray-700 backdrop-blur-xl font-rubik tracking-wider">
                        {navLinks}
                    </ul>
                    
                </div>

                <div className="flex items-center gap-4">
                    <div className="flex">
                        <span><TiWeatherSunny size={24}/></span>
                        <span><PiMoonThin size={24}/></span>
                    </div>
                    <Link to={"/"}><button className="px-5 font-rubik tracking-wide py-2 text-sm bg-primary text-primary-black uppercase font-semibold rounded-full shadow-xl border border-primary hover:bg-secondary-black hover:border-secondary-black duration-500 flex items-center gap-2">Resume <span><FiDownload size={16}/></span></button></Link>
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

