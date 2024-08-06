import axios from "axios";
import {baseUrl, urls} from "../constants/urls/urls";
import {IUser} from "../models/user/IUser";
import {IPost} from "../models/post/IPost";
import {IComment} from "../models/comment/IComment";

const axiosInstance = axios.create({
    baseURL:baseUrl
});


const usersService = {
    getAllUsers:async ():Promise<IUser[]> =>{
        let response = await axiosInstance.get<IUser[]>('/users');
        return response.data;
    },
    getUserById:async (id:number):Promise<IUser> =>{
        let response = await axiosInstance.get<IUser>(urls.users.byId(id));
        return response.data;
    },
};

const postsService = {
    getAllPosts:async ():Promise<IPost[]> =>{
        let response =  await axiosInstance.get<IPost[]>(urls.posts.allPosts);
        return response.data;
    },
    getPostById:async (id:number):Promise<IPost> =>{
        let response = await axiosInstance.get<IPost>(urls.posts.byId(id));
        return response.data;
    }
};
const commentsService = {
    getAllComments:async ():Promise<IComment[]> =>{
        let response =  await axiosInstance.get<IComment[]>(urls.comments.allComments);
        return response.data;
    },
    getCommentById:async (id:number):Promise<IComment> =>{
        let response = await axiosInstance.get<IComment>(urls.comments.byId(id));
        return response.data;
    }
};

export {
    usersService,
    postsService,
    commentsService
}
