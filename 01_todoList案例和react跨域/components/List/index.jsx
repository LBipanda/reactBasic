import React, { Component } from 'react';
import Item from "../Item";
import PropTypes from "prop-types";
import "./index.css";

export default class List extends Component {
    // 对接收的props的类型和必要性进行限制
    static propTypes = {
        updateTodo: PropTypes.func.isRequired,
        delTodo: PropTypes.func.isRequired,
        todos: PropTypes.array.isRequired,
    }
    render() {
        const {todos,updateTodo,delTodo} = this.props;
        return (
            <ul className="todo-main">
                {todos.map(item => {
                    return <Item {...item} key={item.id} updateTodo={updateTodo} delTodo={delTodo} />
                })}
                {/* <li>
                    <label>
                    <input type="checkbox"/>
                    <span>yyyy</span>
                    </label>
                    <button className="btn btn-danger" style={{display: "none"}}>删除</button>
                </li> */}
            </ul>
        )
    }
}
