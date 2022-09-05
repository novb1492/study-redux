let reducer2 = (arr = [{value:"hello",id:1}], action) => {
    switch (action.type) {
        case "add":
            let obj=action.obj;
            return [...arr, { text: obj.value, id: obj.id }];
        case "minus":
            return arr.filter(todo => todo!==action.id);
        default:
            return arr;
    }

};

export const add2 = (obj) => ({ type: 'add', obj });
export default reducer2;