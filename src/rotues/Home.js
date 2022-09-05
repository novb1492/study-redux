import { useState } from "react";
import { useSelector } from "react-redux";


function Home() {
    let [text, setText] = useState("");
    const state = useSelector((state) => state);
    function sub(event) {
        event.preventDefault();
        console.log(state);
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

            </ul>
        </div>
    );
}

 export default Home;
