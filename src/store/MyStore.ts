import {create} from "zustand";
import {StoreType} from "../models/storeModel/StoreModel";
import {IUserModel} from "../models/user/IUserModel";
import {IPostModel} from "../models/post/IPostModel";
import {ICommentModel} from "../models/comments/ICommentModel";

export let useStore = create<StoreType>(
    (set => ({
        usersStore:{
            allUsers:[],
            loadUsers:(users:IUserModel[]) =>{
                set((state:StoreType) => {
                    return{...state,usersStore:{...state.usersStore,allUsers:users}}
                })
            }
        },
        postsStore:{
            allPosts:[],
            loadPosts:(posts:IPostModel[]) =>{
                set((state:StoreType) => {
                    return{...state,postsStore:{...state.postsStore,allPosts:posts}}
                })

            }
        },
        commentsStore:{
            allComments:[],
            loadComments:(comments:ICommentModel[]) =>{
                set((state:StoreType) => {
                    return{...state,commentsStore:{...state.commentsStore,allComments:comments}}
                })
            }
        }
    }))

)