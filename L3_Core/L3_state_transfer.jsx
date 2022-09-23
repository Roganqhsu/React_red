import React, { Component } from 'react';
export class Title extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <>
                <h1 style={{ color: this.props.themeColor }}>這是標題</h1>
            </>
        )
    }
}
export class Button extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <>
                <button type='button' onClick={() => { this.props.onClick('red') }}>紅色</button>
                <button type='button' onClick={() => { this.props.onClick('green') }}>綠色</button>
            </>
        )
    }
}
export default class L3_state_transfer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            themeColor: 'red',
        }
    }
    handleClick(color) {
        this.setState({
            themeColor: color,
        })
        console.log(color);
        console.log(this.state.themeColor);
    }
    render() {
        return (
            <div>
                <div>L3_state_transfer</div>
                <Title themeColor={this.state.themeColor} />
                <Button themeColor={this.state.themeColor}
                    onClick={(color) => { this.handleClick(color) }}
                />
            </div>
        )
    }
}
