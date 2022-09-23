import React, { Component } from 'react';
class Nav extends Component{
    // constructor(props){
    //     super(props);
    // }
    render(){
        return (
            <>
            </>
        )
    }
}
class L21 extends Component {
    constructor() {
        super();
        this.state = {
            like:false
        }
    }
    // setState(newState) {
    //     this.state={
    //         ...this.state,
    //         ...newState
    //     }
    //     this.render();
    // };
    handle(){
        this.setState({
            like:!this.state.like
        });
        console.log(this.state.like);
        this.render();
    }
    render() {
        var a=(b)=>{ return b*b
        }
console.log(a(4));
        return (
            <div>
                <Nav/>
                L21
                <button type='button' 
                onClick={()=>{this.handle();}}
                >
                    {this.state.like ? '已讚' : '喜歡'}
                </button>
            </div>
        );
    }
}

export default L21;
