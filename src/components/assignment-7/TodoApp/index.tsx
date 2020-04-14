import React from 'react';
//import { observe } from 'mobx';
import { observer } from 'mobx-react';

import stores from '../../../stores'
import { toJS } from 'mobx'
import { Todo } from '../Todo';
import { AddTodo } from '../AddTodo';
import { TodoFooter } from '../TodoFooter';
//import { observable } from 'mobx';
const todo=stores.todoList
//const todoList=[]
type todoArray={
    id:Number
    title:string
    isChecked:boolean
}

@observer
class TodoApp extends React.Component{
    render(){
        const eventList:Array<todoArray>=toJS(todo.selectedFilteredList)
        const todoItems=<Todo list={eventList} />
        return(
            <div className={`flex flex-col  w-full min-h-screen pt-24 items-center bg-gray-400`}>
                <h1 className={`text-6xl  text-gray-600`}>todos</h1>
                <AddTodo />
        <div className={`flex-col w-2/6 flex justify-center items-center mt-1`}>{todoItems}</div>
        <TodoFooter />
            </div>

        );
    }
}
export {TodoApp}