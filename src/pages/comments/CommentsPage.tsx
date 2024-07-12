import React, {useEffect, useState} from 'react';
import {getAllComments, getResponseData} from "../../service/service.api";
import {IComment} from "../../models/comments/IComment";
import CommentsComponent from "../../components/comments/CommentsComponent";
import PaginationComponent from "../../components/pagination/PaginationComponent";
import {useSearchParams} from "react-router-dom";

const CommentsPage = () => {
    const [comments,setComments] = useState<IComment[]>([]);
    const [searchParams] = useSearchParams({page:'1'});
    const [totalNum,setTotalNum] = useState(0);
    let currentPage = +(searchParams.get('page') || '1');
    let skipValue = currentPage * 30 -30;
    useEffect(() =>{
        getAllComments(skipValue).then(value => setComments(value.data.comments))
    },[currentPage,skipValue]);
    useEffect(() => {
        getResponseData('/comments').then(value => setTotalNum(value.data.total))
    }, [totalNum]);
    return (
        <div>
            <CommentsComponent comments={comments}/>
            <PaginationComponent pageCount={currentPage} typeOfData={'comments'} totalNum={totalNum}/>
        </div>
    );
};
export default CommentsPage;