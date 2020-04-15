import { observable, toJS } from "mobx";
import { GridModel, gridModelObjectType } from "../models/GridModel";

class GridStore{
    @observable gridCells:Array<GridModel>=[]
    @observable topLevel=0
    @observable currentLevel=0
    @observable theme='light'
    @observable cellsDisplayTimer=3
    @observable gameTimer=6
    @observable count=0

    onAddCells=()=>{
        for (let i=0;i<(this.cellsDisplayTimer*this.cellsDisplayTimer);++i){
        const cell:gridModelObjectType={
            id:Math.random().toString(),
            isCellShouldDisplay:false,
            isSelected:false,
        }
        const cellObject:GridModel=new GridModel(cell)
        this.gridCells.push(cellObject)
    }
        this.shuffleCells()
    }
    onSelectedCell=(object:any)=>{
        if(object.isSelected){
            this.resetGame()
        }else{
        const list=toJS(this.gridCells);
        const selectedCell=list.map(cell=>{
            if(cell.id===object.id && cell.isSelected===false){
                cell.isSelected=true;
                return cell
            }
            else{
                return cell;
            }
        })
        this.count+=1;
        this.gridCells=selectedCell
        if(this.count===this.cellsDisplayTimer){
            this.goToNextLevelAndUpdateCells()
        }}
    }
    goToNextLevelAndUpdateCells=()=>{
        this.currentLevel=this.currentLevel+1;
        this.cellsDisplayTimer=this.cellsDisplayTimer+1;
        this.count=0;
        this.gridCells=[]
        this.onAddCells()
    }
    resetGame=()=>{
        this.topLevel=this.currentLevel
        this.currentLevel=0;
        this.cellsDisplayTimer=3;
        this.count=0;
        this.gridCells=[]
        this.onAddCells()
    }
    shuffleCells=()=>{
        let currentIndex=this.gridCells.length
        const cells=this.gridCells
        while (currentIndex !== 0) {
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            let temporaryValue = cells[currentIndex];
            cells[currentIndex] = cells[randomIndex];
            cells[randomIndex] = temporaryValue;
          }
    }


}
const gridStore=new GridStore()
export {gridStore}