import {createAsyncThunk} from "@reduxjs/toolkit";
import {postsService} from "../../../../services/api.service";
import {AxiosError} from "axios";

export const loadPosts = createAsyncThunk(
    'postSlice/loadPosts',
    async (_,thunkAPI) =>{
        try{
            let posts = await postsService.getAllPosts();
            return thunkAPI.fulfillWithValue(posts);
        }catch (e){
            let error = e as AxiosError;
            return thunkAPI.fulfillWithValue(error?.response?.data);
        }
    }
);