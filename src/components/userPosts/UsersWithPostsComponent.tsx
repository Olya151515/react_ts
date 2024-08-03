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
                    {value.name}
                    <ul key={value.id}>
                        {value.posts.map(post=><li>{post.title}</li>)}
                    </ul>
                </div>)
            }
        </div>
    );
};

export default UsersWithPostsComponent;