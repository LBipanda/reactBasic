import React, { Component } from 'react';
import {Route, Switch, Redirect} from "react-router-dom";
import Header from "./pages/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import MyNavLink from "./components/MyNavLink";
import "./App.css"

export default class App extends Component {
  render() {
    
    return (
      <div>
        <div className="row">
          <Header />
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 原生html中，靠<a>跳转 不同的页面 */}
              {/* <a className="list-group-item" href="./about.html">About</a>
              <a className="list-group-item active" href="./home.html">Home</a> */}

              {/* 在React中靠路由链接实现切换组件 */}
                <MyNavLink to="/about" a="a" b="b" children="About" />
                <MyNavLink to="/home" children="Home" />
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                <Switch>
                  <Route path="/about" component={About}></Route>
                  <Route path="/home" component={Home}></Route>
                  {/* 一般写在所有路由注册的最下方，当所有路由都无法匹配时，跳转到Redirect指定的路由 */}
                  <Redirect to="/about" />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
