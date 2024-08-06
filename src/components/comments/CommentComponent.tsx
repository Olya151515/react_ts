import React, {FC} from 'react';
import {IComment} from "../../models/comment/IComment";
type IProps = {
    comment:IComment
}
const CommentComponent:FC<IProps> = ({comment}) => {
    return (
        <div>
           commentId: {comment.id} - email: {comment.email}

        </div>
    );
};

export default CommentComponent;