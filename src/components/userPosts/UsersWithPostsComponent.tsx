import React, {FC} from 'react';
import {UserWithPostsModel} from "../../models/userPosts/UserWithPostsModel";
type IProps = {
    items:UserWithPostsModel[]
}

const UsersWithPostsComponent:FC<IProps> = ({items}) => {
    return (
        <div>
            {
                items.map(value => <div key={value.id}>
                     Name: {value.name} <br/>
                    Posts: <br/>
                    <ul key={value.id}>
                        {value.posts.map(post=><li key={post.id}> PostID: {post.id} - title: {post.title}</li>)}
                    </ul>
                </div>)
            }
        </div>
    );
};

export default UsersWithPostsComponent;