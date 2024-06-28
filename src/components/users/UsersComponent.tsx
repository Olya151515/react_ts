import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../../models/userModel/IUser";
import {getAllUsers, getPostsOfUserById} from "../../service/users/api.service";
import UserComponent from "../user/UserComponent";
import {IPosts} from "../../models/postsModel/IPosts";
import PostsComponent from "../posts/PostsComponent";

const UsersComponent:FC = () => {
    const [users , setUsers] = useState<IUser[]>([]);
    const[posts,setPosts] = useState<IPosts[]>([])

    useEffect(() => {
        getAllUsers().then(value => setUsers([...value]))
    }, []);

    const clickButton = (id:number) =>{
        getPostsOfUserById(id).then(value => setPosts([...value]) )

    }

    return (
        <div>
            <div>
                {
                    users.map(user => <UserComponent key={user.id} user={user} clickButton={clickButton}/>)
                }
            </div><hr/>
           <div>
               {
                  <PostsComponent  posts={posts}/>
               }
           </div>

        </div>
    );
};

export default UsersComponent;