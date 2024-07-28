import React, {useEffect, useState} from 'react';
import {CarPaginatedModel} from "../../models/CarPaginatedModel";
import {carsService} from "../../services/api.services";
import {AxiosError} from "axios";
import CarsComponent from "../../components/cars/CarsComponent";

const CarsPage = () => {
    const [carPaginated , setCarPaginated] = useState<CarPaginatedModel>({
        total_items:0,
        total_pages:0,
        next:null,
        prev:null,
        items:[]
    });

    useEffect(() => {

        const getCars = async () =>{

            try{
                console.log('try');
                let response = await carsService.getCars();
                console.log(response);
                if(response){
                    setCarPaginated(response);
                }

            }
            catch (e){
                let axiosError = e as  AxiosError;
                if(axiosError && axiosError?.response?.status === 401){
                    console.log(axiosError.message);
                }
            }
        }
        getCars();


    }, []);
    console.log(carPaginated);
    return (
        <div>
            <CarsComponent cars={carPaginated.items} />
        </div>
    );
};

export default CarsPage;