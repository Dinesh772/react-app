import React from "react";
class EmojiCard extends React.Component{
    
    handleClick=()=>{
        const {handleClick,id}=this.props
        handleClick(id);
    }
    render(){
        const {theme,name,image}=this.props
    return (
        <div className={"rounded-sm my-10 mx-5 w-64 h-64 shadow-custom " +(theme === "light" ? "bg-white" : "bg-blue-700 text-white")}
        onClick={this.handleClick}>
        <div className="h-48 m-auto w-4/5">
            <img alt={name} src={image} />
        </div>
        <p className="text-center">{name}</p>
        </div>
    );
    }
}
export default EmojiCard;