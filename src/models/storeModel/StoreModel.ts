import {IUserModel} from "../user/IUserModel";
import {IPostModel} from "../post/IPostModel";
import {ICommentModel} from "../comments/ICommentModel";

export type StoreType={
    usersStore:{
        allUsers:IUserModel[],
    },
    postsStore:{
        allPosts:IPostModel[]
    },
    commentsStore:{
        allComments:ICommentModel[]
    }
}