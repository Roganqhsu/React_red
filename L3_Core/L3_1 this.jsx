import React, { Component } from 'react'

export default class L3_1This extends Component {
  constructor(){
    super()
    this.state={
      value:'',
    }
  }
  handleInput(e){
    this.setState({
      value:e.target.value
    })
    console.log(e.target.value);
  }
  render() {
    
    console.log('input組件更新了');
      
    return (<div>
        L3_1 this
        <input type="text" name="" id="" 
        onInput={(e)=>{this.handleInput(e);
        }}
        value={this.state.value}
        />
      </div>
    )
  }
}
