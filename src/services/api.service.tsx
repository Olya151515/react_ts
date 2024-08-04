import axios, {AxiosResponse} from "axios";
import {IUserModel} from "../models/user/IUserModel";
import {IPostModel} from "../models/post/IPostModel";
import {ICommentModel} from "../models/comments/ICommentModel";

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

const commentsService ={
    getAllComments:async ():Promise<AxiosResponse<ICommentModel[]>> =>{
        return await axiosInstance.get<ICommentModel[]>('/comments');
    }
};

export {
    usersService,
    postsService,
    commentsService
}
