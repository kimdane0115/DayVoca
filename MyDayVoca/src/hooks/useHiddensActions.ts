import { useDispatch } from "react-redux";
import { hiddenSet } from "~/slices/hidden";
import { bindActionCreators } from "redux";
import { useMemo } from "react";

export default function useHiddensActions() {
    const dispatch = useDispatch();
    // return {
    //     authorize: (user: User) => dispatch(authorize(user)),
    //     logout: () => dispatch(logout()),
    // };
    return useMemo(() => bindActionCreators({hiddenSet}, dispatch), [
        dispatch,
    ]);
}