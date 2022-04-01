import { combineReducers } from "redux";
import words from "./words";
import hidden from "./hidden";
import {persistStore, persistReducer, PersistConfig} from "redux-persist"
import AsyncStorage from "@react-native-community/async-storage";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    hidden,
    words,
});

// rootReducer 함수의 반환값 타입을 RootState type alias로 지정
//export type RootState = ReturnType<typeof rootReducer>;
type ReducersState = ReturnType<typeof rootReducer>;

const persistConfig : PersistConfig<ReducersState> = {
    key: 'word',
    storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
    reducer: persistedReducer,
    // middleware: getDefaultMiddleware({
    //     serializableCheck: false,
    // }),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
const persistor = persistStore(store);

declare module 'react-redux' {
    interface DefaultRootState extends ReducersState {}
}
export {store, persistor};
//export type RootState = ReturnType<typeof store.getState>;
//export type AppDispatch = typeof store.dispatch;
export default rootReducer;