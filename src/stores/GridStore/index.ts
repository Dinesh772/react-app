import { observable, toJS } from "mobx";
import { GridModel, gridModelObjectType } from "../models/GridModel";

class GridStore{
    timer:any;
    timerCounter:any;

    lightThemeCode:string='Light'
    darkThemeCode:string='Dark'
    delayTimeToNextLevel:number=1000
    gameWonStatus:string='won'
    gameLoseStatus:string='lose'
    gamePlayingStatus:string='playing'
    gameInitialCellsPerColumn:number=3;
    totalNumberOfLevels:number=7;
    cellsAddedToGridOnNextLevel:number=1;
    initialCount:number=0;
    initialLevel:number=0;
    initialTimeLeft:number=0
    initialLevelFnDelayTime:number=300
    delayTime:number=1000
    initialEmptyArray:Array<GridModel>=[]

    @observable gridCells=this.initialEmptyArray
    @observable topLevel=0
    @observable currentLevel=this.initialLevel
    @observable theme=this.darkThemeCode
    @observable cellsPerColumn=this.gameInitialCellsPerColumn
    @observable count=this.initialCount
    @observable isHidden=true;
    @observable gameStatus=this.gamePlayingStatus
    @observable timeLeft=this.initialTimeLeft
    onThemeChange=()=>{
        if(this.theme===this.darkThemeCode){
            this.theme=this.lightThemeCode;
        }else{
            this.theme=this.darkThemeCode;
        }
    }
    onAddCells=()=>{
        for (let i=0;i<(this.cellsPerColumn*this.cellsPerColumn);++i){
        const cell:gridModelObjectType={
            id:Math.random().toString(),
            isCellShouldDisplay:false,
            isSelected:false,
        }
        const cellObject:GridModel=new GridModel(cell)
        this.gridCells.push(cellObject)
    }
        this.shuffleCells()
        setTimeout(() => {
            this.hideCells()
          }, (this.cellsPerColumn*this.delayTime));
        }
        timeLeftCounter=()=>{
             this.timeLeft-=1;
        }
        StartGameTimer=()=>{
            this.timer=setTimeout(() => {
                this.resetGame()
                }, (this.cellsPerColumn*3)*this.delayTime);
        }
        ClearGameTimer=()=>{
          clearTimeout(this.timer)
        }
    startTimerCounter=()=>{
        this.timerCounter=setInterval(()=>{
            this.timeLeftCounter()
        },1000)
    }
    clearTimerCounter=()=>{
        clearInterval(this.timerCounter)
        this.timeLeft=this.initialTimeLeft;
    }
    hideCells=()=>{
        const cells=toJS(this.gridCells)
        const hidedCells=cells.map(cell=>{
            if(cell.isCellShouldDisplay===true){
                cell.isCellShouldDisplay=false;
                return cell;
            }else{
                return cell;
            }
        })
        this.isHidden=false;
        this.gridCells=hidedCells
        this.startTimerCounter()
    }
    onCellClicked=(object:any)=>{
        
        if(object.isSelected && !this.isHidden){
            setTimeout(() => {
                this.goToInitialLevel()             
             }, this.initialLevelFnDelayTime);
           
        }else if(!this.isHidden){
        const list=toJS(this.gridCells);
        const selectedCell=list.map(cell=>{
            if(cell.id===object.id && cell.isSelected===false){
                cell.isCellShouldDisplay=true;
                cell.isSelected=true;
                return cell
            }
            else{
                return cell;
            }
        })
        this.count+=1;
        this.gridCells=selectedCell
         if(this.count===this.cellsPerColumn && !this.isHidden){
            this.ClearGameTimer()
            setTimeout(() => {
                this.goToNextLevelAndUpdateCells()             
             }, this.delayTimeToNextLevel);
           
        }}
    }
    goToInitialLevel=()=>{
        this.timeLeft=this.initialTimeLeft;
        this.ClearGameTimer()
        this.clearTimerCounter()
        this.isHidden=true;
        this.gameStatus=this.gameLoseStatus;
    }
    goToNextLevelAndUpdateCells=()=>{
        this.clearTimerCounter()
        this.ClearGameTimer()
        if(this.currentLevel<this.totalNumberOfLevels){
        this.currentLevel=this.currentLevel+1;
        this.cellsPerColumn=this.cellsPerColumn+this.cellsAddedToGridOnNextLevel;
        this.count=this.initialCount;
        this.gridCells=this.initialEmptyArray
        this.isHidden=true;
        this.timeLeft=this.initialTimeLeft;
        this.onAddCells()}
        else{
            this.isHidden=true;
            this.gameStatus=this.gameWonStatus;
        }
    }
    resetGame=()=>{
        this.clearTimerCounter()
        this.ClearGameTimer()
        this.topLevel=this.topLevel<this.currentLevel?this.currentLevel:this.topLevel
        this.currentLevel=this.initialLevel;
        this.cellsPerColumn=this.gameInitialCellsPerColumn;
        this.count=this.initialCount;
        this.gridCells=this.initialEmptyArray
        this.isHidden=true;
        this.onAddCells()
    }
    onPlayAgainClicked=()=>{
        this.resetGame()
        this.gameStatus=this.gamePlayingStatus
    }
    shuffleCells=()=>{
        const cells=toJS(this.gridCells)
        for (let i=0;i<this.cellsPerColumn*this.cellsPerColumn;++i){
            if(i<this.cellsPerColumn){
            cells[i].isCellShouldDisplay=true;}
            else{
                cells[i].isSelected=true;
            }
        }
        let currentIndex=this.gridCells.length
        while (currentIndex !== 0) {
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            let temporaryValue = cells[currentIndex];
            cells[currentIndex] = cells[randomIndex];
            cells[randomIndex] = temporaryValue;
          }
          this.timeLeft=(this.cellsPerColumn*2)
          this.gridCells=cells
          this.StartGameTimer()
    }


}
const gridStore=new GridStore()
export {gridStore}