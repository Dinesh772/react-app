import { observable } from "mobx"
//import { gridStore } from "../../GridStore";

export type gridModelObjectType={
    id:string
    isCellShouldDisplay:boolean
    isSelected:boolean
}

class GridModel{
    id:string;
    @observable isCellShouldDisplay:boolean
    @observable isSelected:boolean
        constructor(object:gridModelObjectType){
        this.id = object.id;
        this.isCellShouldDisplay = object.isCellShouldDisplay;
        this.isSelected = object.isSelected; 
    }
    
    
}
export {GridModel}