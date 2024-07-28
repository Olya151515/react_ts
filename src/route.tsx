import {createBrowserRouter} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AuthPage from "./pages/auth/AuthPage";
import RegPage from "./pages/registration/RegPage";
import CarsPage from "./pages/cars/CarsPage";
import CreateCarPage from "./pages/createCar/CreateCarPage";

export const router = createBrowserRouter([
    {   path:'/',
        element: <MainLayout/>,
        children:[
            {index:true,element:<AuthPage/>},
            {path:'/registration',element:<RegPage/>},
            {path:'/cars', element:<CarsPage/>},
            {path:'/cars/create', element:<CreateCarPage/>}
        ]
    }
]);