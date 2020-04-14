import React from 'react';
import { observer } from 'mobx-react';
import stores from '../../../stores';

const todo=stores.todoList
@observer
class AddTodo extends React.Component{
handleChange=(event)=>{
    const value=event.target.value
    if(event.keyCode===13 && value!==''){
        event.target.value='';
       todo.onAddTodo(value,Math.random(),false)
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