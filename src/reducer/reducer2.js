let weight=0;
export default function reducer2(state=weight,action) {
    if(action.type==='devision'){
        state++;
        return state;
    }else if(action.type==='minus'){
        state--;
        return state;
    }else{
        return state;
    }
}