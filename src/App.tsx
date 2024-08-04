import React, { FC, useEffect, useState} from 'react';
import './App.css';
import HeaderComponent from "./components/header/HeaderComponent";
import {Outlet} from "react-router-dom";
import {MYContext} from "./store/MyContext";
import {IUserModel} from "./models/user/IUserModel";
import {IPostModel} from "./models/post/IPostModel";
import {commentsService, postsService, usersService} from "./services/api.service";
import {ICommentModel} from "./models/comments/ICommentModel";


const App: FC = () => {
    const [users,setUsers] = useState<IUserModel[]>([]);
    const [posts,setPosts] = useState<IPostModel[]>([]);
    const [comments,setComments] = useState<ICommentModel[]>([]);

    useEffect(() => {
        usersService.getAllUsers().then(value => setUsers(value.data));
        postsService.getAllPosts().then(value => setPosts(value.data));
        commentsService.getAllComments().then(value => setComments(value.data));
    }, []);

    return (
        <>
            <MYContext.Provider value={{
                usersStore:{allUsers:users},
                postsStore:{allPosts:posts},
                commentsStore:{allComments:comments},
            }}>
                <HeaderComponent/>
                <Outlet/>
            </MYContext.Provider>
        </>
    );
}

export default App;
