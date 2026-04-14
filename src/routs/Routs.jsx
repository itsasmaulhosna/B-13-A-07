import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../page/Homepage/Home";
import Timeline from "../page/TimelinePage/Timeline";
import Stats from "../page/Statspage/Stats";
import Error from "../page/Errorpage/Error";

export const router=createBrowserRouter([
    {
        path:'/',
        element:<RootLayout></RootLayout>,
        children:[
{
    path:'/',
    element:<Home></Home>
},
{
    path:'/timeline',
    element:<Timeline></Timeline>
},
{
    path:'/stats',
    element:<Stats></Stats>
}

        ],
        errorElement:<Error></Error>
    }
  
])