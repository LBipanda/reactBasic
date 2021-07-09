import React, { Component } from 'react';
// import qs from "querystring";

// let obj = { name: 'tom', age: 18}; //name=tom&age=18 key=value&key=value
// console.log(qs.stringify(obj));

// let str = 'carName=奔驰&price=199';
// console.log(qs.parse(str));

const Content = [
    {id: "001", content: "你好，祖国！！！"},
    {id: "002", content: "你好，React！！！"},
    {id: "003", content: "你好，未来的自己！！！"},
]

export default class Detail extends Component {
    render() {
        // 接收params参数
        // const {id, title} = this.props.match.params;

        // 接收search参数
        // const {id, title} = qs.parse((this.props.location.search).slice(1));

        // 接收state参数
        const {id, title} = this.props.location.state || {};

        const showContent = Content.find(i =>  i.id === id) || {};
        return (
            <ul>
                <li>ID: {id}</li>
                <li>TITLE: {title}</li>
                <li>CONTENT: {showContent.content}</li>
            </ul>
        )
    }
}
