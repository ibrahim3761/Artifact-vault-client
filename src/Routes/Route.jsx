import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts";
import Home from "../Pages/Home/Home";
import AllArtifacts from "../Pages/AllArtifacts";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import AddArtifacts from "../Pages/AddArtifacts";
import MyArtifacts from "../Pages/MyArtifacts";
import LikedArtifacts from "../Pages/LikedArtifacts";
import ArtifactDetails from "../Pages/ArtifactDetails";
import PrivateRoute from "../Provider/PrivateRoute";
import Error from "../Pages/Error";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayouts,
        errorElement: <Error></Error>,
        children:[
            {
                index: true,
                path: "/",
                Component: Home,
            },
            {
                path: "all-artifacts",
                Component: AllArtifacts,
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
                element: <PrivateRoute><MyArtifacts></MyArtifacts></PrivateRoute>
            },
            {
                path: "liked-artifacts",
                element: <PrivateRoute><LikedArtifacts></LikedArtifacts></PrivateRoute>
            },
            {
                path: "artifacts-details/:id",
                element: <PrivateRoute><ArtifactDetails></ArtifactDetails></PrivateRoute>,
                loader: ({params})=>fetch(`https://artifact-vault-server.vercel.app/artifacts/${params.id}`)
            }
        ]
    }
])