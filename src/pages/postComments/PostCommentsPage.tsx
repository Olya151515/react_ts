import React, {useEffect, useMemo, useState} from 'react';
import PostsWithCommentsComponent from "../../components/postComments/PostsWithCommentsComponent";
import {useAppContext} from "../../hooks/useAppContext";
import {PostWithCommentsModel} from "../../models/postComments/PostWithCommentsModel";

const PostCommentsPage = () => {
    const {commentsStore:{allComments},postsStore:{allPosts}} = useAppContext();
    const [postCommets , setPostComments] = useState<PostWithCommentsModel[]>([]);

    const postCommentsArray = useMemo(() =>{
            return allPosts.map(post => {
                return{...post, comments: allComments.filter(comment => comment.postId === post.id)}
            });
    },[allPosts,allComments]);

    useEffect(() => {
        setPostComments(postCommentsArray);
    }, [postCommentsArray]);



    return (
        <div>
            <PostsWithCommentsComponent items={postCommets}/>
        </div>
    );
};

export default PostCommentsPage;