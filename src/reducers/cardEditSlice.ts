import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ClickState {
    clickState: boolean;
}

const initialState: ClickState = {
    clickState: false,
};
export const cardEditSlice = createSlice({
    name: 'cardEditSlice',
    initialState,
    reducers: {
        clicketItemOpen: (state, action: PayloadAction<boolean>) => {  
            state.clickState = action.payload;  
        },  
        clicketItemClose: (state) => {
            state.clickState = false
        }
    }

})

export const {clicketItemOpen, clicketItemClose} = cardEditSlice.actions
export default cardEditSlice.reducer