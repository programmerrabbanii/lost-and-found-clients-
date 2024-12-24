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
              element:<AddLost></AddLost> 
            },
            {
                path:'/recovered',
                element:<Recovered></Recovered>
            },
            {
                path:'/my-manage',
                element:<Mymanage></Mymanage>

            },
            {
                path:'/details/:id',
                element:<Details></Details>,
                loader:({params})=>fetch(`/http://localhost:5000/item/${params.id}`)
                

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