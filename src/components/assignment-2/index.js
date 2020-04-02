import React from 'react';
class Car extends React.Component{
     constructor(props){
         super(props)
         this.state={
            status:'Stopped',
            speed:0,
            engineStatus:'Start',
            isDisabled:true,
         }
         this.carId=this.props.id
     }
     displayEngineStatus=()=>{
       if(this.state.engineStatus==='Start'){
         this.setState({
            engineStatus:'Stop',
            isDisabled:false,
            status:'Running',
            speed:0,
         })}
         else{
             this.setState({
            engineStatus:'Start',
            isDisabled:true,
            status:'Stopped',
            speed:0,
         })
         }
     }
     onAccelerateBtn=()=>{
         this.setState({
        speed:(this.state.speed+10),
        status:`Running at ${this.state.speed} kmph`,      
     })
      //this.displayStatusText(this.state.speed)
     }
     onDecelerateBtn=()=>{
         if(this.state.speed>10){
              this.setState({
        speed:(this.state.speed-10),
        status:`Running at ${this.state.speed} kmph`,      
     })
         }
         else{
              this.displayEngineStatus()      
         }
     }
     render(){
         return(
             <div className="car-body">
            <p>car:{this.carId}</p>
            <div className="header">
            <button className="stopped"   onClick={this.displayEngineStatus}>{this.state.engineStatus}</button>
            <button  className="close-btn"  id={this.carId} onClick={this.props.removeCar}>✖</button>
            </div>
            <p>{this.state.status}</p>
            <div className="footer">
            <button className="accelerate-btn"  disabled={this.state.isDisabled} onClick={this.onAccelerateBtn}>Accelerator</button>
            <button className="deccelerate-btn" disabled={this.state.isDisabled} onClick={this.onDecelerateBtn}>Apply Brake</button>
            </div>
            </div>
             );
     }
}

class CarList extends React.Component{
    constructor(props){
        super(props)
        this.state={
          listOfCars:[],
         }
    } 
    addingCarToCarList=()=>{
        const carlist=this.state.listOfCars;
        carlist.push(<Car id={(this.state.listOfCars.length)+1} removeCar={this.removeCarFromCarList}/>);
        this.setState({
            listOfCars:carlist,
        })
    }
    removeCarFromCarList=(event)=>{
        const id=Number(event.target.id)-1;
        this.setState(prevState=>({
            listOfCars:prevState.listOfCars.filter((el,index)=>index!==id),
        }))
    }
    render(){
        return(
            <div>
            <button id="addCar" onClick={this.addingCarToCarList}>Add car</button>
            <div>
            {this.state.listOfCars}
            </div>
            </div>
            )
    }
}
export {CarList}


/*const list=[];
let addCar=document.getElementById('addCar');
class Car extends React.Component{
    constructor(props){
      super(props);
      this.state={
            status:'Stopped', 
            speed:10,
            engineStatus:'Start',
            add:10,
            isDisabled:true,
            classNameOfEngine:'stopped',
        };
      this.carId=props.id;
      this.onStartOrStop=this.onStartOrStop.bind(this);
      this.onApplyBrake=this.onApplyBrake.bind(this);
      this.onAccelerate=this.onAccelerate.bind(this);
      this.displayStatusText=this.displayStatusText.bind(this);
      this.removeItem=this.removeItem.bind(this);
    }
     onStartOrStop(){
         if(this.state.engineStatus==='Start'){
         this.setState({
             status:'Running',
             engineStatus:'Stop',
             isDisabled:false,
            classNameOfEngine:'started',
             
         });  
         }else{
             this.setState({
             status:'Stopped',
             engineStatus:'Start',
             isDisabled:true,
            classNameOfEngine:'stopped',
         });   
         }
     }
     onApplyBrake(){
         if(this.state.speed>10){
        this.setState(state=>({
            speed:state.speed-state.add
        }));
             this.displayStatusText();
         }
         else{
            this.onStartOrStop();
        }
     }
     onAccelerate(){
        this.setState(state=>({
            speed:state.engineStatus==='Stop'?state.speed+state.add:state.speed,
            engineStatus:'Stop'
            
        }));
      this.displayStatusText();
         }
      displayStatusText(){
        this.setState(state=>({
            status:`car Running at ${this.state.speed} kmph`,
        }));
      }
      removeItem(){
          delete list[Number(event.target.id)-1];
          ReactDOM.render(<CarList />,root);
      }
    render(){
        return(
            <div className="car-body">
            <p>car:{this.carId}</p>
            <div className="header">
            <button className={this.state.classNameOfEngine}   onClick={this.onStartOrStop}>{this.state.engineStatus}</button>
            <button className="close-btn" id={this.carId} onClick={this.removeItem}>✖</button>
            </div>
            <p>{this.state.status}</p>
            <div className="footer">
            <button className="accelerate-btn" disabled={this.state.isDisabled}onClick={this.onAccelerate}>Accelerator</button>
            <button className="deccelerate-btn" disabled={this.state.isDisabled} onClick={this.onApplyBrake}>Apply Brake</button>
            </div>
            </div>
            )
    }
}
class CarList extends React.Component{
    //  addCarToCartState(state=>({
    //         list:[1,2]
    //     }))
    //  }
    //  removeCarFromCarsList(){
        
    //  }
    //  removeCarList(){
        
    //  }
    
     render(){
         return(
            <div>
            {list}
            </div>
            
             );
     }
}
list.push(<Car  id={list.length+1} />);
ReactDOM.render(<CarList />,root);
addCar.onclick=()=>{
    list.push(<Car  id={list.length+1} />);
    ReactDOM.render(<CarList />,root);
 };*/
//export {CarList,Car};