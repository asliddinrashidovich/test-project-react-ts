import { configureStore } from "@reduxjs/toolkit"
import cardEditSlice  from "../reducers/cardEditSlice"

const store = configureStore({
    reducer: {
      cardEditSlice: cardEditSlice
    },
    devTools: process.env.NODE_ENV !== 'production'
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store