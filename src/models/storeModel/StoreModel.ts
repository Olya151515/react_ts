import {IUserModel} from "../user/IUserModel";
import {IPostModel} from "../post/IPostModel";

export type StoreType={
    usersStore:{
        allUsers:IUserModel[],
    },
    postsStore:{
        allPosts:IPostModel[]
    }
}