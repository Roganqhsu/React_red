import React, { Component } from 'react'
import L4_1life_cycle_all from './L4_1life_cycle_all'
export default class L4_life_cycle extends Component {
    constructor(props) {
        super(props)
        this.state={
            isRenderTest:true
        }
    }
    render() {
        return (
            <div>
                {this.state.isRenderTest ?<L4_1life_cycle_all>
                </L4_1life_cycle_all>:"不渲染子組件Test"}
                {/* <L4_1life_cycle_all /> */}
                L4_life_cycle
                <br />
                <button type="button" onClick={() => this.setState({})}>
                    App父組件 setState更新
                </button>
                <button type='button' onClick={()=>this.setState({isRenderTest:!this.state.isRenderTest})}>不渲染子組件Test</button>
            </div>
        )
    }
}
// 組件有兩種更新方式
    // 1. setState 跟 2.forceUpdate
    // 2. 組件隨父組件的更新而更新
    // 