import React, {FC} from 'react';
import {IPost} from "../../models/posts/IPost";
import PostComponent from "./PostComponent";

type IProps ={
    posts:IPost[]
}
const PostsComponent:FC<IProps> = ({posts}) => {
    return (
        <div>
            {
                posts.map((post,index) => <PostComponent key={index} post={post}/>)
            }
        </div>
    );
};

export default PostsComponent;