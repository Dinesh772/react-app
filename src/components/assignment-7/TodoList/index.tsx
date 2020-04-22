import React, { Component } from 'react';
import { Wrapper,H1,TodosWrapper } from "./styledComponent";
import { toJS } from "mobx";
import { Todo } from "../Todo";
import { AddTodo } from "../AddTodo";
import { TodoFooter } from "../TodoFooter";

import stores from '../../../stores'
import NoDataView from "../../common/NoDataView";
import { observer } from "mobx-react";
import { todoModelType } from "../../../stores/TodoStore/models";
type todoArray={
    id:Number
    title:string
    completed:boolean
}
const todo=stores.todoList

@observer 
class TodoList extends Component {
    render() { 
        const eventList:Array<todoModelType>=toJS(todo.selectedFilteredList)
        const todos=todo.List
        const todoItems:any=<Todo list={eventList} /> 
        if(todos.length>0){
        return( 
        <Wrapper>
        <H1>todos</H1>
        <AddTodo />
        <TodosWrapper>
            {todoItems}
        </TodosWrapper>
        <TodoFooter />
        </Wrapper>
        );}
        else{
            return(
                <div className={`flex flex-col  w-full min-h-screen pt-24 items-center bg-gray-400`}>
                <h1 className={`text-6xl  text-gray-600`}>todos</h1>
                <AddTodo />
                <NoDataView />
                </div>  
            );
        }
    }
}
 
export default TodoList;