import React, {FC} from 'react';
import {PostWithCommentsModel} from "../../models/postComments/PostWithCommentsModel";
import PostWithCommentsComponent from "./PostWithCommentsComponent";
type IProps ={
    items:PostWithCommentsModel[]
}

const PostsWithCommentsComponent:FC<IProps> = ({items}) => {
    return (
        <div>
            {
                items.map(value => <PostWithCommentsComponent key={value.id} post={value}/>)
            }
        </div>
    );
};

export default PostsWithCommentsComponent;