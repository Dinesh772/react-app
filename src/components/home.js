import React from 'react';
import {Link} from 'react-router-dom';
export default function Home(){
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
          </ul>      
        </nav>
        </div>
        )
}
//events-app