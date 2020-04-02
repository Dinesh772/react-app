import React from 'react';
import {Greetings} from './greetings';
import {FavouriteDessert} from './FavouriteDessert'
import {VisitedCities} from './VisitedCities'
import {YourState} from './YourState'
import {DisableOrEnable} from './DisableBtn'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class FormComponents extends React.Component{
    render(){
        return(
    <Router>
      <div>
        <nav>
          <ul> 
            <li>
              <Link to="/greetings">Greetings</Link>
            </li>
             <li>
              <Link to="/fav-dessert">Favourite Dessert</Link>
            </li>
            <li>
              <Link to="/visited-cities">Visited Cities</Link>
            </li>
            <li>
              <Link to="/your-state">Your State</Link>
            </li>
            <li>
              <Link to="/disable-or-enable">Disable or Enable</Link>
            </li>
          </ul>      
        </nav>
        <Switch>
        <Route path="/greetings">
        <Greetings />
        </Route>
        <Route path="/fav-dessert">
        <FavouriteDessert  dessertList={["Vanilla", "Butterscotch", "Gulab Jamum", "Yoghurt Pots", "Baked Banana", "Chocolate"]}/>
        </Route>
        <Route path="/visited-cities">
        <VisitedCities citiesList={["Hyderabad", "Chennai", "Bangalore", "Pune", "Mumbai", "Delhi"]}/>
        </Route>
        <Route path="/your-state">
        <YourState stateList={["Andhra Pradesh", "Telangana", "Tamil Nadu", "Kerala", "Karnataka", "Haryana"]}/>
        </Route>
        <Route path="/disable-or-enable">
         <DisableOrEnable />
        </Route>
        </Switch>
      </div>
    </Router>
        );
    }
}

export {FormComponents}