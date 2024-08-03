import React from 'react';
import {useAppContext} from "../../hooks/useAppContext";
import UserComponent from "./UserComponent";

const UsersComponent = () => {
    const {usersStore:{allUsers}} = useAppContext();
    return (
        <div>
            {
                allUsers.map(user => <UserComponent key={user.id} user={user}/>)
            }
        </div>
    );
};

export default UsersComponent;