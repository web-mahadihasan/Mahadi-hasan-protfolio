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
                loader: () =>  fetch("http://localhost:3000/portfolio-project")
            }
        ]
    }
])

export default Router;