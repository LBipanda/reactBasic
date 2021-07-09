import React, { Component } from 'react';
import {Link, Route} from "react-router-dom";
import Detail from "./Detail";

export default class Message extends Component {
    state = {
        messageList: [
            {id:"001", title:"消息1"},
            {id:"002", title:"消息2"},
            {id:"003", title:"消息3"},
        ]
    }
    render() {
        const {messageList} = this.state
        return (
            <ul>
                {
                    messageList.map(i =>{
                        return <li key={i.id}>
                            {/* 向路由组件传递params参数 */}
                            {/* <Link to={`/home/message/detail/${i.id}/${i.title}`}  children={i.title} />&nbsp;&nbsp; */}

                            {/* 向路由组件传递search参数 */}
                            {/* <Link to={`/home/message/detail/?id=${i.id}&title=${i.title}`}  children={i.title} />&nbsp;&nbsp; */}
                            
                            {/* 向路由组件传递state参数 */}
                            {/* 路由跳转开启replace模式，默认是push模式 */}
                            <Link replace={true} to={{pathname: "/home/message/detail", state: {id:i.id,title:i.title}}}  children={i.title} />&nbsp;&nbsp;
                        </li>
                    })
                }
                
                {/* 注册路由 */}
                {/* 声明接收params参数 */}
                {/* <Route path="/home/message/detail/:id/:title" component={Detail} /> */}

                {/* search参数无需声明接收，正常注册路由即可 */}
                {/* <Route path="/home/message/detail" component={Detail} /> */}
                
                {/* state参数无需声明接收，正常注册路由即可 */}
                <Route path="/home/message/detail" component={Detail} />
            </ul>
        )
    }
}
