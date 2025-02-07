import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store.ts";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/store.ts";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
