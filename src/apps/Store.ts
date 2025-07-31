import { configureStore } from "@reduxjs/toolkit";
import cardSliceReducer from '../features/CardToADD/cardSlice';

const store = configureStore({
    reducer: {
        card: cardSliceReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
