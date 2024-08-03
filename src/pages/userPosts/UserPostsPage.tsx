import React, {useEffect, useMemo, useState} from 'react';
import UsersWithPostsComponent from "../../components/userPosts/UsersWithPostsComponent";
import {useAppContext} from "../../hooks/useAppContext";
import {UserWithPostsModel} from "../../models/userPosts/UserWithPostsModel";

const UserPostsPage = () => {

    const {usersStore:{allUsers},postsStore:{allPosts}} = useAppContext();
    const [userPostsState,setUserPostsState] =useState<UserWithPostsModel[]>([]);

    const userPostsArray = useMemo(() =>{
        return allUsers.map(user => {
            return {...user, posts: allPosts.filter(post =>post.userId === user.id)}
        })
    },[allPosts,allUsers]);
    useEffect(() => {
        setUserPostsState(userPostsArray);
    }, [userPostsArray]);

    return (
        <div>
            <UsersWithPostsComponent items={userPostsState}/>
        </div>
    );
};

export default UserPostsPage;