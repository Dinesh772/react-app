/*global fetch*/
import  React from  'react';
import Header from './Countries-header';
import {CountriesFilterBar} from './Countries-filter-bar';
import {Countries} from './Countries';
import {withRouter} from 'react-router-dom';
import {GetCountries} from './GetCountries'
class CountriesDashboardApp extends React.Component{
    state={
        countries:[],
        selectedTheme:'Light Mode',
        filteredList:[],
        selectedCountry:[],
        regionalCountries:[],
        light: {
        id: "0",
        name: "#fff",
        color:'black'
      },
      dark: {
        id: "1",
        name: "#2b3945",
        color:'white'
      }
    }
    componentDidMount=()=>{
      fetch('https://restcountries.eu/rest/v2/all').then(response=>response.json()).then(data=>this.setState(state=>({
          countries:data,
          filteredList:data,
          regionalCountries:data
      })));
    }
    filterCountriesByRegion=(value,searchInput)=>{
        console.log(searchInput)
        if(value!=='All' ){
        const list=this.state.countries;
        const newList=list.filter(el=>el.region.toLowerCase().includes(value.toLowerCase())? el: false);
            if(searchInput!==""){
                const updatedList=newList.filter(el=>el.name.toLowerCase().includes(searchInput.toLowerCase())? el:false)
                this.setState(state=>({
                    filteredList:updatedList,
                    regionalCountries:updatedList
                }))}
            else{
            this.setState(state=>({
                filteredList:newList,
                regionalCountries:newList
            }))}
        }
        else{
            const countries=this.state.countries;
            if(searchInput!==""){
                const updatedCountries=countries.filter(el=>el.name.toLowerCase().includes(searchInput.toLowerCase())? el:false);
                this.setState(state=>({
                    filteredList:updatedCountries,
                    regionalCountries:updatedCountries
                }));
            }else{
            this.setState(state=>({
            filteredList:countries,
            regionalCountries:countries
        }));}
        }
    }
    filterCountriesByName=(value)=>{
         const list=this.state.regionalCountries;  
         const newList=list.filter(el=>
         (el.name.toLowerCase().includes(value.toLowerCase())? el:false)||(el.alpha3Code.toLowerCase().includes(value.toLowerCase())? el:false));
         this.setState(state=>({
            filteredList:newList
        }));
    }
    getCountries=(data)=>{
        console.log(data)
        
    }
    render(){
        return(
            <div className={'countries-dashboard'} style={{backgroundColor:this.state[this.props.theme].name,color:this.state[this.props.theme].color}}>
            <GetCountries country={this.getCountries}/>
            <Header   theme={this.props.theme} change={this.props.change}  />
            <CountriesFilterBar searchByName={this.filterCountriesByName} searchByRegion={this.filterCountriesByRegion}/>
            <Countries countriesList={this.state.filteredList} selectedCountry={this.selectedCountry}/>
            </div>
            );
    }
}
export default withRouter(CountriesDashboardApp);