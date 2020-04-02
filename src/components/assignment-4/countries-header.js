import React from 'react';
import {FiMoon} from 'react-icons/fi';
import {withRouter} from 'react-router-dom';
class Header extends React.Component{
    state={
        light: {
        id: "0",
        name: "#fff",
        color:'black'
      },
      dark: {
        id: "1",
        name: "#2b3945",
        color:'white'
      },
      buttonStatus:'Light Mode',
    }
    componentDidMount=()=>{
        if(this.props.theme==='light'){
            this.setState({
             buttonStatus:'Light Mode',
         });
        }else{
            this.setState({
             buttonStatus:'Dark Mode',
         });
        }
    }
    handleClick=()=>{
     if(this.state.buttonStatus==='Light Mode'){
         this.setState({
             buttonStatus:'Dark Mode',
         });
     }else{
         this.setState({
             buttonStatus:'Light Mode',
         });
     }
     this.props.change();   
    }
    render(){
        return(
            <div className="countries-header" style={{backgroundColor:this.state[this.props.theme].name,color:this.state[this.props.theme].color}}>
            <h2>Where in the world?</h2> 
            <button className="theme-btn" onClick={this.handleClick}><FiMoon size={20}/>{this.state.buttonStatus}</button>
            </div>
            );
    }
}
export default withRouter(Header);