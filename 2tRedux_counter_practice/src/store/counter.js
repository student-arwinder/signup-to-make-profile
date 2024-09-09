import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name: 'counter',
    initialState: {counterVal: 0},
    reducer: {
        increment:(state) => {
            state.currentVal++;
        },
        decrement: (state) => {
            state.currentVal--;
        },
        add: (state, action) => {
            state.currentVal += Number(action.payload.num);
        },
        subs: (state, action) => {
            state.currentVal -=  Number(action.payload.num);
         },
         mul: (state, action) => {
            state.currentVal *= Number(action.payload.num);
         }

    }

});

export const counterActions = counterSlice.actions;

export default counterSlice ;