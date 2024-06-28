import React, {FC} from 'react';
import {IUser} from "../../models/userModel/IUser";

interface IProps{
    user:IUser
    clickButton: (id:number) => void
}
const UserComponent:FC<IProps> = ({user,clickButton}) => {
    return (
        <div>
            {user.id} -- {user.name}
            <button onClick={() =>{clickButton(user.id)}}>show posts</button>
        </div>
    );
};

export default UserComponent;