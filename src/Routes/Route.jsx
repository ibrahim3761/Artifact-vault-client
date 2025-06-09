import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts";
import Home from "../Pages/Home/Home";
import AllArtifacts from "../Pages/AllArtifacts";

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
            }

        ]
    }
])