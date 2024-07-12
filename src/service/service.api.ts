import axios, {AxiosResponse} from "axios";
import {BaseUrl, urls} from "../constants/urls/urls";
import {ICommentsResponse, IUPostsResponse, IUsersResponse} from "../models/responseModels/IResponse";

const axiosInstance = axios.create({
    baseURL:BaseUrl
});
const getAllUsers = (skipValue:number):Promise<AxiosResponse<IUsersResponse>> =>{
    return axiosInstance.get(urls.getAllUsers+'?skip='+skipValue);
};
const getAllPosts = (skipValue:number):Promise<AxiosResponse<IUPostsResponse>> =>{
    return axiosInstance.get(urls.getAllPosts+'?skip='+skipValue);
};
const getAllComments = (skiValue:number):Promise<AxiosResponse<ICommentsResponse>> =>{
    return axiosInstance.get(urls.getAllComments+'?skip='+skiValue);
}
const getResponseData = async (nameOfData:string) =>{
    return await axiosInstance.get(nameOfData).then(value => value)
}

const incrementSearchParams = (searchParams:URLSearchParams) =>{
    let currentPage = +(searchParams.get('page') || '1');
    return (currentPage+1).toString();
}
const decrementSearchParams = (searchParams:URLSearchParams) =>{
    let currentPage = +(searchParams.get('page') || '1');
    return (currentPage-1).toString();
}

const isDisabledDec =((pageCount:number, typeOfData:string , totalNum:number) =>{
    let isDisabled = false;
    switch (typeOfData){
        case 'users':{
            if(pageCount === 1)
               return  isDisabled = true;
            break;
        }
        case 'posts':{
            if(pageCount === 1)
                return isDisabled = true;
            break;
        }
        case 'comments':{
            if(pageCount === 1)
              return   isDisabled = true;
            break;
        }
        default:{
            return isDisabled
        }
    }
});
const isDisabledInc =((pageCount:number, typeOfData:string , totalNum:number) =>{
    let isDisabled = false;
    switch (typeOfData){
        case 'users':{
            if(pageCount * 30 >= totalNum)
                return  isDisabled = true;
            break;
        }
        case 'posts':{
            if(pageCount * 30 >= totalNum)
                return isDisabled = true;
            break;
        }
        case 'comments':{
            if( pageCount * 30 >= totalNum)
                return   isDisabled = true;
            break;
        }
        default:{
            return isDisabled
        }
    }
})
export {
    getAllComments,
    getAllPosts,
    getAllUsers,
    getResponseData,
    incrementSearchParams,
    decrementSearchParams,
    isDisabledDec,
    isDisabledInc
}