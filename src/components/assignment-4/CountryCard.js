import React from 'react';
import {withRouter} from 'react-router-dom';
class CountryCard extends React.Component{
  state={
    countriesList:[],
    country:[],
  }
  handleClick=()=>{
    let {history}=this.props;
    history.push(`/countries-dashboard-app/${this.props.country.alpha3Code}`);
  }
  componentDidMount=()=>{
    const list=this.props.countriesList;
    const country=this.props.country;
    this.setState({
      countriesList:list,
      country:country,
    });
  }
    render(){
        return(
                <div className={'cards-child'} onClick={this.handleClick}>
                <div className="flag-div"><img src={this.props.country.flag} className="flag-img" alt='flag'/></div>
                <div className="inner-data">
                <h4>{this.props.country.name}</h4>
                <p><b>Population:</b>{this.props.country.population}</p>
                <p><b>Region:</b>{this.props.country.region}</p>
                <p><b>Capital:</b>{this.props.country.capital}</p>
                </div>
                </div>
            );
    }
}
export default withRouter(CountryCard);