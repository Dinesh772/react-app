import React from 'react'
import { observable } from "mobx"
import { observer } from "mobx-react"

@observer
class TypeScript extends React.Component{
    @observable object={
        name:'some name',
        city:'some city',
        age:200,
    }


    handleClick=()=>{
        this.object.name='Ganesh';
        this.object.city='Rjy';
        this.object.age=22;
    }
    render(){
        return(
        <div>
            <p>{this.object.name}</p>
            <p>{this.object.city}</p>
            <p>{this.object.age}</p>
            <button onClick={this.handleClick}>click me</button>
            </div>
        )
    }
}

export{TypeScript}