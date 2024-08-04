import React from 'react';
import CommentComponent from "./CommentComponent";
import {useStore} from "../../store/MyStore";

const CommentsComponent = () => {
    const {commentsStore:{allComments}} = useStore();
    return (
        <div>
            {
                allComments.map(comment => <CommentComponent key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export default CommentsComponent;