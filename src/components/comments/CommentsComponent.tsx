import React, {FC} from 'react';
import {IComment} from "../../models/comment/IComment";
import CommentComponent from "./CommentComponent";
type IProps ={
    comments:IComment[]
}
const CommentsComponent:FC<IProps> = ({comments}) => {
    return (
        <div>
            {
                comments.map(comment => <CommentComponent key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export default CommentsComponent;