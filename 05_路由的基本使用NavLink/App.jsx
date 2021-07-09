import React, { Component } from 'react';
import {Route} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import MyNavLink from "./components/MyNavLink";
import "./App.css"

export default class App extends Component {
  render() {
    
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React Router Demo</h2></div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 原生html中，靠<a>跳转 不同的页面 */}
              {/* <a className="list-group-item" href="./about.html">About</a>
              <a className="list-group-item active" href="./home.html">Home</a> */}

              {/* 在React中靠路由链接实现切换组件 */}
                {/* <Link to="/about" a="a" b="b" children="About" /> */}
                <MyNavLink to="/about" a="a" b="b" children="About" />
                <MyNavLink to="/home" children="Home" />
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                  <Route path="/about" component={About}></Route>
                  <Route path="/home" component={Home}></Route>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
