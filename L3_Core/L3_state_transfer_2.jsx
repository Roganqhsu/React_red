import React, { Component } from 'react'
export class Button extends Component {
    constructor(props) {
      super(props)
    
    }
    render(){  
        return(
        <div>
            <button type='button' onClick={()=>{this.props.handleClick('red')}}>
                紅色
            </button>
            <button type='button' onClick={()=>{this.props.handleClick('blue')}}>
                藍色
            </button>
        </div>
    )}
}
export class Title extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log(this.props.themeColor);
        return (
            <div style={{ color: this.props.themeColor }}>
                標題一
            </div>
        )
    }
}
export default class L3_state_transfer_2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            themeColor: "red",
        }
    }
    handleClick(color){
        this.setState({ themeColor: color })
        console.log(color);
    }
    render() {
        return (
            <div>L3_state_transfer_2
                <br />
                <Title themeColor={this.state.themeColor} />
                <Button themeColor={this.state.themeColor} handleClick={(color)=>{this.handleClick(color)}} />
            </div>
        )
    }
}
