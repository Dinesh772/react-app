import React from 'react';
class SearchBar extends React.Component{
    handleSearch=(event)=>{
        event.preventDefault()
     this.props.handleSearchBar(event)
    }
    render(){
        return(
            <div>
            </div>
            )
    }
}
export {SearchBar}