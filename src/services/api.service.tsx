import axios, {AxiosResponse} from "axios";
import {IUserModel} from "../models/user/IUserModel";
import {IPostModel} from "../models/post/IPostModel";

const axiosInstance = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com',
});


const usersService ={
    getAllUsers:async ():Promise<AxiosResponse<IUserModel[]>> =>{
        return await axiosInstance.get<IUserModel[]>('/users');
    }
};
const postsService ={
    getAllPosts:async ():Promise<AxiosResponse<IPostModel[]>> =>{
        return await axiosInstance.get<IPostModel[]>('/posts');
    }
};


export {
    usersService,
    postsService
}
