import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {v4 as uuidv4} from 'uuid';

export interface Word {
    id: string;
    wordTitle: string;
    wordBody: string;
    date: string;
}

// const initialState: Todo[] = [
//     {id: 1, text: '리액트 네이티브 배우기', done: true},
//     {id: 2, text: '상태 관리 배우기', done: false},
// ];
const initialState: Word[] = [];
// const initialState: Word[] = [
//     {id: '1', wordTitle: 'Log1', wordBody: 'Log1_Body', date: new Date()},
//     {id: '2', wordTitle: 'Log2', wordBody: 'Log2_Body', date: new Date()},
//     {id: '3', wordTitle: 'Log3', wordBody: 'Log3_Body', date: new Date()},
// ];

const todosSlice = createSlice({
    name: 'words',
    initialState: initialState,
    reducers: {
        add: {
            prepare(wordTitle: string, wordBody: string, date: string) {
                let nextId = uuidv4();
                const prepared = {payload: {
                    id: nextId, wordTitle, wordBody, date}};
                //nextId += 1;
                return prepared;
            },
            reducer(state, action: PayloadAction<{
                        id: string; wordTitle: string; wordBody: string; date: string}>) {
                state.unshift({
                    ...action.payload,
                    //done: false,
                });
            },
        },
        modify: {
            prepare(id: string, wordTitle: string, wordBody: string, date: string) {
                const nextId = id;
                const prepared = {payload: {
                    id: nextId, wordTitle, wordBody, date}};
                return prepared;
            },
            reducer(state, action: PayloadAction<{
                        id: string; wordTitle: string; wordBody: string; date: string}>) {
                return state.map((old_word) => old_word.id === action.payload.id ? action.payload : old_word,);
            },
        },
        remove(state, action: PayloadAction<string>) {
            //const index = state.findIndex((word) => word.id === action.payload);
            //state.splice(index);
            return state.filter((word) => word.id !== action.payload);
        },
        toggle(state, action: PayloadAction<string>) {
            const selected = state.find((word) => word.id === action.payload);
            if (!selected) {
                return;
            }
            //selected.done = !selected.done;
        },
    },
});

export const {add, modify, remove, toggle} = todosSlice.actions;
export default todosSlice.reducer;