let reducer2 = (arr = ["hello"], action) => {
    switch (action.type) {
        case "add":
            return [...arr, { text: action.vale, id: action.id }];
        case "minus":
            return arr.filter(todo => todo!==action.id);
        default:
            return arr;
    }

};
export default reducer2;