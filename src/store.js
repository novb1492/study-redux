import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer/reducer";
import reducer2 from "./reducer/reducer2";
import reducer3 from "./reducer/reducer3";

const store = configureStore({ reducer: {
    reducer,
    reducer2,
    reducer3
} });

/**
 *  툴킷 이전방식
 */
//import {combineReducers  } from "redux";
// (이전상태, 액션) => 다음상태
// const rootReducer = combineReducers({
//     reducer,
//     reducer2
// });
export default store;

