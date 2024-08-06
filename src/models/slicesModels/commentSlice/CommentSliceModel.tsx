import {IComment} from "../../comment/IComment";

export interface CommentSliceModel{
    comments:IComment[],
    isLoaded:boolean,
    error:string
}

export const initCommentState:CommentSliceModel ={
    comments:[],
    isLoaded:false,
    error:''
}