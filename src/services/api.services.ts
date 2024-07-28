import axios from "axios";
import {IUserModel} from "../models/IUserModel";
import {IUserResponse} from "../models/IUserResponse";
import {TokenObtainPairModel} from "../models/TokenObtainPairModel";
import {TokenResponseModel} from "../models/TokenResponseModel";
import {retriveLocalStorage} from "../helpers/helpers.api";
import {CarPaginatedModel} from "../models/CarPaginatedModel";



const axiosInstance = axios.create(
    {baseURL:'http://owu.linkpc.net/carsAPI/v2'}
)

axiosInstance.interceptors.request.use(
    requestObject =>{

        if(localStorage.getItem('tokenPair') && requestObject.url !== '/auth' ){
            requestObject.headers.set('Authorization' , 'Bearer ' + retriveLocalStorage<TokenResponseModel>('tokenPair').access)
        }

        console.log(requestObject);
        return requestObject
    }
)
const userService ={
    saveUser: async (data:IUserModel):Promise<boolean> =>{
        let response = await axiosInstance.post<IUserResponse>('/users', data);
        console.log(response);
        return !!response.data.id || false
    }
}

const authService ={
    authUser: async (data:TokenObtainPairModel):Promise<void> =>{
        let response = await axiosInstance.post<TokenResponseModel>('/auth',data);
        localStorage.setItem('tokenPair', JSON.stringify(response.data));
        console.log(localStorage.getItem('tokenPair'));
    }
}

const carsService ={
    getCars : async ():Promise<CarPaginatedModel> =>{
        let response = await axiosInstance.get<CarPaginatedModel>('/cars');
        console.log(response.data.items);
        console.log(response.headers);
        return response.data

    }
}

export {
    userService,
    authService,
    carsService
}