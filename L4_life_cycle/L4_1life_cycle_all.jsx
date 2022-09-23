import React, { Component } from 'react'

export default class L4_1mount extends Component {
    constructor(props) {
        super(props)
        console.log('1. constructor');
        this.state = {
            time: new Date(),
        }
    }
    tick() {
        this.setState({ time: new Date() })
    }
    apple() {
        console.log('執行函式');
    }
    // 
    componentWillMount() {
        // setInterval(() => this.tick(),
        //     1000);
        this.tick()
        console.log('2. componentWillMount組件將要加載');
    }
    componentDidMount() {
        console.log('4. componentDidMount組件已經加載');
    }
    // 更新生命週期
    componentWillReceiveProps() {
        console.log('5. componentWillReceiveProps組件將要接收參數');
    }
    shouldComponentUpdate(nextProps,nextState) {
        console.log('6. shouldComponentUpdate組件是否更新');
        // console.log(nextState);
        // if(nextState.time.getSeconds()% 2=== 0){
        //     console.log(this.state.time.getSeconds());
            return true;
        // }return false;
    }
    componentWillUpdate() {
        console.log('7. ComponentWillUpdate組件將要更新');
    }
    componentDidUpdate() {
        console.log('8. componentDidUpdate組件更新完畢');
    }
    // 卸載
    componentWillUnmount() {
        console.log('9.componentWillUnmount組件將要卸載');
        clearInterval(this.timeId)
    }
    componentDidUnmount() {
        console.log('10. componentDidUnmount組件已經卸載');
    }
    handleClick() {
        console.log('更新');
        this.setState({})
    }
    render() {
        console.log('3. render 渲染');
        this.apple();
        // console.log();


        return (
            <div>L4_1mount
                <br />
                <p>{this.state.time.getSeconds()}</p>
                <button onClick={() => this.setState({})}>
                    setState更新
                </button>
                <button onClick={() => this.forceUpdate()} >forceUpdate強制更新</button>
                <p></p>
            </div>
        )
    }
}
