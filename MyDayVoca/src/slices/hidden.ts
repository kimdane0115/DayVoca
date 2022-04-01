import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface WordHidden {
    radioState: string;
    isWordHidden: boolean;
    isBodyHidden: boolean;
}

interface HiddenState {
    wordHidden: WordHidden | null;
}

const initialState: HiddenState = {
    wordHidden: null,
};

const hiddenlice = createSlice({
    name: 'hidden',
    initialState,
    reducers: {
        hiddenSet(state, action: PayloadAction<WordHidden>) {
            //state.user = action.payload;
            state.wordHidden = action.payload;
        },
    },
});

export default hiddenlice.reducer;
export const {hiddenSet} = hiddenlice.actions;