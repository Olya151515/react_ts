import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/ReduxHooks";
import UserWithPostsComponent from "../../components/UserWithPosts/UserWithPostsComponent";
import {useParams} from "react-router-dom";
import {actions} from "../../redux/store/Store";

const UserWithPostsPage = () => {
    const {postSlice:{posts},userSlice:{user}} = useAppSelector((state) => state);
    const dispatch = useAppDispatch();
    const {id} = useParams();
    useEffect(() => {
        if(id){
            dispatch(actions.usersActions.loadUser(+id))
        }

    }, []);
    return (
        <div>
            <UserWithPostsComponent user={user} posts={posts} />
        </div>
    );
};

export default UserWithPostsPage;