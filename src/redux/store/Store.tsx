import {configureStore} from "@reduxjs/toolkit";
import {commentSlice, postSlice, userSlice} from "../slices/slices";
import {loadUser, loadUsers} from "../reducer/loadingDataFromAPI/users/LoadUsers";
import {loadPosts} from "../reducer/loadingDataFromAPI/posts/loadPosts";
import {loadComments} from "../reducer/loadingDataFromAPI/comments/loadComments";

export const store = configureStore({
    reducer:{
        userSlice: userSlice.reducer,
        postSlice:postSlice.reducer,
        commentSlice:commentSlice.reducer,
    }
});


export const actions ={
    usersActions:{...userSlice.actions,loadUsers,loadUser},
    postsActions:{...postSlice.actions,loadPosts},
    commentsActions:{...commentSlice.actions,loadComments},
}