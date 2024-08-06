import {createAsyncThunk} from "@reduxjs/toolkit";
import {usersService} from "../../../../services/api.service";
import {AxiosError} from "axios";
import {IUser} from "../../../../models/user/IUser";

export const loadUsers = createAsyncThunk(
    'userSlice/loadUsers',
    async (_,thunkAPI) =>{
        try{
            let response:IUser[] = await usersService.getAllUsers();
            if(response){
                return thunkAPI.fulfillWithValue(response);
            }
        }catch (e){
            let error = e as AxiosError;
            return thunkAPI.fulfillWithValue(error?.response?.data);
        }
    }
);
export const loadUser = createAsyncThunk(
    'userSlice/loadUser',
    async (id:number,thunkAPI) =>{
        try{
            let response:IUser =  await usersService.getUserById(id);
            return thunkAPI.fulfillWithValue(response);
        }catch (e){
            let error = e as AxiosError;
            return thunkAPI.fulfillWithValue(error?.response?.data)
        }
    }
)