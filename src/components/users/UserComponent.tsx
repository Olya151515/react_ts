import React, {FC} from 'react';
import {IUser} from "../../models/user/IUser";

type IProps ={
    user:IUser
}
const UserComponent:FC<IProps> = ({user}) => {
    return (
        <div>
            UserId:{user.id} - userName:{user.name} <br/>
            {user.username} -{user.email} <hr/>
        </div>
    );
};

export default UserComponent;