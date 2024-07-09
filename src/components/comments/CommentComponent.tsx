import React, {FC} from 'react';
import {IComment} from "../../models/comment/IComment";

type IProps ={
    comment:IComment
}
const CommentComponent:FC<IProps> = ({comment}) => {
    return (
        <div>
            CommentId:{comment.id} - PostId:{comment.postId} <br/>
            Name:{comment.name}
            <hr/>
        </div>
    );
};

export default CommentComponent;