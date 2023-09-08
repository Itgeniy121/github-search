import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store";


export const useRedux: TypedUseSelectorHook<RootState> = useSelector