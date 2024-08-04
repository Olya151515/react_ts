import React, {FC, useEffect} from 'react';
import './App.css';
import HeaderComponent from "./components/header/HeaderComponent";
import {Outlet} from "react-router-dom";
import {useStore} from "./store/MyStore";
import {commentsService, postsService, usersService} from "./services/api.service";


const App: FC = () => {
    const store = useStore();

    useEffect(() => {
        usersService.getAllUsers().then(value => store.usersStore.loadUsers(value.data));
        postsService.getAllPosts().then(value => store.postsStore.loadPosts(value.data));
        commentsService.getAllComments().then(value => store.commentsStore.loadComments(value.data));
    }, []);
    return (
        <>
            <HeaderComponent/>
            <Outlet/>
        </>
    );
}

export default App;
