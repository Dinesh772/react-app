import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
//import {CarList} from './components/assignment-2/index';
//import './components/assignment-2/index.css';
import {TodoList} from './components/todo-list/index';
//import './components/todo-list/index.css';
import {FormComponents} from './components/assignment-3/index';
//import './components/assignment-3/index.css';
import CountriesDashboardApp from './components/assignment-4/Countries-dashboard-app'
//import './components/assignment-4/Countries.css';
import CardDetails from './components/assignment-4/CountryCardDetails';   
//import Header from './components/assignment-4/Countries-header';
import Home from './components/home.js'
import {EmojisGame} from "./components/assignment-5/EmojisGame/index.js";
//import CounterPage from './components/CounterPage/index'
//import { observable } from "mobx";
import { observer } from "mobx-react";
import themeStore from "./stores/ThemeStore";
import { TodoApp } from "./components/assignment-7/TodoApp";
//import { configure } from "mobx";

//configure {{enforceActions:true}}
@observer
class App extends React.Component{
  //@observable changeTheme='light'
  getCurrentTheme=()=>{
    return themeStore.changeTheme
  }
  setCurrentTheme=(theme)=>{
    themeStore.setCurrentTheme(theme)
  }
  theme=(event)=>{

    if(this.getCurrentTheme()==='light'){
      this.setCurrentTheme('dark')
    }else{
      this.setCurrentTheme('light')
    }
  }
  render(){
  return (
    <Router>
        <Switch>
        {/* <Route path="/counter-page">
        <CounterPage />
        </Route> */}
        <Route path="/forms">
        <FormComponents />
        </Route>
        <Route exact path="/countries-dashboard-app">   
        <CountriesDashboardApp  theme={this.getCurrentTheme()} change={this.theme} />
        </Route>
        <Route path="/todoList">
        <TodoList />
        </Route>
        <Route path="/mobx-todoList">
        <TodoApp />
        </Route>
        <Route path="/emojis-game">
        <EmojisGame />
        </Route>
        <Route path='/:id'>
        <CardDetails   theme={this.getCurrentTheme()} change={this.theme} />
        </Route>

        
        <Route path="/">
        <Home />  
        </Route>
        
 

        </Switch>
    </Router>
  );
  }
}
export {App}
