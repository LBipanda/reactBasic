import React, { Component } from 'react';
import { Button } from 'antd';
import { WechatOutlined, SearchOutlined  } from '@ant-design/icons';
import './App.less';

export default class App extends Component {
  render() {
    return (
      <div>
        <Button type="primary">Primary Button</Button>
        <WechatOutlined />
        <Button type="primary" icon={<SearchOutlined />}>Search</Button>
      </div>
    )
  }
}
