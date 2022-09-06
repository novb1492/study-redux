
let init={
    weight:0,
}

export default function reducer3(state=init,action) {
    console.log('c');
    if(action.type==='plus'){
        console.log(action);
        return state.weight+action.value;
    }else if(action.type==='minus'){
        return state.weight-action.value;
    }else{
        return state;
    }
}