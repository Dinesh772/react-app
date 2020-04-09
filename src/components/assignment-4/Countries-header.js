import React from 'react';
import {FiMoon} from 'react-icons/fi';
import {withRouter} from 'react-router-dom';
import styled from '@emotion/styled'

const Wrapper=styled.div`
display:flex;
width:100%;
justify-content:space-between;
padding:30px;
box-shadow: 1px 1px 1px #999; 
transition:all 0.3s linear;
`
const H1=styled.h1`
font-size:24px;
font-weight:bold;
`
const Button=styled.button`
    border:none;
    display:flex;
    font-size:18px;
    color:inherit;
    height:30px;
`
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
            <Wrapper style={{backgroundColor:this.state[this.props.theme].name,color:this.state[this.props.theme].color}}>
            <H1>Where in the world?</H1> 
            <Button onClick={this.handleClick}><FiMoon size={20}/>{this.state.buttonStatus}</Button>
            </Wrapper>
            );
    }
}
export default withRouter(Header);