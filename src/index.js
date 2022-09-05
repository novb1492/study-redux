import { legacy_createStore as createStore } from "redux";
let plus=document.querySelector('#plus');
let num=document.querySelector('#num');
let minus=document.querySelector('#minus');
let reducer=(state = 0,action)=>{
  if(action.type==='add'){
    state+=1;
  }else if(action.type==='minus'){
    state-=1;
  }
  return state;
};
let store=createStore(reducer);

store.dispatch({type:'add'});
console.log(store.getState());
store.dispatch({type:'minus'});
console.log(store.getState());
