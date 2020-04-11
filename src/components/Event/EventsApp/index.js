import React from 'react';
import { observer } from 'mobx-react';
import { eventStore } from '../../../stores/EventStore';
import { toJS } from 'mobx';
import { Event } from '../Event';
import { AddEvent } from '../AddEvent';
import { Wrapper ,EventsCount,WarningMsg} from './StyledComponent';
const events=eventStore
@observer
class EventsApp extends React.Component{

    render(){
        console.log('-->',toJS(events.eventList))
       const eventList=toJS(events.eventList)
       const count=events.countOfEvents
        return(
            <Wrapper>
            <AddEvent />
            <EventsCount hide={count>0?true:false}>
                Number of Events: {count}
            </EventsCount>
            <WarningMsg hide={count>0?true:false}>No Events Available..! </WarningMsg>
            <Event eventList={eventList}/>
            </Wrapper>
            
        )
    }
}
export {EventsApp}                                                                              
