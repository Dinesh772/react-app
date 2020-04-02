import React from 'react';
import {withRouter} from 'react-router-dom';
class CountryCard extends React.Component{
  state={
    countriesList:[],
    country:[],
  }
  handleClick=()=>{
    let {history}=this.props;
    history.push('./countryCardDetails',this.state);
  }
  componentDidMount=()=>{
    const list=this.props.countriesList;
    const country=this.props.el;
    this.setState({
      countriesList:list,
      country:country,
    });
  }
    render(){
        return(
                <div className={'cards-child'} onClick={this.handleClick}>
                <div className="flag-div"><img src={this.props.el.flag} className="flag-img" alt='flag'/></div>
                <div className="inner-data">
                <h4>{this.props.el.name}</h4>
                <p><b>Population:</b>{this.props.el.population}</p>
                <p><b>Region:</b>{this.props.el.region}</p>
                <p><b>Capital:</b>{this.props.el.capital}</p>
                </div>
                </div>
            );
    }
}
export default withRouter(CountryCard);