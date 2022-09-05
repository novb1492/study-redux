import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import {add2}  from "../reducer/reducer2";
import {add} from "../reducer/reducer";
import List from "./List";

function Home() {
    let [text, setText] = useState("");
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    function sub(event) {
        event.preventDefault();
        console.log(state);
        dispatch(add({value:'fff',id:'567'}));

    }
    function change(event) {
        setText(event.target.value);
    }
    return (
        <div className="App">
            Home
            <form onSubmit={sub}>
                <input type="text" value={text} onChange={change}></input>
                <button >저장</button>
            </form>
            <ul>
                
                {state.reducer2.map(state=>{
                    console.log(state);
                    <List obj={state} key={state.id}/>
                })}
            </ul>
        </div>
    );
}

 export default Home;
