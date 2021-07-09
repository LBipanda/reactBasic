import React, { Component } from 'react';
import {withRouter} from "react-router-dom";

export default withRouter(class Header extends Component {
    render() {
        return (
            <div className="col-xs-offset-2 col-xs-8">
                <div className="page-header">
                    <h2>React Router Demo</h2>
                    <button onClick={this.back}>回退</button>&nbsp;
                    <button onClick={this.forward}>前进</button>&nbsp;
                    <button onClick={this.go}>go</button>
                </div>
            </div>
        )
    }
    back = ()=>{
        this.props.history.goBack();
    }
    forward = ()=>{
        this.props.history.goForward();
    }
    go = ()=>{
        this.props.history.go(2);
    }
})
