import React from 'react';
import { observer } from 'mobx-react';
import Loader from 'react-loader-spinner';

import stores from '../../../stores'
import { toJS, observable } from 'mobx'
import { Todo } from '../Todo';
import { AddTodo } from '../AddTodo';
import { TodoFooter } from '../TodoFooter';
const todo=stores.todoList
type todoArray={
    id:Number
    title:string
    isCompleted:boolean
}

@observer
class TodoApp extends React.Component{
@observable appStatus:string='todos'
@observable todos:Array<todoArray>=[]
@observable loading:boolean=true;
    getData=()=>{
        fetch('http://jsonplaceholder.typicode.com/todos/')
        .then(response=>response.json())
        .then(data=>data.forEach(each=>{
            if(each.userId===1){
            todo.onAddTodo(each.title,each.id,each.completed)}
        
        }))
        .then(data=>{this.appStatus='todos'; this.loading=false})
        .catch(error=>this.appStatus='networkError')
    }
    componentDidMount=()=>{
       this.getData()
      // setTimeout(()=>{this.loading=false},500)
    }
    render(){
        console.log('todoApp')
        const eventList:Array<todoArray>=toJS(todo.selectedFilteredList)
        const todoItems:any=<Todo list={eventList} />
        const todoList=todo.List
        console.log(todoItems.props.list.length)
        if(this.appStatus==='todos' && todoList.length!==0 ){
            return(
                <div className={`flex flex-col  w-full min-h-screen pt-24 items-center bg-gray-400`}>
                    <h1 className={`text-6xl  text-gray-600`}>todos</h1>
                    <AddTodo />
            <div className={`flex-col w-2/6 flex justify-center items-center mt-1`}>
                {todoItems}
            </div>
            
            <TodoFooter />
                </div>
        );
    }
    else if(this.appStatus==='networkError'){
        return(
            <div className='flex flex-col justify-center items-center h-screen'>
                <img src='https://images.squarespace-cdn.com/content/v1/59135144d482e99e6a24a30e/1515199074566-XEZF9IEB7ZPKVPK79IXO/ke17ZwdGBToddI8pDm48kPoswlzjSVMM-SxOp7CV59BZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PI6FXy8c9PWtBlqAVlUS5izpdcIXDZqDYvprRqZ29Pw0o/wireless+network+connection+and+wired+network+connection?format=750w' alt='network error pic'/>
                {/* <span className='text-3xl font-medium'>Network Error</span> */}
                <button className='text-xl bg-indigo-500  text-white p-2 mt-2 rounded-lg font-medium ' onClick={this.getData}>Try Again</button>

            </div>
        )
    }else if(todoList.length===0 && this.loading===false){
        return(
            <div className={`flex flex-col  w-full min-h-screen pt-24 items-center bg-gray-400`}>
            <h1 className={`text-6xl  text-gray-600`}>todos</h1>
            <AddTodo />
            <span className='mt-12 text-lg '>No data found!</span>
        </div>
        );
        }
    else{
        return(
        <div className='flex flex-col justify-center items-center h-screen'>
        <Loader type="ThreeDots"  color="indigo" height={100} width={100}/>
        </div>);
    }
    }
}
export {TodoApp}