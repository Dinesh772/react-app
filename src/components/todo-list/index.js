import React from 'react';
class TodoListItem extends React.Component{
    constructor(props){
        super(props);
        this.state={
            text:this.props.value,
            isChecked:this.props.itemCheckedStatus,
            strikeTodo:this.props.strikeTodo,
            textClassName:this.props.textClassName,
            id:this.props.id,
        };
    }
    
    
    onChecked=()=>{
        if(this.state.isChecked===false){
            this.setState(state=>({
                isChecked:true,
                strikeTodo:true,
                textClassName:'itemTextChecked',
            }));
            this.props.isItemChecked(this);
        }
        else{
            this.setState(state=>({
                isChecked:false,
                strikeTodo:false,
                textClassName:'itemText',
            }));
            this.props.isItemChecked(this);
        }
    }
    onUpdated=(event)=>{
        if(event.charCode===13){
            const text=event.target.value;
            this.props.update(this,text);
        }
    }
    render(){
        return(
            <div className="todo-list-item">
            <div className="checkbox-and-text">
            <input type="checkbox" onClick={this.onChecked}  defaultChecked={this.state.isChecked}/>
            <input type="text" disabled={this.state.isChecked!==false} className={this.state.textClassName} defaultValue={this.state.text} onKeyPress={this.onUpdated} />
            </div>
            <span className="closeItem" id={this.props.id} onClick={this.props.remove}>✕</span>
            </div>
            );
    }
}

class TodoList extends React.Component{
    constructor(props){
        super(props);
           this.state={
            value:'', 
            list:[],
            checkedList:[],
            unCheckedList:[],
            itemsActiveStatus:0,
            displayList:[],
            prevState:[],
            isChecked:false,
            strikeTodo:false,
            textClassName:'itemText',
            footerClassName:'hide-footer-root'
        };
    }
    onUpdated=(event,text)=>{
        const id=event.state.id;
        const value=text;
        const itemCheckedStatus=event.state.isChecked
        const strikeTodo=event.state.strikeTodo
        const textClassName=event.state.textClassName
        const list=this.state.list
        list[Number(id)]=<TodoListItem key={id} value={value} textClassName={textClassName} update={this.onUpdated} itemCheckedStatus={itemCheckedStatus} strikeTodo={strikeTodo} isItemChecked={this.onChecked} remove={this.onRemove} id={this.state.list.length}/>
    }
    onInputEntered=(event)=>{
        if(event.charCode===13 && event.target.value!==''){
            console.log(this.state.list)
        const prevlist=this.state.list;
        prevlist.push(<TodoListItem key={this.state.list.length} value={event.target.value} textClassName={this.state.textClassName} itemCheckedStatus={this.state.isChecked} strikeTodo={this.state.strikeTodo}update={this.onUpdated} isItemChecked={this.onChecked} remove={this.onRemove} id={this.state.list.length}/>);
        this.setState(state=>({
            list:prevlist,
            itemsActiveStatus:this.state.itemsActiveStatus+1,
            displayList:prevlist,
            unCheckedList:prevlist,
            prevState:prevlist,
            footerClassName:'footer-root'
        }));
        event.target.value='';
        }
    }
    onRemove=(event)=>{
        const  id=Number(event.target.id);
        const prevlist=this.state.list;
        const newlist=prevlist.filter(el=>el.key!==id);
        this.setState(state=>({
            list:newlist,
            itemsActiveStatus:this.state.itemsActiveStatus-1,
            displayList:newlist,
            footerClassName:this.state.list.length >0 ? 'footer-root':'hide-footer-root',
        }));
    }
    onChecked=(event)=>{
        console.log(event);
        const index=Number(event.state.id);
        if(event.state.isChecked===false){
            const prevList=this.state.list
            prevList[index]=<TodoListItem key={index} value={event.state.text} textClassName={'itemTextChecked'} update={this.onUpdated} itemCheckedStatus={true} strikeTodo={true} isItemChecked={this.onChecked} remove={this.onRemove} id={index}/>
            const list=this.state.checkedList;
            list.push(index)
            this.setState(state=>({
                itemsActiveStatus:this.state.itemsActiveStatus-1,
                checkedList:list,
                list:prevList,
                footerClassName:this.state.list.length >0 ? 'footer-root':'hide-footer-root',
            }));
        }else{
            const prevList=this.state.list
            prevList[index]=<TodoListItem key={index} value={event.state.text} textClassName={'itemText'} update={this.onUpdated} itemCheckedStatus={false} strikeTodo={false} isItemChecked={this.onChecked} remove={this.onRemove} id={index}/>
            const list=this.state.checkedList;
            list.splice(index,1)
            this.setState(state=>({
                checkedList:list,
                list:prevList,
                itemsActiveStatus:this.state.itemsActiveStatus+1,
                footerClassName:this.state.list.length >0 ? 'footer-root':'hide-footer-root',
            }));
        }
    }
    onActive=()=>{
        const array=this.state.checkedList;
        const list=this.state.list;
        const newArray=list.filter((el,index)=>(!array.includes(index)))
        console.log(array)
        console.log(newArray)
        this.setState(state=>({
            displayList:newArray,
            footerClassName:this.state.list.length >0 ? 'footer-root':'hide-footer-root',
        }))
    }
    onCompleted=()=>{
        const array=this.state.checkedList;
        const list=this.state.list;
        const newArray=list.filter((el,index)=>array.includes(index))
        console.log(array)
        console.log(newArray)
        this.setState(state=>({
            displayList:newArray,
            footerClassName:this.state.list.length >0 ? 'footer-root':'hide-footer-root',
           
        }))
    }
    onAll=()=>{
        this.setState(state=>({
            displayList:this.state.list,
            footerClassName:this.state.list.length >0 ? 'footer-root':'hide-footer-root',
        }))
    }
    removeCompleted=()=>{
        const list=this.state.list;
        const checked=this.state.checkedList
        const newArray=list.filter((el,index)=>!(checked.includes(index)))
        this.setState(state=>({
            list:newArray,
            displayList:newArray,
            checkedList:[],
            footerClassName:this.state.list.lenth > 0 ? 'footer-root':'hide-footer-root',
        }))
    }
    render(){
        return(
            <div className="todo-root">
            <span className="todos-title">todos</span>
            <input type="text"  className="todo-input-box" onKeyPress={this.onInputEntered} placeholder="What needs to be done?" />
            <div>{this.state.displayList}</div>
            <div className={this.state.footerClassName}>
             <div className="list-count">
              <span id="countOfList">{this.state.itemsActiveStatus} items left</span>
            </div>
            <div className="commands">
              <button id="all" onClick={this.onAll}>All</button>
              <button id="active" onClick={this.onActive}>Active</button>
              <button id="completed" onClick={this.onCompleted}>Completed</button>
            </div>
            <div className="clear-completed">
              <button id="clear" onClick={this.removeCompleted}>Clear completed</button>
            </div>
            </div>
            </div>
            );
    }
}


export {TodoList};




/*
import React from 'react';
class TodoListItem extends React.Component{
    constructor(props){
        super(props);
        this.state={
            text:this.props.value,
            isChecked:false,
            strikeTodo:false,
            textClassName:'itemText',
            id:this.props.id
        };
    }
    onChecked=()=>{
        if(this.state.isChecked===false){
            this.setState(state=>({
                isChecked:true,
                strikeTodo:true,
                textClassName:'itemTextChecked'
            }));
            this.props.isItemChecked(this);
        }
        else{
            this.setState(state=>({
                isChecked:false,
                strikeTodo:false,
                textClassName:'itemText'
            }));
            this.props.isItemChecked(this);
        }
        
    }
    render(){
        return(
            <div className="todo-list-item">
            <div className="checkbox-and-text">
            <input type="checkbox" onClick={this.onChecked} />
            <input type="text" disabled={this.state.isChecked!==false}className={this.state.textClassName} defaultValue={this.state.text}/>
            </div>
            <span className="closeItem" id={this.props.id} onClick={this.props.remove}>✕</span>
            </div>
            );
    }
}

class TodoList extends React.Component{
    constructor(props){
        super(props);
           this.state={
            value:'', 
            list:[],
            checkedList:[],
            unCheckedList:[],
            itemsActiveStatus:0,
            displayList:[],
            prevState:[]
        };
    }
    onInputEntered=(event)=>{
        if(event.charCode===13){
        const prevlist=this.state.list;
        prevlist.push(<TodoListItem key={this.state.list.length} value={event.target.value} isItemChecked={this.onChecked} remove={this.onRemove} id={this.state.list.length}/>);
        this.setState(state=>({
            list:prevlist,
            itemsActiveStatus:this.state.itemsActiveStatus+1,
            displayList:prevlist,
            unCheckedList:prevlist,
            prevState:prevlist
        }));
        event.target.value='';
        }
    }
    onRemove=(event)=>{
        const  id=Number(event.target.id);
        const prevlist=this.state.list;
        const checkedlist=this.state.checkedList;
        const uncheckedlist=this.state.unCheckedList;
        const newlist1=prevlist.filter(el=>el.key!=id);
        const newlist2=checkedlist.filter(el=>el.key!=id);
        const newlist3=uncheckedlist.filter(el=>el.key!=id);
        this.setState(state=>({
            list:newlist1,
            checkedList:newlist2,
            unCheckedList:newlist3,
            itemsActiveStatus:this.state.itemsActiveStatus-1,
            displayList:this.state.prevState
        }));
    }
    onChecked=(event)=>{
        console.log(event.state.id);
        const index=Number(event.state.id);
        if(event.state.isChecked===false){
            const list=this.state.checkedList;
            list.push(this.state.list[index]);
            const prevlist=this.state.prevState;
            const newlist=prevlist.filter(el=>el.key!=index);
            this.setState(state=>({
                itemsActiveStatus:this.state.itemsActiveStatus-1,
                checkedList:list,
                unCheckedList:newlist,
            }));
        }else{
            this.setState(state=>({
                itemsActiveStatus:this.state.itemsActiveStatus+1,
            }));
        }
    }
    onActive=()=>{
        this.setState(state=>({
            displayList:this.state.unCheckedList,
            prevState:this.state.unCheckedList
        }));
    }
    onCompleted=()=>{
         this.setState(state=>({
            displayList:this.state.checkedList,
            prevState:this.state.checkedList
        }));
    }
    onAll=()=>{
         this.setState(state=>({              
            displayList:this.state.list,
            prevState:this.state.list
        }));
    }
    removeCompleted=()=>{
        alert('clerCompleted');
    }
    render(){
        return(
            <div className="todo-root">
            <span className="todos-title">todos</span>
            <input type="text"  className="todo-input-box" onKeyPress={this.onInputEntered}placeholder="What needs to be done?" />
            <div>{this.state.displayList}</div>
            <div className="footer-root">
             <div className="list-count">
              <span id="countOfList">{this.state.itemsActiveStatus} items left</span>
            </div>
            <div className="commands">
              <button id="all" onClick={this.onAll}>All</button>
              <button id="active" onClick={this.onActive}>Active</button>
              <button id="completed" onClick={this.onCompleted}>Completed</button>
            </div>
            <div className="clear-completed">
              <button id="clear" onClick={this.removeCompleted}>Clear completed</button>
            </div>
            </div>
            </div>
            );
    }
}
*/







/*
import React from 'react';
class TodoListItem extends React.Component{
    constructor(props){
        super(props);
        this.state={
            text:this.props.value,
            isChecked:false,
            strikeTodo:false,
            textClassName:'itemText',
            id:this.props.id
        };
    }
    
    
    onChecked=()=>{
        if(this.state.isChecked===false){
            this.setState(state=>({
                isChecked:true,
                strikeTodo:true,
                textClassName:'itemTextChecked'
            }));
            this.props.isItemChecked(this);
        }
        else{
            this.setState(state=>({
                isChecked:false,
                strikeTodo:false,
                textClassName:'itemText'
            }));
            this.props.isItemChecked(this);
        }
    }
    render(){
        return(
            <div className="todo-list-item">
            <div className="checkbox-and-text">
            <input type="checkbox" onClick={this.onChecked} />
            <input type="text" disabled={this.state.isChecked!==false} className={this.state.textClassName} defaultValue={this.state.text}/>
            </div>
            <span className="closeItem" id={this.props.id} onClick={this.props.remove}>✕</span>
            </div>
            );
    }
}

class TodoList extends React.Component{
    constructor(props){
        super(props);
           this.state={
            value:'', 
            list:[],
            checkedList:[],
            unCheckedList:[],
            itemsActiveStatus:0,
            displayList:[],
            prevState:[]
        };
    }
    onInputEntered=(event)=>{
        if(event.charCode===13 && event.target.value!=''){
            console.log(this.state.list)
        const prevlist=this.state.list;
        prevlist.push(<TodoListItem key={this.state.list.length} value={event.target.value} isItemChecked={this.onChecked} remove={this.onRemove} id={this.state.list.length}/>);
        this.setState(state=>({
            list:prevlist,
            itemsActiveStatus:this.state.itemsActiveStatus+1,
            displayList:prevlist,
            unCheckedList:prevlist,
            prevState:prevlist
        }));
        event.target.value='';
        }
    }
    onRemove=(event)=>{
        const  id=Number(event.target.id);
        const prevlist=this.state.list;
        const newlist=prevlist.filter(el=>el.key!=id);
        this.setState(state=>({
            list:newlist,
            itemsActiveStatus:this.state.itemsActiveStatus-1,
            displayList:newlist
        }));
    }
    onChecked=(event)=>{
        console.log(event);
        const index=Number(event.state.id);
        if(event.state.isChecked===false){
            const list=this.state.checkedList;
            list.push(index)
            this.setState(state=>({
                itemsActiveStatus:this.state.itemsActiveStatus-1,
                checkedList:list,
            }));
        }else{
            const list=this.state.checkedList;
            list.splice(index,1)
            this.setState(state=>({
                checkedList:list,
                itemsActiveStatus:this.state.itemsActiveStatus+1,
            }));
        }
    }
    onActive=()=>{
        const array=this.state.checkedList;
        const list=this.state.list;
        const newArray=list.filter((el,index)=>(!array.includes(index)))
        console.log(array)
        console.log(newArray)
        this.setState(state=>({
            displayList:newArray,
        }))
    }
    onCompleted=()=>{
        const array=this.state.checkedList;
        const list=this.state.list;
        const newArray=list.filter((el,index)=>array.includes(index))
        console.log(array)
        console.log(newArray)
        this.setState(state=>({
            displayList:newArray,
        }))
    }
    onAll=()=>{
        this.setState(state=>({
            displayList:this.state.list
        }))
    }
    removeCompleted=()=>{
        const list=this.state.list;
        const checked=this.state.checkedList
        const newArray=list.filter((el,index)=>!(checked.includes(index)))
        this.setState(state=>({
            list:newArray,
            displayList:newArray,
            checkedList:[],
        }))
    }
    render(){
        return(
            <div className="todo-root">
            <span className="todos-title">todos</span>
            <input type="text"  className="todo-input-box" onKeyPress={this.onInputEntered} placeholder="What needs to be done?" />
            <div>{this.state.displayList}</div>
            <div className="footer-root">
             <div className="list-count">
              <span id="countOfList">{this.state.itemsActiveStatus} items left</span>
            </div>
            <div className="commands">
              <button id="all" onClick={this.onAll}>All</button>
              <button id="active" onClick={this.onActive}>Active</button>
              <button id="completed" onClick={this.onCompleted}>Completed</button>
            </div>
            <div className="clear-completed">
              <button id="clear" onClick={this.removeCompleted}>Clear completed</button>
            </div>
            </div>
            </div>
            );
    }
}
export {TodoList,TodoListItem};

*/