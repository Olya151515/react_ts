import React from 'react';
import {useAppContext} from "../../hooks/useAppContext";
import PostComponent from "./PostComponent";

const PostsComponent = () => {
    const {postsStore:{allPosts}} = useAppContext();
    return (
        <div>
            {
                allPosts.map(post => <PostComponent key={post.id} post={post}/>)
            }
        </div>
    );
};

export default PostsComponent;