import React from 'react';
import { gridStore } from "../../../stores/GridStore";

class Header extends React.Component{

    render(){
        const topLevel=gridStore.topLevel
        const level=gridStore.currentLevel
        return(
            <div>
                <div style={{width:'300px',justifyContent:'center'}}>Top Level:{topLevel}</div>
                <div style={{display:'flex ',justifyContent:'space-between' ,width:'300px',margin:'20px'}}>
                    <div>
                        Level: {level}
                    </div>
                    <button>
                        Dark
                    </button>
                </div>
            </div>
        )
    }
}
export{Header}