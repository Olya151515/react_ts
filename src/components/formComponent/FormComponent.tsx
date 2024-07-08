import React from 'react';
import {useForm} from "react-hook-form";
import userValidator from "../../valodators/userValidator";
import {joiResolver} from "@hookform/resolvers/joi";
import {postUser} from "../../service/user.api";
import {IUser} from "../../model/IUser";

const FormComponent = () => {
    let{formState:{errors,
        isValid} ,
        register,
        handleSubmit} =
        useForm<IUser>({mode:'all',resolver: joiResolver(userValidator)})

    return (
        <div>
            {/*{errors.name && <div>error:{errors.name?.message}</div>}*/}
            <form onSubmit={handleSubmit((data) => {postUser(data)})}>
                <label htmlFor="name">Enter your name:</label>
                <input type="text"{...register('name')}/><br/>
                <label htmlFor="username">Enter your username:</label>
                <input type="text"{...register('username')}/><br/>
                <label htmlFor="email">Enter your email:</label>
                <input type="text"{...register('email')}/><br/>
                <button disabled={!isValid}>send</button>
            </form>
        </div>
    );
};

export default FormComponent;