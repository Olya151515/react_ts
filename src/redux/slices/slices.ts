import {createSlice} from "@reduxjs/toolkit";
import {initPostState} from "../../models/slicesModels/postSlice/PostSliceModel";
import {initCommentState} from "../../models/slicesModels/commentSlice/CommentSliceModel";
import {loadUser, loadUsers} from "../reducer/loadingDataFromAPI/users/LoadUsers";
import {loadPosts} from "../reducer/loadingDataFromAPI/posts/loadPosts";
import {IUser} from "../../models/user/IUser";
import {initUserState} from "../../models/slicesModels/userSlice/UserSliceModel";
import {IPost} from "../../models/post/IPost";
import {loadComments} from "../reducer/loadingDataFromAPI/comments/loadComments";
import {IComment} from "../../models/comment/IComment";

export const userSlice = createSlice({
    name:'userSlice',
    initialState: initUserState,
    reducers:{},
    extraReducers:(builder) =>{
        builder
            .addCase(
            loadUsers.fulfilled, (state, action) =>{
                    state.users = action.payload as IUser[];
            }
        )
            .addCase(loadUsers.rejected,(state, action) =>{
                state.error = action.payload as string;
            })
            .addCase(loadUser.fulfilled,(state, action) =>{
                state.user = action.payload as IUser;
            })

    }
});

export const postSlice = createSlice({
    name:'postSlice',
    initialState:initPostState,
    reducers:{},
    extraReducers:(builder) =>{
        builder.addCase(loadPosts.fulfilled, (state, action)=>{
            state.posts = action.payload as IPost[];
        })
            .addCase(loadPosts.rejected,(state, action) =>{
                state.error = action.payload as string;
            })
    }
});

export const commentSlice = createSlice({
    name:'commentSlice',
    initialState:initCommentState,
    reducers:{},
    extraReducers:(builder) =>{
        builder.addCase(loadComments.fulfilled,(state, action) =>{
            state.comments = action.payload as IComment[];
        })
            .addCase(loadComments.rejected,(state, action) =>{
                state.error = action.payload as string;
            })
    }
});