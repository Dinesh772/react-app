import React from 'react';
import CountryCard from './country-card';
class CreateCard extends React.Component{
    selectedCard=(country)=>{
        this.props.selectedCountry(country);
    }
   render(){
        const list=this.props.countriesList.map(el=> <CountryCard key={el.name} el={el} countriesList={this.props.countriesList} childClassName={this.props.childClassName} selectedCard={this.selectedCard}/>) ;
     return(
       <div className='cards-parent'>
       {list}
       </div>
         );   
   }
}
export {CreateCard};