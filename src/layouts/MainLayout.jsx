import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar/Navbar";
import "../styles/App.css"
import Footer from "../components/shared/Footer/Footer";

const MainLayout = () => {

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