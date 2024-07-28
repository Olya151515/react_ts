import React, {FC} from 'react';
import {CarWithAuth} from "../../models/CarWithAuth";
import CarComponent from "./CarComponent";
interface IProps {
    cars:CarWithAuth[]
}


const CarsComponent:FC<IProps> = ({cars}) => {
    return (
        <div>
            {
                cars.map((car,index) => <CarComponent key={index} car={car}/>)
            }
        </div>
    );
};

export default CarsComponent;