import React from 'react';
class CountriesFilterBar extends React.Component{
    handleSearchBar=(event)=>{
      event.preventDefault();
      const value=event.target.value;
      this.props.searchByName('name',value);
    }
    handleDropDown=(event)=>{
        event.preventDefault();
        const value=event.target.value;
        this.setState({region:value});
         this.props.searchByName('region',value);
    }
    render(){
        return(
            <div className="filter-bar">
            <input type='text'  className="search-bar" placeholder={` Search your country...`} onChange={this.handleSearchBar} />
            <select onChange={this.handleDropDown} className="dropdown-menu">
            <option value='All' >All</option>
            <option value='Africa' >Africa</option>
            <option value='Americas' >Americas</option>
            <option value='Asia' >Asia</option>
            <option value='Europe' >Europe</option>
            <option value='Oceania'>Oceania</option>
            </select>
            </div>
            );
    }
}
export {CountriesFilterBar};