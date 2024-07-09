import React, {useEffect, useState} from 'react';
import UsersComponent from "../../components/users/UsersComponent";
import {IUser} from "../../models/user/IUser";
import {getAllUsers} from "../../service/api.service";

const UsersPage = () => {
    const [user,setUser] = useState<IUser[]>([]);
    useEffect(() =>{
        getAllUsers().then(value => setUser(value.data))
    },[])
    return (
        <div>
            <UsersComponent users={user}/>
        </div>
    );
};

export default UsersPage;