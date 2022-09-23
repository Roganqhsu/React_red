import React, { Component } from 'react';

class L22 extends Component {
    // 建構子
    constructor(){
        super();
        // 初始值
        this.state={
            like:false,
        }
        // this.render();
    }
    // 點擊函式切換初始值
    handle(){
        this.setState({
            like:!this.state.like
        })
        console.log(this.state);
        this.render();
    }
    render() {
        return (
            <div>
                <button type='button' 
                // 點擊後執行函式
                onClick={()=>{this.handle()}}>
                    {/* 依初始值切換狀態 */}
                    {this.state.like?'已讚':'喜歡'}
                </button>
            </div>
        );
    }
}

export default L22;
