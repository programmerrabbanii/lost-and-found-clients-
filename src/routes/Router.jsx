import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Found from "../pages/Found";
import AddLost from "../pages/AddLost";
import Recovered from "../pages/Recovered";
import Mymanage from "../pages/Mymanage";
import Details from "../pages/Details";
import Update from "../pages/Update";
import Private from "./Private";

const router=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/found',
                element:<Found></Found>

            },
            {
              path:'/add-lost',
              element:<Private><AddLost></AddLost></Private> 
            },
            {
                path:'/recovered',
                element:<Private><Recovered></Recovered></Private>
            },
            {
                path:'/my-manage',
                element:<Private><Mymanage></Mymanage></Private>

            },
            {
                path:'/details/:id',
                element:<Private><Details></Details></Private>,
                loader:({params})=>fetch(`https://lost-found-server-nine.vercel.app/item/${params.id}`)
                

            },
            {
                path:'/update/:id',
                element:<Private><Update></Update></Private>
                
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
            
        ]
        
    } 
])
export default router