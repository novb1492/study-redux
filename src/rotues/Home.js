import { useSelector,useDispatch } from "react-redux";
import { reducerAction } from "../reducer/reducer";
import { reducer2Action} from "../reducer/reducer2";
import { reducer3Action} from "../reducer/reducer3";
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
        dispatch(reducer2Action.plus({value:2}));
        dispatch(reducer3Action.plus({value:3}));
    }
    function minusF() {
        dispatch(reducerAction.minus({value:1}));
        dispatch(reducer2Action.minus({value:2}));
        dispatch(reducer3Action.minus({value:3}));
    }
    return (
        <div className="App">
            Home
            <button onClick={plusF}>+</button>
            <button onClick={minusF}>-</button>
        </div>
    );
}

 export default Home;
