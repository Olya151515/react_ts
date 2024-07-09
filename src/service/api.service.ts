import axios, {AxiosResponse} from "axios";
import {BaseUrl, URLS} from "../constants/urls/URLSConstant";
import {IUser} from "../models/user/IUser";
import {IPost} from "../models/post/IPost";
import {IComment} from "../models/comment/IComment";

let axiosInstance = axios.create({
    baseURL:BaseUrl
});
const getAllUsers = async ():Promise<AxiosResponse<IUser[]>> =>{
    return await axiosInstance.get(URLS.users.AllUsers)
}
const getAllPosts = async ():Promise<AxiosResponse<IPost[]>> =>{
    return await axiosInstance.get(URLS.posts.AllPosts)
}
const getAllComments = async ():Promise<AxiosResponse<IComment[]>> =>{
    return await axiosInstance.get(URLS.comments.AllComments)
}

export {
    getAllUsers,
    getAllComments,
    getAllPosts
}