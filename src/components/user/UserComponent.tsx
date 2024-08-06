import React, {FC} from 'react';
import {IUser} from "../../models/user/IUser";
import {Link} from "react-router-dom";
type IProps ={
    user:IUser
}
const UserComponent:FC<IProps> = ({user}) => {
    return (
        <div>
           id: {user.id} - name:{user.name} <Link to={'/user/'+user.id+'/Posts'}>posts</Link>
        </div>
    );
};

export default UserComponent;