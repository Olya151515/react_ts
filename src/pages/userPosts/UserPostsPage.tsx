import React, {useEffect, useMemo, useState} from 'react';
import UsersWithPostsComponent from "../../components/userPosts/UsersWithPostsComponent";
import {UserWithPostsModel} from "../../models/userPosts/UserWithPostsModel";
import {useStore} from "../../store/MyStore";

const UserPostsPage = () => {

    const {usersStore:{allUsers},postsStore:{allPosts}} = useStore();
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