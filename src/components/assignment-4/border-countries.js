import React from 'react';
class BorderCountries extends React.Component{
    state={
      countries:[]
    }
    handleClick=(event)=>{
        this.props.function(event)
    }
    componentDidMount=()=>{
        const list=this.props.list;
        const newList=list.map(el=><button onClick={this.handleClick} key={el}>{el}</button>);
        this.setState({
            countries:newList
        })
    }
    
    render(){
        return(
            <div>
              {this.state.countries}
            </div>
            );
    }
}
export {BorderCountries};