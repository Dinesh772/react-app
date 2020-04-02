import React from 'react';
class Languages extends React.Component{
    state={
        languages:[]
    }
    componentDidMount=()=>{
        const list=this.props.languages
        const updatedList=list.map(el=>el.name)
        this.setState({
            languages:updatedList,
        })
    }
    render(){
        return(
            <div>
            {this.state.languages.join(',')}
            </div>
        )
    }
}
export {Languages}