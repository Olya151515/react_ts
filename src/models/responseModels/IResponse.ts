import {IUser} from "../users/IUser";
import {IPost} from "../posts/IPost";
import {IComment} from "../comments/IComment";

export type IUsersResponse ={
    users:IUser[]
};
export type IUPostsResponse ={
    posts:IPost[]
};
export type ICommentsResponse ={
    comments:IComment[]
}