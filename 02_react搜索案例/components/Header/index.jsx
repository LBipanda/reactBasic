import React, { Component } from 'react';
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
    search = ()=>{
        this.props.changeLoading(true);
        // 获取用户输入（连续解构赋值+重命名）
        const {searchKey:{value: keyWord}} = this;
        // 发送网络请求
        axios.get(`http://localhost:3000/api1/search/users?q=${keyWord}`).then(res => {
            this.props.getusers(res.data.items)
            this.props.changeLoading(false);
        }).catch(err => {
            this.props.changeLoading(false);
            console.log("err",err);
        })
    }
}
