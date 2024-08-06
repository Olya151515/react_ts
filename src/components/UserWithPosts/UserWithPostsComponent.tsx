import React, {FC} from 'react';
import {IUser} from "../../models/user/IUser";
import {IPost} from "../../models/post/IPost";

type IProps = {
    user: IUser | null,
    posts: IPost[]
}

const UserWithPostsComponent: FC<IProps> = ({user, posts}) => {
    const getUserPosts = () => {
        return posts.filter(posts => posts.userId === user?.id)
    }
    return (
        <div>
            id: {user?.id} <br/>
            name: {user?.name} <br/>
            username: {user?.username} <br/>
            email: {user?.email} <br/>
            posts:
            {
                getUserPosts().map(post => <div key={post.id}>
                    <hr/>
                    PostID:{post.id} <br/>
                    Post title: {post.title} <br/>
                    userID: {post.userId}
                    <hr/>
                </div>)
            }
        </div>
    );
};

export default UserWithPostsComponent;