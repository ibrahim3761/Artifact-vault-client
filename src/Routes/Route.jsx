import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts";
import Home from "../Pages/Home/Home";
import AllArtifacts from "../Pages/AllArtifacts";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import AddArtifacts from "../Pages/AddArtifacts";
import MyArtifacts from "../Pages/MyArtifacts";
import LikedArtifacts from "../Pages/LikedArtifacts";

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
                Component: AllArtifacts,
                loader: ()=> fetch("http://localhost:3000/artifacts")
            },
            {
                path: "login",
                Component: LogIn
            },
            {
                path: "register",
                Component: Register,
            },
            {
                path: "add-artifact",
                Component: AddArtifacts
            },
            {
                path: "my-artifacts",
                Component: MyArtifacts
            },
            {
                path: "liked-artifacts",
                Component: LikedArtifacts
            }
        ]
    }
])