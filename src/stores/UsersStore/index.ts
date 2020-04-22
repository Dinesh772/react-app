import { observable, action } from "mobx"
import { API_INITIAL } from "@ib/api-constants"
import {bindPromiseWithOnSuccess} from '@ib/mobx-promise'
//import UserService from "../../services/UserService/index.api"
//import UserFixtureService from "../../services/UserService/index.fixture"


class UserStore{
    @observable getUsersApiStatus
    @observable getUsersApiError
    @observable users
    userService
    
    constructor(userService){
        this.userService=userService
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
        // const api=create({
        //     baseURL:'https://jsonplaceholder.typicode.com/'
            
        // })
        // const usersPromise=networkCallWithApisauce(
        //     api,
        //     'users/',
        //     {},
        //     apiMethods.get
        // )
        const usersPromise=this.userService.getUsersAPI()
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

//const userService=new UserService()

export default UserStore