import React from 'react';
class Currencies extends React.Component{
    state={
        currencies:[]
    }
    componentDidMount=()=>{
        const list=this.props.currencies
        const updatedList=list.map(el=>el.name)
        this.setState({
            currencies:updatedList,
        })
    }
    render(){
        return(
            <div>
            {this.state.currencies.join(',')}
            </div>
        )
    }
}
export {Currencies}