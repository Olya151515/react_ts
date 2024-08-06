import {IPost} from "../../post/IPost";

export interface PostSliceModel{
    posts:IPost[],
    isLoaded:boolean,
    error:string
}
export const initPostState:PostSliceModel ={
    posts:[],
    isLoaded:false,
    error:''
}
