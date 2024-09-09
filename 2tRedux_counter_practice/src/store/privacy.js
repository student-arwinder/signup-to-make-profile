import { createSlice } from "@reduxjs/toolkit";

const privacySlice = createSlice({
    name: 'privacy',
    initialState: false,
    reducer: {
        toggle: (state) => {
          return state = !state;
        },
        
    }
});

export const privacyActions = privacySlice.actions;
export default privacySlice;