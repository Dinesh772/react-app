import { create } from "apisauce"
import { action } from "mobx"
import { networkCallWithApisauce } from "../../utils/APIUtils"
import { apiMethods } from "../../constants/APIConstants"

class TodoService{
    api
    constructor(){
        this.api=create({
            baseURL:'http://jsonplaceholder.typicode.com/'
        })
    }
    @action.bound
    getTodosAPI(){
        return networkCallWithApisauce(
            this.api,
            'todos/',
            {},
            apiMethods.get
        )
    }
}
export default TodoService