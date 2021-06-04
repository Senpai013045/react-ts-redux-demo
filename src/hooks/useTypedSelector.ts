import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootStateType } from "../state";

export const useTypedSelector: TypedUseSelectorHook<RootStateType> =
  useSelector;
