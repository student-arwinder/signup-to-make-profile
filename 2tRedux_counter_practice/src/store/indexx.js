

import {configureStore} from "@reduxjs/toolkit";
import counterSlice from "./counter";
import privacySlice from "./privacy";






const countStore = configureStore({reducer:{
counter: counterSlice.reducer,
privacy: privacySlice.resucer

}});




export default countStore;













/*

const INITIAL_VALUE = {
    counter: 0,
    privacy: false,
}
    const countReducer =(store = INITIAL_VALUE, action) => {
    let newStore = store;

    if(action.type === 'INCREMENT'){
        newStore =  {counter : store.counter + 1, privacy: store.privacy};

    }
    else if(action.type === 'DECREMENT'){
        newStore = { ...store, counter : store.counter - 1, };
    }
    else if(action.type === 'ADD'){
        newStore = {...store, counter : store.counter + Number(action.payload.num), privacy: store.privacy}
    }
    else if(action.type === 'SUBS'){
        newStore = {...store, counter : store.counter - Number(action.payload.num), privacy: store.privacy}
    }
    else if(action.type === 'MUL'){
        newStore = {...store, counter : store.counter * Number(action.payload.num)}
    }
    else if(action.type === 'PRIVACY TOGGLE'){
        newStore =  {...store, privacy: !store.privacy};
    }
    return newStore;
}*/