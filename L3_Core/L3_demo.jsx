import React, { Component } from 'react'

export default class L3_demo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    render() {
    return (
      <div >L3_demo
        {this.props.children}
        <hr />
        <button >
            {this.props.name}
        </button>
      </div>
    )
  }
}
