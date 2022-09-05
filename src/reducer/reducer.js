let weight=0;
export default function reducer(state=weight,action) {
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