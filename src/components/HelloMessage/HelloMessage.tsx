import React from 'react'
class HelloMessage extends React.Component<{message:string}>{
    render() { 
        return ( 
        <div>{this.props.message}</div>
         );
    }
}
 
export {HelloMessage} ;