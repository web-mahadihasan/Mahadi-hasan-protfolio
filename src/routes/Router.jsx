import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
    }
])

export default Router;