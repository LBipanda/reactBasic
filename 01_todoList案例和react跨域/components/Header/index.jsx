import React, { Component } from 'react';
import PropTypes from "prop-types";
import {nanoid} from "nanoid";
import "./index.css";

export default class Header extends Component {
    // 对接收的props的类型和必要性进行限制
    static propTypes = {
        addTodo: PropTypes.func.isRequired,
    }
    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
            </div>
        )
    }
    handleKeyUp = (event) => {
        if(event.keyCode === 13){
            if(event.target.value === ""){
                alert("输入不能为空")
                return
            }
            this.props.addTodo({id: nanoid, name: event.target.value, done: false})
            event.target.value = ""
        }
    }
}
