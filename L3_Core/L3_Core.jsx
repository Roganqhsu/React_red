import React, { Component } from 'react';
import L3_1This from './L3_1 this';
import L3_1button from './L3_1button';
import L3_demo from './L3_demo';
import L3_state_transfer from './L3_state_transfer';
import L3_state_transfer_2 from './L3_state_transfer_2';
export default class L3_Core extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
  render() {
    console.log('App組件更新');
    return (
      <div>L3_Core
        {/* <L3_1This/>
        <L3_1button/>
        <p onClick={()=>this.setState({})}>點擊後更新</p> */}
        {/* <L3_demo name='我是按鈕1'>
            <button>我是按鈕2</button>
        </L3_demo>
        <L3_demo name='我是按鈕3'/> */}
        <L3_state_transfer_2/>
        {/* < L3_state_transfer/> */}
      </div>
    )
  }
}
