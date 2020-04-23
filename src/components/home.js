import React from 'react';
import {Link,Redirect} from 'react-router-dom';
import { getAccessToken } from "../utils/StorageUtils";


class  Home extends React.Component{
  gotoGridScreenIfLoggedIn=()=>{
    return(
      <Redirect to = {{
        pathname: '/grid-memory-game',
      }} />
    
    )
  }
  render(){
    if(getAccessToken()){
      alert(getAccessToken())
      return this.gotoGridScreenIfLoggedIn()
    }
    return(
        <div>
        <nav>
        <ul> 
        <li>
            <Link to="/home.js">Home Page</Link>
            </li>
            <li>
              <Link to="/forms">Form Components</Link>
            </li>
            <li>
              <Link to="/countries-dashboard-app">Countries dashboard</Link>
            </li>
            <li>
              <Link to="/todoList">Todolist</Link>
            </li>
            <li>
              <Link to="/emojis-game">Emojis Game</Link>
            </li>
            <li>
              <Link to="/mobx-todoList">MobX Todolist App</Link>
            </li>
            <li>
              <Link to="/events-app">Events App</Link>
            </li>
            <li>
              <Link to="/typeScript">TypeScript handsOn</Link>
            </li>
            <li>
              <Link to="/grid-memory-game">Grid Memory Game</Link>
            </li>
            <li>
              <Link to="/user-data">Users Data</Link>
            </li>
          </ul>      
        </nav>
        </div>
        );
}
}
export default Home
//events-app