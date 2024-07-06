import React from 'react';
import {useForm} from "react-hook-form";
import userValidator from "../../valodators/userValidator";
import {joiResolver} from "@hookform/resolvers/joi";

const FormComponent = () => {
    let{formState:{errors,
        isValid} ,
        register,
        handleSubmit} =
        useForm({mode:'all',resolver: joiResolver(userValidator)})

    return (
        <div>
            {/*{errors.name && <div>error:{errors.name?.message}</div>}*/}
            <form onSubmit={handleSubmit((data) =>{
                console.log(data);})}>
                <input type="text"{...register('name')}/>
                <input type="text"{...register('username')}/>
                <input type="text"{...register('email')}/>
                <button disabled={!isValid}>send</button>
            </form>
        </div>
    );
};

export default FormComponent;