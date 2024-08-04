import React, {FC} from 'react';
import {PostWithCommentsModel} from "../../models/postComments/PostWithCommentsModel";
type IProps = {
    post:PostWithCommentsModel
}
const PostWithCommentsComponent:FC<IProps> = ({post}) => {
    return (
        <div>
            Post id: {post.id} <br/>
            comments: <br/>
            <ul key={post.id}>
                {post.comments.map(comment => <li key={comment.id}>commentsID: {comment.id} - commentPostID: {comment.postId} <br/>
                   body: {comment.body}</li>)}
            </ul>

        </div>
    );
};

export default PostWithCommentsComponent;