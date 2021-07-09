import React, { Component } from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import MyNavLink from "../../components/MyNavLink";
import News from "./News";
import Message from "./Message";

export default class Homme extends Component {
    render() {
        return (
            <div>
                <ul className="nav nav-tabs">
                  <li>
                    {/* <a className="list-group-item active" href="./home-news.html">News</a> */}
                    <MyNavLink className="list-group-item" to="/home/news" children="News" />
                  </li>
                  <li>
                  <MyNavLink className="list-group-item" to="/home/message" children="Message" />
                  </li>
                </ul>
                {/* 注册路由 */}
                <Switch>
                    <Route path="/home/news" component={News} />
                    <Route path="/home/message" component={Message} />
                    <Redirect to="/home/news" />
                </Switch>
            </div>
        )
    }
}