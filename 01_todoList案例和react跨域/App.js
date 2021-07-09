import React, { Component } from 'react'
import Header from "./components/Header"
import List from "./components/List"
import Footer from "./components/Footer"
import "./App.css";
import axios from 'axios';
export default class App extends Component {
  //状态在哪里，操作状态的方法就在哪里
  state = {
    todos: [
      {id: "001", name: "吃饭", done: true},
      {id: "002", name: "碎觉", done: true},
      {id: "003", name: "当咸鱼", done: false},
      {id: "004", name: "躺平", done: false},
    ]
  }
  render() {
    const {todos} = this.state;
    return (
      <div className="todo-container">
        <button onClick={this.handleAjax}>点击发起ajax请求</button>
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List todos={todos} updateTodo={this.updateTodo} delTodo={this.delTodo} />
          <Footer todos={todos} changeAllTodo={this.changeAllTodo} clearAllTodo={this.clearAllTodo} />
        </div>
      </div>
    )
  }
  //新增一个todo
  addTodo = (data) => {
    const {todos} = this.state;
    console.log(data);
    const newTodos = [data,...todos];
    this.setState({todos: newTodos})
  }
  // 更新todo
  updateTodo = (id,done)=>{
    const {todos} = this.state;
    const newTodos = todos.map(item => {
      if(item.id === id)return {...item,done}
      else return item;
    })
    this.setState({todos: newTodos})
  }
  // 删除一个todo的回调
  delTodo = (id)=>{
    if(window.confirm("确定删除吗？")){
      const {todos} = this.state;
      const newTodos = todos.filter(item => {
        return item.id !== id;
      })
      this.setState({todos: newTodos})
    }
  }
  // 删除一个todo的回调
  changeAllTodo = (flag)=>{
      const {todos} = this.state;
      const newTodos = todos.map(item => {
        return {...item,done: flag};
      })
      this.setState({todos: newTodos})
  }
  //删除所有todo的回调
  clearAllTodo = ()=>{
    this.setState({todos: []})
  }

  handleAjax = ()=>{
    axios.get("http://localhost:3000/api1/search/users2").then(res => {
      console.log("res",res);
    }).catch(err =>{
      console.log("err",err);
    })
  }
}
