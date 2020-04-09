// import React, { Component } from 'react'
// import { observer} from 'mobx-react'
// //import stores from '../../stores'
// import {Wrapper,Child,Input,H1,CounterButton} from './StyledComponents'
// const counterStore = stores.counterStore

// @observer
// class CounterPage extends Component {
//   handleIncrement = () => {
//     counterStore.incrementCounter()
//   }
//   handleDecrement = () => {
//       counterStore.decrementCounter()
//   }
//   handleChange=(event)=>{
//     const value=event.target.value;
//    if(value==='-'){
//     counterStore.onChangeValue()
//   } else if(!isNaN(value)){
//     counterStore.onChangeValue(Number(value))
//   }
//   else{
//     counterStore.onChangeValue('')
//   }
//   }

//   render() {
//     return (
//       <Wrapper>
//         <H1>Counter</H1>
//         <Child>
//         <CounterButton onClick={this.handleIncrement}>+</CounterButton>
//         <Input type="number" value={counterStore.count} placeholder={0} onChange={this.handleChange}/>
//         <CounterButton onClick={this.handleDecrement}>-</CounterButton>
//         </Child>
//       </Wrapper>
//     )
//   }
// }

// export default CounterPage

// //  <div className={`flex flex-col h-full`}>
// //        <Button onClick={this.handleIncrement}>▲</Button>
// //         <Button onClick={this.handleDecrement}>▼</Button> 
// //       </div> 