import React from 'react';
import {withRouter} from 'react-router';
import {IoMdArrowRoundBack} from 'react-icons/io';
import Loader from 'react-loader-spinner'
class CardDetails extends React.Component{
    state={
     light: {
        id: "0",
        name: "#fff",
        color:'black'
     },
     dark: {
        id: "1",
        name: "#2b3945",
        color:'white'
     },
     countriesList:[],
    }
    getCountriesList=()=>{
        fetch('https://restcountries.eu/rest/v2/all').then(response=>response.json()).then(data=>this.setState(state=>({
          countriesList:data,
      })));
    }
    componentDidMount(){
    this.getCountriesList()
    }
    navigateBack=()=>{
        const {history}=this.props;
        history.goBack();
    }
   
    borderCountry=(event,country)=>{
        const value=event.target.value;
       
        let {history}=this.props;
    history.push(`/countries-dashboard-app/${value}`,value);;
    }
    render(){
        const countryCode=this.props.location.pathname.slice(-3);
        const selectedCountry=this.state.countriesList.filter(country=>(country.alpha3Code.toLowerCase()===countryCode.toLowerCase()))
        const country=selectedCountry[0]
        if(country!==undefined){
            const languages=country.languages.map(el=>el.name);
            const currencies=country.currencies.map(el=>el.name);
            const borders=country.borders.map((alpha3Code=><button type="button" value={alpha3Code} className="border-buttons" onClick={this.borderCountry} key={alpha3Code}>{alpha3Code}</button>));
        return(
            <div style={{backgroundColor:this.state[this.props.theme].name,color:this.state[this.props.theme].color}} className="country-full-details">
            <button className="back-btn" onClick={this.navigateBack}><IoMdArrowRoundBack /> Back</button><br/>
                <div className="country-card-details">
                    <img src={country.flag} className="flag-image" alt='flag'/>
                    <div className="country-card-details-text">
                    <h2>{country.name}</h2>
                    <div className="details-text">
                          <div className="data-text">
                          <p><b>Native Name:</b>{country.nativeName}</p>
                          <p><b>Population:</b>{country.population}</p>
                          <p><b>Region:</b>{country.region}</p>
                          <p><b>Sub Region:</b>{country.subRegion}</p>
                          <p><b>Capital:</b>{country.capital}</p>
                    </div>
                    <div>
                          <p><b>Top Level Domain:</b>{country.topLevelDomain.join(' ')}</p>
                          <p><b>Currencies:</b>{currencies.join(',')}</p>
                          <p><b>Languages:</b>{languages.join(',')}</p>
                    </div>
                    </div>
                    <div>
                      <h3>Border Countries:</h3>
                    <div>{borders}</div>
                      </div>
                    </div>
                </div>
            </div>
            //<div>ganesh</div>
            
            );}
            else{
                return(<Loader type="ThreeDots" color="blue" height={100} width={100} />);
            }
    }
}
export default withRouter(CardDetails);