import React from "react";
import {CardWrapper,Image} from './StyledComponents.js'
class EmojiCard extends React.Component{
    
    handleClick=()=>{
        const {handleClick,id}=this.props
        handleClick(id);
    }
    render(){
        const {theme,name,image}=this.props
    return (
        <CardWrapper theme={theme} onClick={this.handleClick} >
        <Image >
            <img alt={name} src={image} />
        </Image>
        <p className="text-center">{name}</p>
        </CardWrapper>
    );
    }
}
export default EmojiCard;
//className={"rounded-sm my-10 mx-5 w-64 h-64 shadow-custom " +(theme === "light" ? "bg-white" : "bg-blue-700 text-white")}