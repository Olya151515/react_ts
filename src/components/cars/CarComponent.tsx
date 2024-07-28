import React, {FC} from 'react';
import {CarWithAuth} from "../../models/CarWithAuth";

interface  IProps {
    car:CarWithAuth
}
const CarComponent:FC<IProps> = ({car}) => {
    return (
        <div>
            <div>{car.brand} - {car.price}</div>
        </div>
    );
};

export default CarComponent;