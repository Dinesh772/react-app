/* eslint-disable array-callback-return */
import { observable, action, toJS,reaction } from 'mobx'

type todoArray={
    id:Number
    title:string
    isChecked:boolean
}
class TodoList {
@observable List:Array<todoArray>=[]
@observable selectedFilteredList:Array<todoArray>=[]



reaction1=reaction(()=>toJS(this.List).map(obj=>obj.id),(id)=>console.log('id===>',id))
@action.bound
onAddTodo=(item:string,id:Number,status:boolean)=>{
    const todo:todoArray={
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
onUpdateTodo=(value:string,id:Number)=>{
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
onRemoveClicked=(id:Number)=>{
    const list=toJS(this.List)
    const updatedList=list.filter(todo=>{if(todo.id!==id){return todo}})

    this.List=updatedList
    this.selectedFilteredList=updatedList
}
@action.bound
onFilterList=(type:String)=>{
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