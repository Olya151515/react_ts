import React, {useEffect} from 'react';
import UsersComponents from "../../components/user/UsersComponents";
import {useAppDispatch, useAppSelector} from "../../hooks/ReduxHooks";
import {actions} from "../../redux/store/Store";

const UsersPage = () => {

    const {users} = useAppSelector(state => state.userSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(actions.usersActions.loadUsers());
    }, []);
    return (
        <div>
            <UsersComponents users={users}/>
        </div>
    );
};

export default UsersPage;