import React, {FC} from 'react';
import {CarWithAuth} from "../../models/CarWithAuth";

interface  IProps {
    car:CarWithAuth
}
const CarComponent:FC<IProps> = ({car}) => {
    return (
        <div>
            <div>Brand: {car.brand} - price: {car.price} -  year:{car.year} </div>
        </div>
    );
};

export default CarComponent;