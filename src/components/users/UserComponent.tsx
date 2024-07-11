import React, {FC} from 'react';
import {IUser} from "../../models/users/IUser";

type IProps = {
    user:IUser
}
const UserComponent:FC<IProps> = ({user}) => {
    return (
        <div>
            User id:{user.id} - user name: {user.firstName}
        </div>
    );
};

export default UserComponent;