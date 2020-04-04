import React from 'react';
import {withRouter} from 'react-router-dom';
import styled from '@emotion/styled'
const Wrapper=styled.div`
    margin:20px;
    height:300px;
    border:0.2px solid gray;
    width:180px;
    word-wrap: break-word;
    display:flex;
    flex-direction:column;
    color:inherit;
    background-color:inherit;
    border-radius:8px;
    justify-content:space-between;
`
const FlagWrapper=styled.div`
height:150px;
`
const Child=styled.div`
padding-bottom:20px;
padding-left:10px;
`
const H4=styled.h4`
  font-size:18px;
  font-weight:bold;
`
const Img=styled.img`
height:100%;
width:100%;
object-fit:cover;
border-top-left-radius: 8px;
border-top-right-radius: 8px;
`
class CountryCard extends React.Component{
  state={
    countriesList:[],
    country:[],
  }
  handleClick=()=>{
    let {history}=this.props;
    history.push(`/countries-dashboard-app/${this.props.country.alpha3Code}`);
  }
  componentDidMount=()=>{
    const list=this.props.countriesList;
    const country=this.props.country;
    this.setState({
      countriesList:list,
      country:country,
    });
  }
    render(){
        return(
                <Wrapper onClick={this.handleClick}>
                <FlagWrapper>
                  <Img src={this.props.country.flag}  alt='flag'/>
                </FlagWrapper>
                <Child>
                <H4>{this.props.country.name}</H4>
                <p><b>Population:</b>{this.props.country.population}</p>
                <p><b>Region:</b>{this.props.country.region}</p>
                <p><b>Capital:</b>{this.props.country.capital}</p>
                </Child>
                </Wrapper>
            );
    }
}
export default withRouter(CountryCard);