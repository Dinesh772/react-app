import React from 'react'
class FavouriteDessert extends React.Component{
    state={
        selectedDessert:'',
        favoriteDessert:''
    }
    handleUserInput=(event)=>{
        const value=event.target.value.toUpperCase()
        
        this.setState(state=>({
            selectedDessert:value,
        }))
        
    }
    handleSubmit=(event)=>{
        event.preventDefault()
        this.displayMessage()
    }
    displayMessage=()=>{
        
        this.setState(state=>({
            favoriteDessert:`My favorite Dessert is ${this.state.selectedDessert}`
        }))
    }
    renderDessertOptions=()=>{
        
    }
    render(){
        return(
            <div>
            <p>What is your favorite Dessert ?</p>
            <form >
            
            <label><input type="radio" value={this.props.dessertList[0]} onClick={this.handleUserInput} name="favoriteDessert" />{this.props.dessertList[0]}</label><br/>
            <label><input type="radio" value={this.props.dessertList[1]} onClick={this.handleUserInput} name="favoriteDessert"  />{this.props.dessertList[1]}</label><br/>
            <label><input type="radio" value={this.props.dessertList[2]} onClick={this.handleUserInput} name="favoriteDessert"  />{this.props.dessertList[2]}</label><br/>
            <label><input type="radio" value={this.props.dessertList[3]} onClick={this.handleUserInput} name="favoriteDessert"  />{this.props.dessertList[3]}</label><br/>
            <label><input type="radio" value={this.props.dessertList[4]} onClick={this.handleUserInput} name="favoriteDessert"  />{this.props.dessertList[4]}</label><br/>
            <label><input type="radio" value={this.props.dessertList[5]} onClick={this.handleUserInput}  name="favoriteDessert" />{this.props.dessertList[5]}</label><br/>
            
            <input type="submit" onSubmit={this.handleSubmit} value="Make Your Choice"/>
            </form>
            <span>{this.state.favoriteDessert}</span>
            </div>
            )
    }
}



export {FavouriteDessert}

/*

* When the user clicks on 'Favourite Dessert' link, the page should be navigated to `/form-components/favorite-dessert`.
* Create a component named `FavouriteDessert` which has the following methods, props, and state variables
    * Methods
        - handleUserInput
        - handleSubmit
        - displayMessage
        - renderDessertOptions
    * State variables
        - selectedDessert
        - favoriteDessert
    * Props
        - dessertList
* Refer preview-2
* Display the selected dessert below the submit button on submit
* Name of the selected dessert should be displayed in capital letters.
* Accept the `dessertList` as a prop to this component
    - ["Vanilla", "Butterscotch", "Gulab Jamum", "Yoghurt Pots", "Baked Banana", "Chocolate"]
* On click back icon user should be navigated to "form components"


*/