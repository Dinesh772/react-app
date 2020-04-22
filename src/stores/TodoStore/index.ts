/* eslint-disable array-callback-return */
import { observable, action, toJS } from 'mobx'
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise"
import { API_INITIAL } from "@ib/api-constants"
import TodoModel, { todoModelType } from "./models"

type todoArray={
    id:Number
    title:string
    completed:boolean
}
class TodoList{
@observable List:Array<todoModelType>=[]
@observable selectedFilteredList:Array<todoModelType>=[]
@observable getTodosApiStatus
@observable getTodosApiError
todoService
constructor(todoService){
    this.todoService=todoService
    this.init()
}

@action.bound
init(){
    this.List=[]
    this.selectedFilteredList=[]
    this.getTodosApiStatus=API_INITIAL
    this.getTodosApiError=null
}
@action
    clearStore(){
        this.init()
    }
@action.bound
setTodosAPIStatus(apiStatus){
    this.getTodosApiStatus=apiStatus
}

@action.bound
setTodosResponse(todos){
    const todosList=todos.filter(eachTodo=>eachTodo.userId===1)
    todosList.map(eachTodo=>
            this.onAddTodo(eachTodo.title,eachTodo.id,eachTodo.completed)
    )
}

@action.bound
setTodosAPIError(error){
    this.getTodosApiError=error
}

@action.bound
getTodosApi(){
    const todoPromise=this.todoService.getTodosAPI()
    return bindPromiseWithOnSuccess(todoPromise)
    .to(this.setTodosAPIStatus,this.setTodosResponse)
    .catch(this.setTodosAPIError)
}

@action.bound
onAddTodo=(item:string,id:number,status:boolean)=>{
    const todo:todoModelType={
        id:id,
        title:item,
        completed:status
    }
      const list=this.List
       const todoInstance:todoModelType=new TodoModel(todo)
       console.log('todo-->',todoInstance)
         list.push(todoInstance)
    this.List=list
    this.selectedFilteredList=this.List
    console.log('-->',toJS(this.selectedFilteredList))
}

@action.bound
onRemoveClicked=(id:Number)=>{
    console.log('remove todo')
    const list=(this.List)
    const updatedList=list.filter(todo=>{if(todo.id!==id){return todo}})
    this.List=updatedList
    this.selectedFilteredList=updatedList
}
@action.bound
onFilterList=(type:String)=>{
    const list=(this.List)
if(type==='All'){
    this.selectedFilteredList=this.List
}else if(type==='Active'){
    const filteredList=list.filter(todo=>{if(todo.completed===false){return todo}})
   
    this.selectedFilteredList=filteredList
}else if(type==='Completed'){
    const filteredList=list.filter(todo=>{if(todo.completed===true){return todo}})
    this.selectedFilteredList=filteredList
  
}
}
@action.bound
clearCompletedTodos=()=>{
    const list=(this.List)
const filteredList=list.filter(todo=>todo.completed===false)
this.List=filteredList
this.selectedFilteredList=filteredList
console.log('selected-->',toJS(this.selectedFilteredList))
}

}
export {TodoList}