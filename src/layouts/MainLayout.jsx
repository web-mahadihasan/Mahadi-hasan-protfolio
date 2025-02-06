import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar/Navbar";
import "../styles/App.css"
import Footer from "../components/shared/Footer/Footer";
import { useEffect, useState } from "react";
import CustomLoading from "../pages/Loading/CustomLoading";

const MainLayout = () => {
     const [loading, setLoading] = useState(true);

     useEffect(() => {
     setTimeout(() => {
          setLoading(false);
     }, 3900);
     }, []);

     if (loading) {
     return (
          <div className="flex justify-center items-center w-full h-screen bg-[#1D232A]">
               <CustomLoading/>
          </div>
     );
     }
    return (
        <div>
           <nav className="sticky top-0 backdrop-blur-2xl bg-black/10 shadow-md z-50">
                <Navbar/>
           </nav>

           <main>
                <Outlet/>
           </main>

           <footer>
                <Footer/>
           </footer>
        </div>
    );
};

export default MainLayout;