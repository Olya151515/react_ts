import React, {FC} from 'react';
import {IComment} from "../../models/comments/IComment";
import CommentComponent from "./CommentComponent";
type IProps={
    comments:IComment[]
}
const CommentsComponent:FC<IProps> = ({comments}) => {
    return (
        <div>
            {
                comments.map((comment,index) => <CommentComponent key={index} comment={comment}/>)
            }
        </div>
    );
};

export default CommentsComponent;