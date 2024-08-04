import React from 'react';
import {useAppContext} from "../../hooks/useAppContext";
import CommentComponent from "./CommentComponent";

const CommentsComponent = () => {
    const {commentsStore:{allComments}} = useAppContext();
    return (
        <div>
            {
                allComments.map(comment => <CommentComponent key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export default CommentsComponent;