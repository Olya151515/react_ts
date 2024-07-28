import React, {FC, useState} from 'react';
import {useForm} from "react-hook-form";
import {IUserModel} from "../../models/IUserModel";
import {userService} from "../../services/api.services";


const RegFormComponent:FC = () => {

    const[isReg,setIsReg] = useState<boolean>(false);


    const {handleSubmit,register} = useForm<IUserModel>({
        defaultValues:{
            username:'olya151515',
            password:'Olya@151515'
        }
    })

    const onSubmitHandler = async (data:IUserModel) =>{
        let response = await userService.saveUser(data);
         console.log(data);
        setIsReg(response);
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmitHandler)}>
                <input type="text" {...register('username')}/>
                <input type="text" {...register('password')}/>
                <button>reg me</button>
            </form>
            {
                isReg && <div>you are registrated</div>
            }
        </div>
    );
};

export default RegFormComponent;