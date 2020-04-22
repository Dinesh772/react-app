import { observable } from "mobx";

export type todoModelType={
    id:number
    title:string
    completed:boolean
}

class TodoModel{
    @observable id
    @observable title
    @observable completed
    constructor(object:todoModelType){
        console.log('obj-->',object)
        this.id=object.id
        this.title=object.title
        this.completed=object.completed
    }
   // @action.bound
    onCompleted=()=>{
        this.completed=!this.completed
        console.log(this.completed)
    }
    onUpdateTodo=(text)=>{
        this.title=text
        console.log('tit-->',this.title)
    }
}
export default TodoModel