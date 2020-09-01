import React, { Component } from 'react';
import Taro from '@tarojs/taro';
import {Button, Text, View} from '@tarojs/components';
import { connect } from 'react-redux';
import { AtButton } from 'taro-ui'
import './index.scss';
 
@connect(({index}) => ({
  ...index,
}))
export default class Index extends Component {
 
  componentDidMount = () => {
 
  };
 
  render() {
    return (
      <View className="index-page">
        <Button className='dec_btn' >taro 自带按钮</Button>
        <Button className='dec_btn' onClick={()=>{Taro.redirectTo({
          url: '/pages/page1/index'
        })}}>跳转page1</Button>
        <Button className='dec_btn' onClick={()=>{Taro.redirectTo({
          url: '/pages/page2/index'
        })}}>跳转page2</Button>
        <View><Text>Hello, World</Text></View>
        <AtButton type='primary'>taro UI 按钮</AtButton>
      </View>
    )
  }
}
