import { HiMenu } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { Link, NavLink } from "react-router";

const Navbar = () => {
    const user = false;
    const loginUser = false;

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
                    <Link to={"/"} className="text-red-500"><img src="" alt="Mahadi Hasan" className="h-10 md:h-12"/>Mahadi Hasan</Link>
                </div>

                {/* Nav links  */}
                <div className="hidden lg:block">
                    <ul className="flex uppercase items-center text-sm font-medium text-secondary-black gap-4">
                        {navLinks}
                    </ul>
                </div>

                {/* Action button  */}
                <div className="flex items-center gap-2">
                <Link to={"/"}><button className="px-5 py-1.5 bg-primary text-white rounded shadow-xl border border-primary hover:bg-secondary-black hover:border-secondary-black duration-500 tracking-wide">Download Resume</button></Link>
                    {/* Hamburger  */}
                    <div className="lg:hidden"><HiMenu size={30} /></div>
                    <aside>
                        {/* <MobileMenuAside/> */}
                    </aside>
                </div>
            </div>
            
        </div>
    );
};

export default Navbar;

