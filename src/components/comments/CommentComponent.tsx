import React, {FC} from 'react';
import {IComment} from "../../models/comments/IComment";

type IProps ={
    comment:IComment
}
const CommentComponent:FC<IProps> = ({comment}) => {
    return (
        <div>
            commentId: {comment.id} - body: {comment.body}
        </div>
    );
};

export default CommentComponent;