import React, { Component } from 'react';
import "./index.css";

export default class Footer extends Component {
    render() {
        const {todos,changeAllTodo,clearAllTodo} = this.props;
        // 已完成的数量
        const doneTodoNum = todos.reduce((prev,current)=>{
            return current.done ? prev + 1 : prev;
        },0)
        // 所有todos数量
        const total = todos.length;
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" onChange={(event) => {changeAllTodo(event.target.checked)}} checked={total === doneTodoNum && total!==0 ? true : false}/>
                </label>
                <span>
                    <span>已完成{doneTodoNum}</span> / 全部{total}
                </span>
                <button className="btn btn-danger" onClick={clearAllTodo}>清除已完成任务</button>
            </div>
        )
    }
}
