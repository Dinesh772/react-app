/*global fetch*/
import React from 'react';
class GetCountries extends React.Component{
    state={
        countriesList:[],
    }
    componentDidMount=()=>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then(response=>response.json())
        .then(data=>this.setState(state=>({
          countriesList:data,
      })));
      setTimeout(this.props.country(this.state.countriesList),1000)
    }
    render(){
        return(
            <span>
            </span>
            );
    }
}
// function GetCountries(){
//     const arr=[];
//     fetch('https://restcountries.eu/rest/v2/all')
//         .then(response=>response.json())
//         .then(data=>arr.push(data));
//     console.log(arr)
//     return arr
// }
 export {GetCountries}
