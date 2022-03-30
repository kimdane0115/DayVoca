import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { add, modify, remove, toggle } from "~/slices/words";

export default function useWordsActions() {
    const dispatch = useDispatch();

    return useMemo(
        () =>
        bindActionCreators(
            {
                add,
                modify,
                remove,
                toggle,
            },
            dispatch,
        ),
        [dispatch],
    );
}