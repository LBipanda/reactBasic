import React, { Component } from 'react';
import PubSub from "pubsub-js";
import axios from "axios";

export default class Header extends Component {
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref={e => {this.searchKey = e}} type="text" placeholder="清输入关键词点击搜索"/>&nbsp;<button onClick={this.search}>Search</button>
                </div>
            </section>
        )
    }
    search = async()=>{
        PubSub.publish("LBipanda",{loading: true})
        // 获取用户输入（连续解构赋值+重命名）
        const {searchKey:{value: keyWord}} = this;
        // 发送网络请求
        // axios.get(`http://localhost:3000/api1/search/users?q=${keyWord}`).then(res => {
        //     // this.props.getusers(res.data.items)
        //     PubSub.publish("LBipanda",{users: res.data.items, loading: false})
        // }).catch(err => {
        //     PubSub.publish("LBipanda",{loading: false})
        //     console.log("err",err);
        // })

        // 未优化
        // fetch(`http://localhost:3000/api1/search/users?q=${keyWord}`).then(res => {
        //     console.log("联系服务器成功了",res);
        //     return res.json()
        // }).then(res => {
        //     console.log("获取数据成功了",res);
        // }).catch(err => {
        //     console.log(err);
        // })

        try {
            let response = await fetch(`http://localhost:3000/api1/search/users?q=${keyWord}`);
            let data = await response.json();
            PubSub.publish("LBipanda",{users: data.items, loading: false})
            console.log(data);
        } catch (error) {
            console.log("请求出错",error);
            PubSub.publish("LBipanda",{loading: false})
        }
    }
}
