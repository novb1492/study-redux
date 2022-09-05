import { useState } from "react";


function Home() {
    let[text,setText]=useState("");
    function sub(event) {
        event.preventDefault();
    }
    function change(event) {
        setText(event.target.value);
    }
    function save() {
        
    }
    return (
      <div className="App">
        Home
        <form onSubmit={sub}>
            <input type="text" value={text} onChange={change}></input>
            <button onClick={save} >저장</button>
        </form>
      </div>
    );
  }
  
  export default Home;
  