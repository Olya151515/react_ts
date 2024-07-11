import React, {FC} from 'react';
import {IPost} from "../../models/posts/IPost";

type IProps = {
    post:IPost
}
const PostComponent:FC<IProps> = ({post}) => {
    return (
        <div>
            PostId: {post.id} - title: {post.title}
        </div>
    );
};

export default PostComponent;