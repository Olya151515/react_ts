import {createContext} from "react";
import {StoreType} from "../models/storeModel/StoreModel";
import {defaultValueForStorage} from "../constants/DefaultValueForStorage";

export let MYContext = createContext<StoreType>(defaultValueForStorage)