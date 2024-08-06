import {useDispatch, useSelector} from "react-redux";
import {store} from "../redux/store/Store";

export  const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();