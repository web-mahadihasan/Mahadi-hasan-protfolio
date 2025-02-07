import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import ProjectDetails from "../pages/Project Details/Project-Details-3";
// import ProjectDetails from "../pages/Project Details/project-details-2";
// import ProjectDetails from "../pages/Project Details/project-details-1";
// import ProjectDetails from "../pages/Project Details/project-details";

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
            },
            {
                path: "/project-details/:id",
                element: <ProjectDetails/>
            }
        ]
    }
])

export default Router;