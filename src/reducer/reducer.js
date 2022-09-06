import { createSlice } from "@reduxjs/toolkit";

let init={
    weight:0,
}
const reducerSlice=createSlice({
    name:'reducer',
    initialState:init,
    reducers:{
        plus(state,action){
            state.weight=state.weight+action.payload.value;
        },
        minus(state,action){
            state.weight=state.weight-action.value;
        }
    }
})

export default reducerSlice.reducer;
export const reducerAction=reducerSlice.actions;
/**
 * 툴킷이전 방식
 */
// export default function reducer(state=init,action) {
//     console.log('a');
//     if(action.type==='plus'){
//         return state.weight+action.value;
//     }else if(action.type==='minus'){
//         return state.weight-action.value;
//     }else{
//         return state;
//     }
// }