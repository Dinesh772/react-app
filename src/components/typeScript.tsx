import React from 'react'
//import { observable } from "mobx"
//import { observer } from "mobx-react"
import { setAccessToken, ACCESS_TOKEN, clearUserSession, getAccessToken } from "../utils/StorageUtils";
import {withRouter} from 'react-router-dom';
import {History} from 'history'


type historyType={
    history:History
}

class TypeScript extends React.Component<historyType>{
    
        handleClick=()=>{
            const token=ACCESS_TOKEN
            setAccessToken(token)
        if(getAccessToken()){
         const { history }=this.props
         history.push('/mobx-todoList')
        }
    }
        componentWillUnmount(){
            return clearUserSession()
        }
    render(){
        return(
        <div className='flex flex-col justify-center items-center h-screen w-screen'>
            <h1 className='text-3xl ml-8'>Sign In</h1>
            <label>Enter your Username: <input type='text'  className='mr-24 border-black border w-48'  /></label>
            <label>password: <input type="password" className='mr-4 mt-4 border-black border w-48'  /></label>
            <button onClick={this.handleClick} className='border-black border mt-4 ml-16 bg-gray-400'>Submit</button>
        </div>
        )
    }
}

export default withRouter(TypeScript);