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
function change() {
  console.log(store.getState());
}
store.subscribe(change);

plus.addEventListener("click",()=>store.dispatch({type:'add'}));
minus.addEventListener("click",()=>store.dispatch({type:'minus'}));