import { RiArrowRightSLine, RiCloseLargeLine } from "react-icons/ri";
// import logo from "../../../assets/images/stayroom.png"
import { Link } from "react-router";
import { LuPhoneCall } from "react-icons/lu";

const MobileMenuAside = ({setOpenMenu, openMenu}) => {


    const navLinks = [
        { "path": "/", "element": "Home" },
        { "path": "#skill", "element": "Skills" },
        { "path": "#experience", "element": "Experience" },
        { "path": "#project", "element": "Project" },
        { "path": "#contact", "element": "Contact" }
      ]
    return (
        <div className={`absolute lg:hidden z-40 duration-700 min-h-[calc(100vh-50px)] ${ openMenu? "top-0 left-0 block" : "-left-[800px] top-0"}`}>
            <div className="menu flex flex-col justify-between bg-base-200 text-base-content min-h-screen w-80 p-4 overflow-y-scroll">
            {/* Sidebar content here */}
                <div className="flex items-center justify-between mt-5">
                    <div className="flex items-center gap-2">
                        <Link to={"/"} className=" text-4xl font-bold font-rubik tracking-wider text-primary">Mahadi</Link>
                    </div>
                    {/* Menu Close  */}
                    <button onClick={() => setOpenMenu(false)} className="p-2 border border-black/65 cursor-pointer rounded-full">
                        <RiCloseLargeLine size={22} className=""/>
                    </button>
                </div>

                {/* Nav Links  */}
                <div className="mt-8">
                    <ul className="flex flex-col gap-1 space-y-2">
                        {
                            navLinks.map(link =>  <li key={link.element}>
                                <a href={link.path} className={"font-normal text-[16px] text-dark-black font-rubik uppercase flex justify-between"}>{link.element} <RiArrowRightSLine size={22}/></a>
                            </li>)
                        }
                    </ul>
                </div>

                {/* More query  */}
                <div className="py-1">
                <div className="divider my-2"></div>
                    <div className="flex items-center gap-3">
                        <div className="px-2 border-r-2 border-gray-500">
                            <LuPhoneCall size={28} className="text-primary"/>
                        </div>
                        <div>
                            <p className="font-medium text-base">More Inquery</p>
                            <h4 className="text-primary font-semibold text-lg">+8801794943980</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileMenuAside;

