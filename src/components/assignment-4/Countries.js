import React from 'react';
import CountryCard from './CountryCard';
class Countries extends React.Component{
    selectedCard=(country)=>{
        this.props.selectedCountry(country);
    }
   render(){
        const list=this.props.countriesList
      .map(el=> <CountryCard key={el.name} country={el} countriesList={this.props.Countries
      } childClassName={this.props.childClassName} selectedCard={this.selectedCard}/>) ;
     return(
       <div className='cards-parent'>
       {list}
       </div>
         );   
   } 
}
export {Countries};