import React, {createContext, FC, useEffect, useState} from 'react';
import './App.css';
import HeaderComponent from "./components/header/HeaderComponent";
import {Outlet} from "react-router-dom";
import {MYContext} from "./store/MyContext";
import {IUserModel} from "./models/user/IUserModel";
import {IPostModel} from "./models/post/IPostModel";
import {postsService, usersService} from "./services/api.service";


const App: FC = () => {
    const [users,setUsers] = useState<IUserModel[]>([]);
    const [posts,setPosts] = useState<IPostModel[]>([]);

    useEffect(() => {
        usersService.getAllUsers().then(value => setUsers(value.data));
        postsService.getAllPosts().then(value => setPosts(value.data));
    }, []);

    return (
        <>
            <MYContext.Provider value={{
                usersStore:{allUsers:users},
                postsStore:{allPosts:posts}
            }}>
                <HeaderComponent/>
                <Outlet/>
            </MYContext.Provider>
        </>
    );
}

export default App;
