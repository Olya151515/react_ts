import React, {FC} from 'react';
import {IPost} from "../../models/post/IPost";
type IProps ={
    post:IPost
}
const PostComponent:FC<IProps> = ({post}) => {
    return (
        <div>
            postId: {post.id} - {post.title}
        </div>
    );
};

export default PostComponent;