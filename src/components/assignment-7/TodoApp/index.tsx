import React from 'react';
import { observer } from 'mobx-react';
//import Loader from 'react-loader-spinner';

import stores from '../../../stores'
import LoadingWrapperWithFailure from "../../common/LoadingWrapperWithFailure";
import TodoList from "../TodoList/index";

const todo=stores.todoList
type todoArray={
    id:Number
    title:string
    completed:boolean
}

@observer
class TodoApp extends React.Component{  
    
    componentDidMount=()=>{
        this.doNetworkCalls()
    }
    doNetworkCalls=()=>{
        todo.getTodosApi()
    }
    renderTodosList=()=>{
       return <TodoList />
    }
    componentWillUnmount(){
        return todo.clearStore()
    }
    render(){
        const {getTodosApiStatus,getTodosApiError}=todo
        console.log()
            return(
                <LoadingWrapperWithFailure 
                apiStatus={getTodosApiStatus}
                apiError={getTodosApiError}
                onRetryClick={this.doNetworkCalls}
                renderSuccessUI={this.renderTodosList}
                />
        );
    }
}
export {TodoApp}