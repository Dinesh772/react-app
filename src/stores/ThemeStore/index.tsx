import { observable } from "mobx";

class ThemeStore{
    @observable changeTheme
    constructor(){
        this.changeTheme='light'
    }
    setCurrentTheme(theme){
        if(this.changeTheme==='light'){
            this.changeTheme='dark'
        }else{
            this.changeTheme='light'
        }
    }
}
const themeStore=new ThemeStore()
export default themeStore
