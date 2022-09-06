import { createSlice } from "@reduxjs/toolkit";

let init={
    weight:0,
}

const reducer2Slice=createSlice({
    name:"reducer2",
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

export default reducer2Slice.reducer;
export const reducer2Action=reducer2Slice.actions;
/**
 * 툴킷 이전방식
 */
// export default function reducer2(state=init,action) {
//     console.log('b');
//     if(action.type==='plus'){
//         console.log(action);
//         return state.weight+action.value;
//     }else if(action.type==='minus'){
//         return state.weight-action.value;
//     }else{
//         return state;
//     }
// }