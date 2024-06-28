import React, {FC} from 'react';
import {IPosts} from "../../models/postsModel/IPosts";


interface IProps{
    posts:IPosts[]
}
const PostsComponent:FC<IProps> = ({posts}) => {
    return (
        <div>
            {
                posts.map(posts => <div key={posts.id}>{posts.id}-{posts.title}</div>)
            }
        </div>
    );
};

export default PostsComponent;