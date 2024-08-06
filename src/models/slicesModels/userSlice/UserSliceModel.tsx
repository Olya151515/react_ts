import {IUser} from "../../user/IUser";

export type UserSliceModel = {
    users:IUser[],
    isLoaded:boolean,
    error:string,
    user:IUser | null
}
export const initUserState:UserSliceModel = {
    users:[],
    isLoaded:false,
    error:'',
    user:null
}