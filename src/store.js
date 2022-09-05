import { legacy_createStore as createStore,combineReducers  } from "redux";
import reducer from "./reducer/reducer";

// (이전상태, 액션) => 다음상태
const rootReducer = combineReducers({
    reducer
});
let store = createStore(rootReducer);


export default store;

