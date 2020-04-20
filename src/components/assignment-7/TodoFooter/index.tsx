import React from 'react';
import { toJS } from 'mobx';
import stores from '../../../stores';


const todoList=stores.todoList
class TodoFooter extends React.Component{
    handleAllButton=()=>{
        todoList.onFilterList('All')
    }
    handleActiveButton=()=>{
        todoList.onFilterList('Active')
    }
    handleCompletedButton=()=>{
        todoList.onFilterList('Completed')
    }
    handleClearCompletedButton=()=>{
        todoList.clearCompletedTodos()
    }
    render(){
        const list=toJS(todoList.List).filter(todo=>todo.isCompleted===false)
        const count=list.length
        
        if(toJS(todoList.List.length)!==0){
        return(
            <div className={`flex w-2/6  justify-between bg-white py-4 mt-1 shadow-todos p-1`}>
                <span>{count} items left</span>
                <button onClick={this.handleAllButton}>All</button>
                <button onClick={this.handleActiveButton}>Active</button>
                <button onClick={this.handleCompletedButton}>Completed</button>
                <button onClick={this.handleClearCompletedButton}>Clear Completed</button>
            </div>
        )
    }else{
        return(<div></div>)
    }
}
}
export{TodoFooter}