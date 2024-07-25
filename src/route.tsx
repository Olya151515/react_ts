import {createBrowserRouter} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AuthPage from "./pages/auth/AuthPage";
import RegPage from "./pages/registration/RegPage";

export const router = createBrowserRouter([
    {   path:'/',
        element: <MainLayout/>,
        children:[
            {index:true,element:<AuthPage/>},
            {path:'/registration',element:<RegPage/>}
        ]
    }
]);