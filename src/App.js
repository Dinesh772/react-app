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
import './components/assignment-4/Countries.css';
import CardDetails from './components/assignment-4/CountryCardDetails';   
import Header from './components/assignment-4/Countries-header';
import Home from './components/home.js'
class App extends React.Component{
  state={
    changeTheme:'light',
  }
  theme=(event)=>{
    if(this.state.changeTheme==='light'){
      this.setState({
        changeTheme:'dark',
      })
    }else{
      this.setState({
        changeTheme:'light',
      })
    }
  }
  render(){
  return (
    <Router>
        <Switch>
        <Route path="/forms">
        <FormComponents />
        </Route>
        <Route exact path="/countries-dashboard-app">   
        <CountriesDashboardApp  theme={this.state.changeTheme} change={this.theme} />
        </Route>
        <Route path="/todoList">
        <TodoList />
        </Route>
        <Route path='/:id'>
        <Header theme={this.state.changeTheme} change={this.theme}/>
        <CardDetails   theme={this.state.changeTheme} change={this.theme} />
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




































// import React from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import HomePage from "./components/HomePage";
// import Page1 from "./components/Page1";

// import "./App.css";

// const App = () => {
//   return (
//     <Router basename={process.env.PUBLIC_URL}>
//       <Switch>
//         <Route exact path="/page-1">
//           <Page1 />
//         </Route>
//         <Route path="/">
//           <HomePage />
//         </Route>
//       </Switch>
//     </Router>
//   );
// };

// export default App;
