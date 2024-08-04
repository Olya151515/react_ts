import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import UsersPage from "../pages/users/UsersPage";
import PostsPage from "../pages/posts/PostsPage";
import UserPostsPage from "../pages/userPosts/UserPostsPage";
import CommentsPage from "../pages/comments/CommentsPage";
import PostCommentsPage from "../pages/postComments/PostCommentsPage";


 const routes = [
     {path:'' , element:<App/> ,
         children:[
             {path:'users',element:<UsersPage/>},
             {path:'posts',element:<PostsPage/>},
             {path:'userPosts',element:<UserPostsPage/>},
             {path:'postComments',element:<PostCommentsPage/>},
             {path:'comments',element: <CommentsPage/>}
         ]}
 ];


export const router = createBrowserRouter(routes);