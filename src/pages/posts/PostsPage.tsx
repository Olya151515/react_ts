import React, {useEffect} from 'react';
import PostsComponent from "../../components/posts/PostsComponent";
import {useAppDispatch, useAppSelector} from "../../hooks/ReduxHooks";
import {actions} from "../../redux/store/Store";

const PostsPage = () => {

    const {posts} = useAppSelector(state => state.postSlice);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(actions.postsActions.loadPosts());
    }, []);

    return (
        <div>
            <PostsComponent posts={posts}/>
        </div>
    );
};

export default PostsPage;