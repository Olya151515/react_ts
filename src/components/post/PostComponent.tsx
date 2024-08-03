import React, {FC} from 'react';
import {IPostModel} from "../../models/post/IPostModel";

type IProps ={
    post:IPostModel
}
const PostComponent:FC<IProps> = ({post}) => {
    return (
        <div>
           PostId: {post.id} - post title: {post.title}
        </div>
    );
};

export default PostComponent;