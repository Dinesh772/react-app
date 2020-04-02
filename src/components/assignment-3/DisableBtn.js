import React from 'react'

class DisableOrEnable extends React.Component{
    state={
        isDisableButtonChecked:false,
        showMessage:''
    }
    handleChange=()=>{
        if(this.state.isDisableButtonChecked===false){
        this.setState(state=>({
            isDisableButtonChecked:true
        }))
        this.displayMessage('I am Disable')
        }
        else{
        this.setState(state=>({
            isDisableButtonChecked:false
        })) 
        this.displayMessage('')
        }
    }
    handleSubmit=(event)=>{
        event.preventDefault()
        this.displayMessage('Hi i am Enable')
    }
    displayMessage=(text)=>{
        this.setState(state=>({
            showMessage:text,
        }))
    }
    render(){
        return(
            <div>
            <form >
            <label><input type="checkbox" onClick={this.handleChange}/>Disable</label>
            <input type="submit" value="Click me" onClick={this.handleSubmit} disabled={this.state.isDisableButtonChecked}/>
            </form>
            <p>{this.state.showMessage}</p>
            </div>
            );
    }
}
export {DisableOrEnable}
/*

* When the user clicks on 'Disable or Enable' link, the page should be navigated to `/form-components/disabled-enabled`
Create a component named `DisableOrEnable` which has the following methods, props, and state variables
    * Methods
        - handleChange
        - handleSubmit
        - displayMessage
    * State variables
        - isDisableButtonChecked
        - showMessage
* Refer preview-5
* Display the enable or disable state message below the click me button
* On click back icon user should be navigated to "form components"

*/