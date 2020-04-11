import { observable, action } from 'mobx'

class CounterStore {
   @observable count=0

   @action.bound
   incrementCounter() {
      this.count = this.count + 1
   }

   @action.bound
   decrementCounter() {
      this.count = this.count - 1
   }
   @action.bound
   onChangeValue(value){
      this.count=value
   }
}


export default CounterStore