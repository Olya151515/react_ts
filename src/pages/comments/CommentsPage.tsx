import React, {useEffect, useState} from 'react';
import {IComment} from "../../models/comment/IComment";
import {getAllComments} from "../../service/api.service";
import CommentsComponent from "../../components/comments/CommentsComponent";

const CommentsPage = () => {
    const [comments,setComments] = useState<IComment[]>([]);
    useEffect(() =>{
        getAllComments().then(value =>setComments(value.data))
    },[]);
    return (
        <div>
            <CommentsComponent comments={comments}/>
        </div>
    );
};

export default CommentsPage;