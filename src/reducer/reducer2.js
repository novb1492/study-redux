export default function reducer2 (arr = [{text:"hello",id:1}], action)  {
    console.log('reducer2');
    fetch('http://localhost:808');
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
