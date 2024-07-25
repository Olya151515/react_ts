import axios from "axios";
import {IUserModel} from "../models/IUserModel";
import {IUserResponse} from "../models/IUserResponse";
import {TokenObtainPairModel} from "../models/TokenObtainPairModel";
import {TokenResponseModel} from "../models/TokenResponseModel";



const axiosInstance = axios.create(
    {baseURL:'http://owu.linkpc.net/carsAPI/v2'}
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
        console.log(response);
        console.log(response.data.access);
        console.log(response.data.refresh);
    }
}


export {
    userService,
    authService
}