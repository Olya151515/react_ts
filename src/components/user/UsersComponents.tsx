import React, {FC} from 'react';
import {IUser} from "../../models/user/IUser";
import UserComponent from "./UserComponent";
type IProps = {
    users:IUser[]
}
const UsersComponents:FC<IProps> = ({users}) => {
    return (
        <div>
            {
                users.map(user =><UserComponent key={user.id} user={user}/>)
            }
        </div>
    );
};

export default UsersComponents;