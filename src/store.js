import { legacy_createStore as createStore } from "redux";

let reducer = (arr = [], action) => {
    switch (action.type) {
        case "add":
            return [...arr, { text: action.vale, id: action.id }];
        case "minus":
            return arr.filter(todo => todo!==action.id);
        default:
            return arr;
    }

};
let store = createStore(reducer);


export default store;

