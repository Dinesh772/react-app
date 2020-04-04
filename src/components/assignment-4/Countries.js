import React from 'react';
import CountryCard from './CountryCard';
import styled from '@emotion/styled'
const Wrapper=styled.div`
display:flex;
flex-wrap:wrap;
width:100%;
`
class Countries extends React.Component{
    selectedCard=(country)=>{
        this.props.selectedCountry(country);
    }
   render(){
        const list=this.props.countriesList
      .map(el=> <CountryCard key={el.name} country={el} countriesList={this.props.Countries
      } childClassName={this.props.childClassName} selectedCard={this.selectedCard}/>) ;
     return(
       <Wrapper>
       {list}
       </Wrapper>
         );   
   } 
}
export {Countries};