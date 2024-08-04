import React, {useEffect, useMemo, useState} from 'react';
import PostsWithCommentsComponent from "../../components/postComments/PostsWithCommentsComponent";
import {PostWithCommentsModel} from "../../models/postComments/PostWithCommentsModel";
import {useStore} from "../../store/MyStore";

const PostCommentsPage = () => {
    const {commentsStore:{allComments},postsStore:{allPosts}} = useStore();
    const [postComments , setPostComments] = useState<PostWithCommentsModel[]>([]);

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
            <PostsWithCommentsComponent items={postComments}/>
        </div>
    );
};

export default PostCommentsPage;