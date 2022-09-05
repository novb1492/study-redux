import { useSelector,useDispatch } from "react-redux";

function Home() {
    const state = useSelector((state) => state);
    console.log(state);
    const dispatch = useDispatch();
    function plusF() {
        dispatch({type:'plus'});
    }
    return (
        <div className="App">
            Home
            <button onClick={plusF}>+</button>
        </div>
    );
}

 export default Home;
