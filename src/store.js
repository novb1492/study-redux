import { configureStore } from "@reduxjs/toolkit";
import { legacy_createStore as createStore,combineReducers  } from "redux";
import reducer from "./reducer/reducer";
import reducer2 from "./reducer/reducer2";
// (이전상태, 액션) => 다음상태
const rootReducer = combineReducers({
    reducer,
    reducer2
});
const store = configureStore({ reducer: rootReducer });



export default store;

