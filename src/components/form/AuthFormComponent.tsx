import React from 'react';
import {useForm} from "react-hook-form";
import {TokenObtainPairModel} from "../../models/TokenObtainPairModel";
import {authService} from "../../services/api.services";

const AuthFormComponent = () => {
    const {handleSubmit,register} =
        useForm<TokenObtainPairModel>({
        defaultValues:{
            username:'olaaaaa12',
            password:'kSa677$$'
        }
    });
    const onSubmitHandler = async (data:TokenObtainPairModel) =>{
        authService.authUser(data);
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmitHandler)}>
                <input type="text" {...register('username')}/>
                <input type="text" {...register('password')}/>
                <button>auth me</button>
            </form>
        </div>
    );
};

export default AuthFormComponent;