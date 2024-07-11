import React, {FC} from 'react';
import {IUser} from "../../models/users/IUser";
import UserComponent from "./UserComponent";

type IProps = {
    users:IUser[]
}
const UsersComponent:FC<IProps> = ({users}) => {
    return (
        <div>
            {
                users.map((user,index) => <UserComponent key={index} user={user}/>)
            }
        </div>
    );
};

export default UsersComponent;