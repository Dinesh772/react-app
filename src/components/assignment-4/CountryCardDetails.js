import React from 'react';
import {withRouter} from 'react-router';
import {IoMdArrowRoundBack} from 'react-icons/io';
import Loader from 'react-loader-spinner';
import Header from './Countries-header';
import styled from '@emotion/styled'
const Wrapper=styled.div`
transition:all 0.3s linear;
height:100%;
`
const PageLoader=styled.div`
height:100vh;
padding:200px;
display:flex;
justify-content:center;
transition:all 0.3s linear;
aligh-items:center;
`
const Img=styled.img`
width:400px;
    padding:0px;
    margin:0px;
    padding:30px;
`
const Parent=styled.div`
display:flex;
width:100%;
height:80vh;
justify-content:space-evenly;
word-wrap: break-word;
align-items:flex-start;
`
const Child1=styled.div`
display:flex;
    padding:30px;
    word-wrap: break-word;
    flex-direction:column;
`
const Child2=styled.div`
display:flex;`
const Child=styled.div`padding-right:30px;`

const Child3=styled.div``
const H2=styled.h2`font-size:22px; font-weight:bold;`
const H3=styled.h2`font-size:18px; font-weight:bold;`
const Button=styled.button`
height:30px;
border:1px solid gray;
border-radius:5px;
font-size:16px;
background-color: inherit;
margin:5px;
color:inherit;
`
const BackButton=styled.button`
background-color:inherit;
    border:none;
    display:flex;
    font-size:16px;
    align-items:center;
    justify-content:center;
    font-family: verdana;
    margin-top:20px;
    margin-left:20px;
    color:inherit;
    border:1px solid gray;
    border-radius:5px;
    height:30px;
`
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
            //const countriesList=this.state.countriesList;
            const borderCountriesList=country.borders.filter(element=>{return(this.state.countriesList.filter(each=>each.alpha3Code===element))})
            console.log(borderCountriesList)
            const borders=country.borders.map((alpha3Code=><Button type="button" value={alpha3Code} onClick={this.borderCountry} key={alpha3Code}>{alpha3Code}</Button>));
        return(
            <Wrapper style={{backgroundColor:this.state[this.props.theme].name,color:this.state[this.props.theme].color}} className="country-full-details">
            <Header theme={this.props.theme} change={this.props.change}/>
            <BackButton onClick={this.navigateBack}><IoMdArrowRoundBack /> Back</BackButton><br/>
                <Parent>
                    <Img src={country.flag} className="flag-image" alt='flag'/>
                    <Child1 >
                        <H2>{country.name}</H2>
                        <Child2>
                            <Child>
                            <p><b>Native Name:</b>{country.nativeName}</p>
                            <p><b>Population:</b>{country.population}</p>
                            <p><b>Region:</b>{country.region}</p>
                            <p><b>Sub Region:</b>{country.subRegion}</p>
                            <p><b>Capital:</b>{country.capital}</p>
                            </Child>
                            <div>
                            <p><b>Top Level Domain:</b>{country.topLevelDomain.join(' ')}</p>
                            <p><b>Currencies:</b>{currencies.join(',')}</p>
                            <p><b>Languages:</b>{languages.join(',')}</p>
                            </div>
                        </Child2>
                        <Child3>
                        <H3>Border Countries:</H3>
                        <div>{borders}</div>
                        </Child3>
                    </Child1>
                </Parent>
            </Wrapper>
            //<div>ganesh</div>
            
            );}
            else{
                return(
                <div>
                <Header theme={this.props.theme} change={this.props.change}/>
                <PageLoader style={{backgroundColor:this.state[this.props.theme].name,color:this.state[this.props.theme].color}}>
                <Loader type="ThreeDots"  color="green" height={100} width={100}/>
                </PageLoader>
                </div>
                );
            }
    }
}
export default withRouter(CardDetails);


//<Header theme={this.props.theme} change={this.props.change}/>