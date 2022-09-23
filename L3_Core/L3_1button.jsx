import React, { Component } from 'react'

export default class L3_1button extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
      }
    }
  render() {
    console.log('button組件更新');
    return (
      <div>L3_1button
        <button type='button' onClick={()=>{this.setState({})}} >這是一個button組件</button>
      </div>
    )
  }
}
