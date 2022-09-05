import { legacy_createStore as createStore,combineReducers  } from "redux";
import reducer from "./reducer/reducer";
import reducer2 from "./reducer/reducer2";
// (이전상태, 액션) => 다음상태
const rootReducer = combineReducers({
    reducer,
    reducer2
});
let store = createStore(rootReducer);


export default store;

