import React from 'react';
class VisitedCities extends React.Component{
    state={
        visitedCities:[],
        selectedCities:'',
        cityOptions:[],
    }
    handleUserInput=(event)=>{
        const value=event.target.value;
        const cities=this.state.visitedCities;
        if(!cities.includes(value)){
         cities.push(value);
        this.setState(state=>({
            visitedCities:cities
        }))
        }
        else{
            const updatedCities=cities.filter(el=>el!==value)
            this.setState(state=>({
            visitedCities:updatedCities
        }))
    }
    }
    handleSubmit=(event)=>{
        event.preventDefault()
        if(this.state.visitedCities.length!==0){
        this.displayVisitedCitiesMessage()   }
        else{
            this.setState(state=>({
                selectedCities:''
            }))
            alert('Please select atleast one city');
        }
    }
    displayVisitedCitiesMessage=()=>{
        this.setState(state=>({
            selectedCities:`I have visited these cities ${this.state.visitedCities.join(',')}`
        }))
    }
    render(){
        return(
            <div>
            <p>Which of the following cities you have visited ?</p>
            <form>
            <label><input type="checkbox" value={this.props.citiesList[0]} onClick={this.handleUserInput} />{this.props.citiesList[0]}</label><br/>
            <label><input type="checkbox" value={this.props.citiesList[1]} onClick={this.handleUserInput}/>{this.props.citiesList[1]}</label><br/>
            <label><input type="checkbox" value={this.props.citiesList[2]} onClick={this.handleUserInput}/>{this.props.citiesList[2]}</label><br/>
            <label><input type="checkbox" value={this.props.citiesList[3]} onClick={this.handleUserInput}/>{this.props.citiesList[3]}</label><br/>
            <label><input type="checkbox" value={this.props.citiesList[4]} onClick={this.handleUserInput}/>{this.props.citiesList[4]}</label><br/>
            <input type="submit" value="Make your choice" onClick={this.handleSubmit}/>
            </form>
            <p>{this.state.selectedCities}</p>
            </div>
            )
    }
}
export {VisitedCities}