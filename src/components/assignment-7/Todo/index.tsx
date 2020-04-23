import React from 'react';

import stores from '../../../stores'
import { observer } from "mobx-react";

const todoList=stores.todoList

@observer
class Todo extends React.Component<{list:any}>{
    handleDeleteBtn=(id:Number)=>{
       todoList.onRemoveClicked(id)
    }
    render(){
        const list=this.props.list
        
        const todos=list.map((todo:any)=>(  
        <div key={todo.id} className={`flex justify-between text-2xl w-full p-1`}>
        <div className={`w-full`}>
        <input type="checkbox"  className={`h-5 w-5  `} defaultChecked={todo.completed} onClick={todo.onCompleted} />
        <input type="text" key={todo.id} className={` ${todo.completed===true?`line-through text-teal-300 select-none bg-white `:`no-underline text-black`}  ml-1 w-11/12  `} disabled={todo.completed}  defaultValue={todo.title} onChange={(event)=>todo.onUpdateTodo(event.target.value)} />
        </div>
        <button onClick={()=>this.handleDeleteBtn(todo.id)}>&times;</button>
        </div>
        ))
        return(
            <div className={`bg-white w-full flex-col `}>
                {todos}
            </div>
        )
    }
} 
export {Todo}