import React, { Component } from 'react'

export default class Item extends Component {
    state = {
        mouse: false,//标识鼠标移入移出
    }
    render() {
        const {id,name,done} = this.props;
        const {mouse} = this.state;
        return (
            <li style={{background: mouse ? "#ddd" : "white"}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.handleChange(id)} />
                    <span>{name}</span>
                </label>
                <button className="btn btn-danger" onClick={() => {this.handleDelete(id)}} style={{display: mouse?"block":"none"}}>删除</button>
            </li>
        )
    }
    // 鼠标移入移出的回调
    handleMouse = (flag)=>{
        return () => {
            this.setState({mouse: flag})
        }
    }
    // 勾选，取消勾选的回调
    handleChange = (id)=>{
        return (event)=>{
            // console.log(id,event.target.checked);
            this.props.updateTodo(id,event.target.checked)
        }
    }
    // 删除todo
    handleDelete = (id)=>{
        this.props.delTodo(id)
    }
}
