import axios, {AxiosResponse} from "axios";
import {IUser} from "../model/user/IUser";
import {IPosts} from "../model/post/IPosts";

const  axiosInstance = axios.create({
    baseURL:'https://dummyjson.com'
});

type IPropsUsers ={
    users:IUser[]
}
type IPropsPosts ={
    posts:IPosts[]
}

const getAllUsers =async ():Promise<AxiosResponse<IPropsUsers>> =>{
    return await axiosInstance.get('/users?limit=10')
}
const getNextUsers = async (skipValue:number) =>{
    return await axiosInstance.get('/users?limit='+skipValue)
}
const getAllPosts = async (id:number):Promise<AxiosResponse<IPropsPosts>>  =>{
    return await axiosInstance.get('/users/'+id + '/posts')
}

export {
    getAllUsers,
    getAllPosts,
    getNextUsers
}