import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { add, remove, toggle } from "~/slices/words";

export default function useWordsActions() {
    const dispatch = useDispatch();

    return useMemo(
        () =>
        bindActionCreators(
            {
                add,
                remove,
                toggle,
            },
            dispatch,
        ),
        [dispatch],
    );
}