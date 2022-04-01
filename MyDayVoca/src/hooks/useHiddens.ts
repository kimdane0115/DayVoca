import { useSelector } from "react-redux";

export default function useHiddens() {
    //return useSelector((state: RootState) => state.auth.user);
    return useSelector((state) => state.hidden);
}