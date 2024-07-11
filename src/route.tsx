import {createBrowserRouter, RouteObject} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import UsersPage from "./pages/users/UsersPage";
import PostsPage from "./pages/posts/PostsPage";
import CommentsPage from "./pages/comments/CommentsPage";
import HomePage from "./pages/home/HomePage";

const routes:RouteObject[] = [
    {
        path:'/',element: <MainLayout/>,
        children:[
            {path:'',element:<HomePage/>},
            {path:'users', element:<UsersPage/>},
            {path:'posts', element:<PostsPage/>},
            {path:'comments', element:<CommentsPage/>}
        ]
    }
]
export  const router = createBrowserRouter(routes);