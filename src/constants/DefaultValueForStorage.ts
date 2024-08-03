import {StoreType} from "../models/storeModel/StoreModel";

const defaultValueForStorage:StoreType = {
    usersStore:{
        allUsers:[]
    },
    postsStore:{
        allPosts:[]
    }
}

export {
    defaultValueForStorage
}