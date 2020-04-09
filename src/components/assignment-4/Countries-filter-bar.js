import React from 'react';
import styled from '@emotion/styled'
const Wrapper=styled.div`
    width:100%;
    display:flex;
    padding:20px;
    color:inherit;
    justify-content:space-between;
`
const SearchBar=styled.input`
border:1px solid gray;
width:300px;
font-size:18px;
background-color:inherit;
border-radius:6px;
`
const DropDown=styled.select`
color:inherit;
background-color:inherit;
`
const Option=styled.option`
color:black;
background-color:inherit;
`
class CountriesFilterBar extends React.Component{
    state={
        searchInput:''
    }
    handleSearchBar=(event)=>{
      event.preventDefault();
      const value=event.target.value;
      this.props.searchByName(value);
      this.setState({
          searchInput:value
      })
    }
    handleDropDown=(event)=>{
        event.preventDefault();
        const value=event.target.value;
        const searchInput=this.state.searchInput;
        this.setState({region:value});
         this.props.searchByRegion(value,searchInput);
    }
    render(){
        return(
            //<div className="filter-bar">
            <Wrapper>
            <SearchBar type='text'  placeholder={` Search your country...`} onChange={this.handleSearchBar} />

            <DropDown onChange={this.handleDropDown}>
            <Option value='All' >All</Option>
            <Option value='Africa' >Africa</Option>
            <Option value='Americas' >Americas</Option>
            <Option value='Asia' >Asia</Option>
            <Option value='Europe' >Europe</Option>
            <Option value='Oceania'>Oceania</Option>
            </DropDown>
            </Wrapper>
            //</div>
            );
    }
}
export {CountriesFilterBar};