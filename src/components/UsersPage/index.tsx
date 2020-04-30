import React from 'react'
import { observer } from "mobx-react";

//import userStore from "../../stores/UsersStore";
import LoadingWrapperWithFailure from "../common/LoadingWrapperWithFailure";
import NoDataView from "../common/NoDataView";
import stores from "../../stores";
//import { observable, action,reaction,autorun } from "mobx";

const userStore=stores.userStore

@observer
class UsersPage extends React.Component{

    componentDidMount=()=>{
        this.doNetworkCalls()
    }

    doNetworkCalls=()=>{
        userStore.getUsersAPI()
    }
    renderUsersList=()=>{
        const {users}=userStore
        if(users.length===0){
            return (<NoDataView />)
        }
        return users.map(userName=><div key={Math.random()}>{userName}</div>)
    }
    render(){
        const{ getUsersApiStatus, getUsersApiError }=userStore
        return(
            <LoadingWrapperWithFailure 
            apiStatus={getUsersApiStatus}
            apiError={getUsersApiError}
            onRetryClick={this.doNetworkCalls}
            renderSuccessUI={this.renderUsersList}
            />
        );
    }
}
export default UsersPage
