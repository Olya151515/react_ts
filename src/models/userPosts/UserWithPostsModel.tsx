import {IUserModel} from "../user/IUserModel";
import {IPostModel} from "../post/IPostModel";

export type UserWithPostsModel = IUserModel & {posts:IPostModel[]};
