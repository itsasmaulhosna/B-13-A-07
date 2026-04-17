import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../page/Homepage/Home";
import Stats from "../page/Statspage/Stats";
import Error from "../page/Errorpage/Error";
import FriendDetails from "../page/FriendDetails/FriendDetails";
import Timeline from "../page/TimelinePage/Timeline";
import Friend from "../page/Friend/Friend";



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
path:'/friendDetails/:id',
element:<FriendDetails></FriendDetails>,
// loader:()=>fetch('/data.json')
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