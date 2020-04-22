//import UserService from "../services/UserService/index.api";
import UserStore from './UsersStore'
//import CounterStore from './CounterStore'
import {TodoList} from './TodoStore/index'
import UserFixtureService from "../services/UserService/index.fixture";
import TodoService from "../services/TodoService/index.api";

const todoService=new TodoService()
const todoList=new TodoList(todoService)
//counterStore,


const userService=new UserFixtureService()
const userStore=new UserStore(userService)

export default{
    userStore,todoList
}






