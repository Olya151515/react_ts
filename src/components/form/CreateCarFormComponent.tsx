import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {CarCreatedModel} from "../../models/CarCreatedModel";
import {carCreateService} from "../../services/api.services";

const CreateCarFormComponent = () => {
    const {register,handleSubmit} = useForm<CarCreatedModel>();

    const [isCreatedCar , setIsCreatedCAr]= useState<boolean>(false)
     const onSubmitHandler = async (data:CarCreatedModel) => {
         let response = await carCreateService.createCar(data)
         setIsCreatedCAr(response)
     }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmitHandler)}>
                <label form={'brand'}>Write your brand:</label>
                <input type="text" {...register('brand')}/><br/>
                <label form={'price'}>Write your price:</label>
                <input type="number" {...register('price')}/><br/>
                <label form={'year'}>Write your year:</label>
                <input type="number" {...register('year')}/><br/>
                <button>create</button>
            </form>
            {
                isCreatedCar && <div>your car is created</div>
            }
        </div>
    );
};

export default CreateCarFormComponent;