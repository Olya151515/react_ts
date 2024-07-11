import React, {useEffect, useState} from 'react';
import PostsComponent from "../../components/posts/PostsComponent";
import {getAllPosts} from "../../service/service.api";
import {IPost} from "../../models/posts/IPost";
import PaginationComponent from "../../components/pagination/PaginationComponent";
import {useSearchParams} from "react-router-dom";

const PostsPage = () => {
    const [posts,setPosts] = useState<IPost[]>([]);
    const [searchParams] = useSearchParams({page:'1'});
    let currentPage = +(searchParams.get('page') || '1');
    let skipValue = currentPage * 30 -30;
    useEffect(() =>{
        getAllPosts(skipValue).then(value => setPosts(value.data.posts))
    },[currentPage,skipValue]);
    return (
        <div>
            <PostsComponent posts={posts}/>
            <PaginationComponent pageCount={currentPage} typeOfData={'posts'}/>
        </div>
    );
};

export default PostsPage;