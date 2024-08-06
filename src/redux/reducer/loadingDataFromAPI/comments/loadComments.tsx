import {createAsyncThunk} from "@reduxjs/toolkit";
import {commentsService} from "../../../../services/api.service";
import {AxiosError} from "axios";

export const loadComments = createAsyncThunk(
    'commentSlice/loadComments',
    async (_,thunkAPI) =>{
        try{
            let comments = await commentsService.getAllComments();
            return thunkAPI.fulfillWithValue(comments);
        }catch (e){
            let error = e as AxiosError;
            return thunkAPI.fulfillWithValue(error?.response?.data);
        }
    }
);