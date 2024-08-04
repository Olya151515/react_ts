import React from 'react';
import UserComponent from "./UserComponent";
import {useStore} from "../../store/MyStore";

const UsersComponent = () => {
    const {usersStore:{allUsers}} = useStore();
    return (
        <div>
            {
                allUsers.map(user => <UserComponent key={user.id} user={user}/>)
            }
        </div>
    );
};

export default UsersComponent;