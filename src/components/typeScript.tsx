import React from 'react'
import { observable } from "mobx"
import { observer } from "mobx-react"

@observer
class TypeScript extends React.Component{
        @observable count='asdads'
    render(){
        return(
        <div>
           
        </div>
        )
    }
}

export{TypeScript}