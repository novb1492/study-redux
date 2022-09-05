import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import {add} from "../reducer/reducer";
import {add2}  from "../reducer/reducer2";

function Home() {
    let [text, setText] = useState("");
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    function sub(event) {
        event.preventDefault();
        dispatch(add({value:'dsd',id:'123'}))
        dispatch(add2({value:'fff',id:'567'}))
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
                {JSON.stringify(state.reducer)}
                {JSON.stringify(state.reduce2)}
            </ul>
        </div>
    );
}

 export default Home;
