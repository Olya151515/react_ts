import React, {FC} from 'react';
import {IPost} from "../../models/post/IPost";

type IProps = {
    post:IPost
}
const PostComponent:FC<IProps> = ({post}) => {
    return (
        <div>
            PostID:{post.id} - UserId:{post.userId} <br/>
            {post.title}
            <hr/>
        </div>
    );
};

export default PostComponent;