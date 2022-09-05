import { legacy_createStore as createStore } from "redux";
let weight=0;

function reducer(state=weight,action) {
    if(action.type==='plus'){
        state++;
        return state;
    }else if(action.type==='minus'){
        state--;
        return state;
    }else{
        return state;
    }
}

let store = createStore(reducer);


export default store;

