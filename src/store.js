import { legacy_createStore as createStore ,combineReducers} from "redux";
import reducer from "./reducer/reducer";
import reducer2 from "./reducer/reducer2";
let rootReducer = combineReducers({reducer,reducer2});

let store = createStore(rootReducer);


export default store;

