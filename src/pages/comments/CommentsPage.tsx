import React, {useEffect} from 'react';
import CommentsComponent from "../../components/comments/CommentsComponent";
import {useAppDispatch, useAppSelector} from "../../hooks/ReduxHooks";
import {actions} from "../../redux/store/Store";

const CommentsPage = () => {
    const {comments} = useAppSelector(state => state.commentSlice);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(actions.commentsActions.loadComments());
    }, []);
    return (
        <div>
            <CommentsComponent comments={comments}/>
        </div>
    );
};

export default CommentsPage;