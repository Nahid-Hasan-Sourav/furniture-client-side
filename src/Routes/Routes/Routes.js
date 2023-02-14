import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import ForgotPassword from "../../pages/ForgotPassword/ForgotPassword";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import SignIn from "../../pages/SignIn/SignIn";

export const router=createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signIn',
                element:<SignIn></SignIn>
            },

            {
                path:'/forgot-password',
                element:<ForgotPassword></ForgotPassword>
            }
        ]
    }
])