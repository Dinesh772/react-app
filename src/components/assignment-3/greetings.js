import React from 'react';
class Greetings extends React.Component{
    state={
     name:'',
     message:'',
     count:0,
     parent:0
    }
    handleUserInput=(event)=>{
        const name=event.target.value;
        this.setState(state=>({
            name:name
        }))
        
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        this.displayMessage();
        event.target.value='';
    }
    displayMessage=()=>{
        this.setState(state=>({
            message:`Hi ${this.state.name}, have a nice day!`
        }))
        this.onIncrement();
    }
    render(){
        
        return(
            <form onSubmit={this.handleSubmit}>
            <input
            type="text"
            placeholder="Enter your Name"
            onChange={this.handleUserInput}
            /><br/>
             <input type="submit" value="Submit" /><br/>
             <span>{this.state.message}</span>
            </form>
            )
    }
}

export {Greetings}