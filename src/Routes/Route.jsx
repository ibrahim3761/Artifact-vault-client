import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts";
import Home from "../Pages/Home/Home";
import AllArtifacts from "../Pages/AllArtifacts";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayouts,
        children:[
            {
                index: true,
                path: "/",
                Component: Home,
            },
            {
                path: "all-artifacts",
                Component: AllArtifacts
            },
            {
                path: "login",
                Component: LogIn
            },
            {
                path: "register",
                Component: Register,
            }

        ]
    }
])