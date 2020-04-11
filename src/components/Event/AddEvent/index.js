import React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { eventStore } from '../../../stores/EventStore';
import { Wrapper,Input,Button} from './StyledComponent';


@observer
class AddEvent extends React.Component{
    @observable eventName='';
    @observable location='';

handleChangeEventName=(event)=>{
const value=event.target.value
this.eventName=value


}
handleChangeEventLocation=(event)=>{
    const value=event.target.value
    this.location=value
   
}
handleSubmit=()=>{

    if(this.eventName!=='' && this.location!==''){
    eventStore.onAddEvent(this.eventName,this.location,Math.random(),false)
    }
}
    render(){
        return(
            <form>
            <Wrapper>
                <div className={`flex flex-col`}>
                    
                    <Input type='text' placeholder="Enter Event Name" defaultValue={this.eventName} onChange={this.handleChangeEventName}/>
                    <Input type='text' placeholder="Enter Location" defaultValue={this.location} onChange={this.handleChangeEventLocation}  />
                </div>
                <Button type="reset" onClick={this.handleSubmit} value={'Add Event'}/>
            </Wrapper>
            </form>
        )
    }
}
export {AddEvent}