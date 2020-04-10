/* eslint-disable array-callback-return */
//import React from 'react'
import { observable, action, toJS,reaction } from 'mobx'


class TodoList {
@observable List=[]
@observable selectedFilteredList=[]



reaction1=reaction(()=>toJS(this.List).map(obj=>obj.id),(id)=>console.log('id===>',id))
@action.bound
onAddTodo=(item,id,status)=>{
    const todo={
        id:id,
        title:item,
        isChecked:status
    }
   
   const list=this.List
   list.push(todo)
    this.List=list
    this.selectedFilteredList=this.List
  
}
@action.bound
onUpdateTodo=(value,id)=>{
    const list=toJS(this.List)
    const updatedList=list.map(todo=>{
        if(todo.id===id){
            todo.title=value;
            
            return todo
        }else{
            return todo
        }
    })
 
    this.List=updatedList
    this.selectedFilteredList=this.List
}
@action.bound
onCheckBoxChecked=(value,id)=>{
    const list=toJS(this.List)
    const updatedList=list.map(todo=>{
        if(todo.id===id){
            todo.isChecked=value;
            return todo
        }else{
            return todo
        }
    })
   
    this.List=updatedList
    this.selectedFilteredList=updatedList
    
}


@action.bound
onRemoveClicked=(id)=>{
    const list=toJS(this.List)
    // eslint-disable-next-line array-callback-return
    const updatedList=list.filter(todo=>{if(todo.id!==id){return todo}})

    this.List=updatedList
    this.selectedFilteredList=updatedList
}
@action.bound
onFilterList=(type)=>{
    const list=toJS(this.List)
if(type==='All'){
    this.selectedFilteredList=this.List
}else if(type==='Active'){
    const filteredList=list.filter(todo=>{if(todo.isChecked===false){return todo}})
   
    this.selectedFilteredList=filteredList
}else if(type==='Completed'){
    const filteredList=list.filter(todo=>{if(todo.isChecked===true){return todo}})
    this.selectedFilteredList=filteredList
  
}
}
@action.bound
clearCompletedTodos=()=>{
    const list=toJS(this.List)
const filteredList=list.filter(todo=>{if(todo.isChecked!==true){return todo}})
this.List=filteredList
this.selectedFilteredList=filteredList
}

}
export {TodoList}