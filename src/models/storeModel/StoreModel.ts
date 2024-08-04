import {IUserModel} from "../user/IUserModel";
import {IPostModel} from "../post/IPostModel";
import {ICommentModel} from "../comments/ICommentModel";

export type StoreType={
    usersStore:{
        allUsers:IUserModel[],
        loadUsers:(users:IUserModel[]) =>void
    },
    postsStore:{
        allPosts:IPostModel[],
        loadPosts:(posts:IPostModel[]) =>void
    },
    commentsStore:{
        allComments:ICommentModel[],
        loadComments:(comments:ICommentModel[]) =>void
    }
}