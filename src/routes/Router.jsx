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
                    const res = await fetch("http://localhost:3000/portfolio-project")
                    const allProject = await res.json()
                    
                    const upcommingRes = await fetch("http://localhost:3000/upcomming-project")
                    const upcommingProject = await upcommingRes.json()
                    return {allProject, upcommingProject}

                } 
            }
        ]
    }
])

export default Router;