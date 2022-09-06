import { createSlice } from "@reduxjs/toolkit";

let init={
    weight:0,
}

const reducer3Slice=createSlice({
    name:"reducer3",
    initialState:init,
    reducers:{
        plus(state,action){
            state.weight=state.weight+action.payload.value;
        },
        minus(state,action){
            state.weight=state.weight-action.payload.value;
        }
    }
})

export default reducer3Slice.reducer;
export const reducer3Action=reducer3Slice.actions;

/**
 * 툴킷 이전방식
 */
// export default function reducer3(state=init,action) {
//     console.log('c');
//     if(action.type==='plus'){
//         console.log(action);
//         return state.weight+action.value;
//     }else if(action.type==='minus'){
//         return state.weight-action.value;
//     }else{
//         return state;
//     }
// }