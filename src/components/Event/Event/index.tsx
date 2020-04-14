import React  from 'react';

import { observer } from 'mobx-react';
import { eventStore } from '../../../stores/EventStore';

import {EventWrapper,Input,Button,ButtonsWrapper,InputWrapper,UpdateButton} from './StyledComponent'
@observer
class Event extends React.Component<{eventList:any}>{
    handleEditClick=(status,id)=>{
        console.log('status check ',status,id)
        eventStore.onEditToggled(status,id)
    }
    handleUpdateClick=(status:any,id:Number)=>{
        eventStore.onEditToggled(status,id)
    }
    handleDelete=(event:any,id:Number)=>{
        eventStore.onDeleteEvent(id)
    }
    handleEventChange=(event:any,id:Number)=>{
        const value=event.target.value
        eventStore.onUpdateEvent('name',id,value)
    }
    handleLocationChange=(event,id)=>{
        const value=event.target.value
        eventStore.onUpdateEvent('location',id,value)
    }
    render(){
        const eventList=this.props.eventList
        console.log('===>',eventList)
        const events=eventList.map(Event=>(
            <EventWrapper key={Event.id}>
                <InputWrapper>
                <Input type='text' defaultValue={Event.name} onChange={(event)=>this.handleEventChange(event,Event.id)} disabled={!Event.edited}/>
                <Input type='text' defaultValue={Event.location} onChange={(event)=>this.handleLocationChange(event,Event.id)} disabled={!Event.edited}/>
                </InputWrapper>
                <ButtonsWrapper hide={Event.edited}>
                <Button onClick={()=>this.handleEditClick((Event.edited===false?true:false),Event.id)}>Edit</Button>
                <Button onClick={(event)=>this.handleDelete(event,Event.id)}>Delete</Button>
                </ButtonsWrapper>
                <UpdateButton hide={Event.edited}>
                    <Button onClick={()=>this.handleUpdateClick((Event.edited===false?true:false),Event.id)}>Update</Button>
                </UpdateButton>
            </EventWrapper>
        ))
        console.log('events-->',events)
        return(
        <div>{events}</div>
        )
    }
}
export {Event}