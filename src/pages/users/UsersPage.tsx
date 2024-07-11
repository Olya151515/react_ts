import React, {useEffect, useState} from 'react';
import UsersComponent from "../../components/users/UsersComponent";
import {IUser} from "../../models/users/IUser";
import {getAllUsers} from "../../service/service.api";
import PaginationComponent from "../../components/pagination/PaginationComponent";
import {useSearchParams} from "react-router-dom";

const UsersPage = () => {
    const [users,setUsers] = useState<IUser[]>([]);
    const [searchParams] = useSearchParams({page:'1'});
    let currentPage = +(searchParams.get('page') || '1');
    let skipValue = currentPage * 30 -30;
    useEffect(() =>{
        getAllUsers(skipValue).then(value => setUsers(value.data.users))
    },[currentPage,skipValue]);
    return (
        <div>
            <UsersComponent users={users}/>
            <PaginationComponent pageCount={currentPage} typeOfData={'users'}/>
        </div>
    );
};

export default UsersPage;