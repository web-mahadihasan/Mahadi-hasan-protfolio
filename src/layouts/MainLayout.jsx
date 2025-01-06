import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar/Navbar";
import "../styles/App.css"

const MainLayout = () => {

    return (
        <div>
           <nav>
                <Navbar/>
           </nav>

           <main>
                <Outlet/>
           </main>
        </div>
    );
};

export default MainLayout;