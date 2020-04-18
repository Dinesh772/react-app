import React from 'react'
import { observable } from "mobx"
import { observer } from "mobx-react"
import Example from "../stores/GridGameStats"

@observer
class TypeScript extends React.Component{
        @observable count='asdads'
    render(){
        return(
        <div>
           <Example />
        </div>
        )
    }
}

export{TypeScript}