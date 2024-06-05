//predefined hooks in redux
import {
  TypedUseSelectorHook,
  UseDispatch,
  useDispatch,
  useSelector,
} from "react-redux";
import { RootState, AppDispatch } from "./store";
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
