import React, { Component } from 'react';
import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from 'react-redux';
import { AtButton } from 'taro-ui'
import './index.scss';
 
@connect(({page2}) => ({
  ...page2,
}))
export default class Page2 extends Component {
 
  componentDidMount = () => {
 
  };
 
  render() {
    return (
      <View className="page2-page">
        page2
        <AtButton type='primary'>taro UI 按钮</AtButton>
      </View>
    )
  }
}
