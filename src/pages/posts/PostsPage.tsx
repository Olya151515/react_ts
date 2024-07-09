import React, {useEffect, useState} from 'react';
import PostsComponent from "../../components/posts/PostsComponent";
import {IPost} from "../../models/post/IPost";
import {getAllPosts} from "../../service/api.service";

const PostsPage = () => {
    const [posts,setPosts] = useState<IPost[]>([]);
    useEffect(()=>{
        getAllPosts().then(value => setPosts(value.data))
    },[]);
    return (
        <div>
            <PostsComponent posts={posts}/>
        </div>
    );
};

export default PostsPage;