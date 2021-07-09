import React, { Component } from 'react';
import Header from "./components/Header"
import List from "./components/List"
import "./App.css";

export default class App extends Component {
  state = {
    users:[],
    loading: false,
  }
  render() {
    let titleState;
    if(this.state.users.length === 0 && !this.state.loading){
      titleState = <h1>欢迎使用，输入关键字，随后点击搜索</h1>
    }else if(this.state.loading){
      titleState = <h1>loading......</h1>
    }
    return (
      <div className="container">
        <Header getusers={this.getusers} changeLoading={this.changeLoading} />
        {titleState}
        <List users={this.state.users} />
      </div>
    )
  }
  getusers = (val) =>{
    this.setState({users: val})
  }
  changeLoading = (val)=>{
    this.setState({loading: val})
  }
}
