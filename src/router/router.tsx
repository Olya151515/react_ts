import {createBrowserRouter, RouteObject} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorComponent from "../components/error/ErrorComponent";
import UsersPage from "../pages/users/UsersPage";
import PostsPage from "../pages/posts/PostsPage";
import CommentsPage from "../pages/comments/CommentsPage";
import UserWithPostsPage from "../pages/userPosts/UserWithPostsPage";

const routes: RouteObject[] = [
    {
        path: '/',
        element: <MainLayout/>,
        errorElement:<ErrorComponent/>,
        children:[
            {path:'users',element:<UsersPage/>},
            {path:'posts',element:<PostsPage/>},
            {path:'user/:id/Posts',element:<UserWithPostsPage/>},
            {path:'comments',element:<CommentsPage/>},
        ]
    }
]
export const router = createBrowserRouter(routes);