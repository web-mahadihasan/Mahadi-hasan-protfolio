import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                path: "/",
                element: <Home/>,
                loader: async() =>  {
                    const res = await fetch("https://mahadi-portfolio-server.vercel.app/portfolio-project")
                    const allProject = await res.json()
                    
                    const upcommingRes = await fetch("https://mahadi-portfolio-server.vercel.app/upcomming-project")
                    const upcommingProject = await upcommingRes.json()
                    return {allProject, upcommingProject}

                } 
            }
        ]
    }
])

export default Router;