
let init={
    weight:0,
}

export default function reducer2(state=init,action) {
    console.log('b');
    if(action.type==='plus'){
        console.log(action);
        return state.weight+action.value;
    }else if(action.type==='minus'){
        return state.weight-action.value;
    }else{
        return state;
    }
}