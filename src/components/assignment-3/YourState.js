import React from 'react';
class YourState extends React.Component{
    state={
        selectedSate:'',
        submittedState:''
    }
    handleChangeState=(event)=>{
        const selectedValue=event.target.value
        this.setState(state=>({
            selectedState:selectedValue,
        }))
    }
    handleSubmit=(event)=>{
        event.preventDefault()
        this.displayMessage()
    }
    displayMessage=()=>{
        this.setState(state=>({
            submittedState:`I am from "${this.state.selectedState}" state.`
        }))
    }
    render(){
        return( 
        <div>
        <form>
        <select onChange={this.handleChangeState}>
        <option value="" >Select Your State</option>
        <option value={this.props.stateList[0]} >{this.props.stateList[0]}</option>
        <option value={this.props.stateList[1]}>{this.props.stateList[1]}</option>
        <option value={this.props.stateList[2]}>{this.props.stateList[2]}</option>
        <option value={this.props.stateList[3]}>{this.props.stateList[3]}</option>
        <option value={this.props.stateList[4]}>{this.props.stateList[4]}</option>
        <option value={this.props.stateList[5]}>{this.props.stateList[5]}</option>
      </select><br/>
      <input type="submit" onClick={this.handleSubmit}/>
      </form>
      <p>{this.state.submittedState}</p>
      </div>
            );
    }
}
export {YourState}
/*
* When the user clicks on 'Your State' link, the page should be navigated to '/form-components/your-state`
* Create a component named `YourState` which has the following methods, props, and state variables
    * Methods
        - handleChangeState
        - handleSubmit
        - displayMessage
    * State variables
        - selectedState
        - submittedState
    * Props
        - stateList
* Refer preview-4
* Display the selected state below the submit button on submit
* Accept the `stateList` as a prop to this component
    - ["Andhra Pradesh", "Telangana", "Tamil Nadu", "Kerala", "Karnataka", "Haryana"]
* On click back icon user should be navigated to "form components"


*/