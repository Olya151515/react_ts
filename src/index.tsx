import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import UsersPage from "./pages/users/UsersPage";
import PostsPage from "./pages/posts/PostsPage";
import CommentsPage from "./pages/comments/CommentsPage";
import HomePage from "./pages/home/HomePage";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

let router = createBrowserRouter([
    {path:'/', element:<MainLayout/>,
    children:[
        {index:true ,element:<HomePage/>},
        {path:'users', element:<UsersPage/>},
        {path:'posts', element:<PostsPage/>},
        {path:'comments', element:<CommentsPage/>}]}
]);

root.render(
    <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
