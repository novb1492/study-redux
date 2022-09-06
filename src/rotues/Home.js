import { useSelector,useDispatch } from "react-redux";
import { reducerAction } from "../reducer/reducer";
function Home() {
    const state = useSelector((state) => state);
    console.log(state);
    const dispatch = useDispatch();
    function plusF() {
        /**
         * 툴킷 이전방식
         */
        // dispatch({type:'plus',value:1});
        dispatch(reducerAction.plus({value:1}));
    }
    return (
        <div className="App">
            Home
            <button onClick={plusF}>+</button>
        </div>
    );
}

 export default Home;
