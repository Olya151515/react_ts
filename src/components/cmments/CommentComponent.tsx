import React, {FC} from 'react';
import {ICommentModel} from "../../models/comments/ICommentModel";
type IProps ={
    comment:ICommentModel
}

const CommentComponent:FC<IProps> = ({comment}) => {
    return (
        <div>
            CommentsID: {comment.id} <br/> body: {comment.body} <hr/>
        </div>
    );
};

export default CommentComponent;