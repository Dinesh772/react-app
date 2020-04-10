/* eslint-disable array-callback-return */
import { observable, action, toJS, computed } from "mobx";
class EventStore{
    @observable eventList=[]

    @action.bound
    onAddEvent=(eventName,location,id,isEdited)=>{
        const event={
            id:id,
            name:eventName,
            location:location,
            edited:isEdited,
        }
        this.eventList.push(event)
        console.log(this.eventList)
    }
    @action.bound
    onDeleteEvent=(id)=>{
        const list=this.eventList
        const filteredList=list.filter(event=>{if(event.id!==id){return event}})
        this.eventList=filteredList
    }
    @action.bound
    onEditToggled=(status,id)=>{
    const events=toJS(this.eventList)
    const updatedEvents=events.map(event=>{if(event.id===id){event.edited = !event.edited;return event}else{return event}})
    this.eventList=updatedEvents

    }
    @action.bound
    onUpdateEvent=(eventType,id,value)=>{
        const list=this.eventList;
        if(eventType==='name'){
        const updatedList=list.map(eachEvent=>{if(eachEvent.id===id){eachEvent.name=value; return eachEvent}else{return eachEvent}})
        this.eventList=updatedList}
        else{
            const updatedList=list.map(eachEvent=>{if(eachEvent.id===id){eachEvent.location=value; return eachEvent}else{return eachEvent}})
        this.eventList=updatedList}
        }
        @computed
        get countOfEvents(){
            return this.eventList.length
        }
}
const eventStore=new EventStore()
export {eventStore}