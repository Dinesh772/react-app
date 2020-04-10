import React from 'react';
//import { observe } from 'mobx';
import { observer } from 'mobx-react';
import { AddTodo } from '../AddTodo';
import stores from '../../../stores'
import { toJS ,reaction} from 'mobx'
import { Todo } from '../Todo';
import { TodoFooter } from '../TodoFooter';
//import { observable } from 'mobx';
const todo=stores.todoList
//const todoList=[]
@observer
class TodoApp extends React.Component{
    reaction1=reaction(()=>toJS(todo.List).map(obj=>obj.title),(name)=>console.log('name===>',name))
    render(){
        
        const list=toJS(todo.selectedFilteredList)
        console.log('-->',list)
        const todoItems=<Todo list={list} />
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