import React from 'react';
import { observer } from 'mobx-react';
import stores from '../../../stores';
//import { isPlainObject } from "mobx/lib/internal";

const todo=stores.todoList
@observer
class AddTodo extends React.Component{

postData=(object:any)=>{
console.log(object)
const option={
    method:'POST',
    body:JSON.stringify(object),
    headers:{
        'content-Type':'application/json',
    }
};
fetch('http://jsonplaceholder.typicode.com/todos/',option)
.then(data=>data.json)
.then(data=>console.log('data',data))
}
handleChange=(event:any)=>{
    const value=event.target.value
    if(event.keyCode===13 && value!==''){
        event.target.value='';
            const object={
                userId:1,
                id:Math.random(),
                title:value,
                completed:false
            }
       todo.onAddTodo(object.title,object.id,object.completed)
       this.postData(object)
    }
}
    render(){
        return(
            <div className={`border-none w-2/6`}>
                <input className={`w-full text-2xl italic shadow-lg p-1`}  type="text" placeholder=" What needs to be done?" onKeyDown={this.handleChange} />
            </div>
        )
    }
}
export {AddTodo}