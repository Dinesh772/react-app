import { observable, action } from "mobx"
import { API_INITIAL } from "@ib/api-constants"
import {bindPromiseWithOnSuccess} from '@ib/mobx-promise'
import { create } from "apisauce"
import { networkCallWithApisauce } from "../../utils/APIUtils"
import { apiMethods } from "../../constants/APIConstants"

class UserStore{
    @observable getUsersApiStatus
    @observable getUsersApiError
    @observable users

    constructor(){
        this.init()
    }

    setUsersResponse=(users)=>{
        this.users=users.map((user)=>user.name)
        console.log(this.users)
    }

    setUsersAPIError=(error)=>{
        this.getUsersApiError=error
        console.log(this.getUsersApiError)
    }

    setUsersAPIStatus=(apiStatus)=>{
        this.getUsersApiStatus=apiStatus
    }
    @action.bound
    getUsersAPI(){
        const api=create({
            baseURL:'https://jsonplaceholder.typicode.com/'
            
        })
        const usersPromise=networkCallWithApisauce(
            api,
            'users/',
            {},
            apiMethods.get
        )
        return bindPromiseWithOnSuccess(usersPromise)
        .to(this.setUsersAPIStatus,this.setUsersResponse)
        .catch(this.getUsersApiError)
    }

    @action
    init(){
        this.getUsersApiStatus=API_INITIAL
        this.getUsersApiError=null
        this.users=[]
    }
    @action
    clearStore(){
        this.init()
    }
}

const userStore=new UserStore()
export default userStore