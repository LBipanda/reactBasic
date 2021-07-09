import React, { Component } from 'react';
import PubSub from "pubsub-js";

export default class List extends Component {
    state = {
        users: [],
        loading: false,
    }
    componentDidMount(){
        PubSub.subscribe("LBipanda",(msg,data)=> {
            this.setState(data)
        })
    }
    render() {
        const {users} = this.state;
        let titleState;
        if(this.state.users.length === 0 && !this.state.loading){
          titleState = <h1>欢迎使用，输入关键字，随后点击搜索</h1>
        }else if(this.state.loading){
          titleState = <h1>loading......</h1>
        }
        return (
            <div>
                {titleState}
                <div className="row">
                    {users.map(item =>{
                        return <div className="card" key={item.id}>
                                    <a rel="noreferrer" href={item.html_url} target="_blank">
                                    <img alt="head_portrait" src={item.avatar_url} style={{width: '100px'}}/>
                                    </a>
                                    <p className="card-text">{item.login}</p>
                                </div>
                    })}
                </div>
            </div>
        )
    }
}
