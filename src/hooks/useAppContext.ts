import {StoreType} from "../models/storeModel/StoreModel";
import {useContext} from "react";
import {MYContext} from "../store/MyContext";

export const useAppContext = ():StoreType => useContext(MYContext);