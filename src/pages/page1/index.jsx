import React, { Component } from 'react'
import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from 'react-redux'
import './index.scss';
 
@connect(({page1}) => ({
  ...page1,
}))
export default class Page1 extends Component {
 
  componentDidMount = () => {
    const {dispatch} = this.props
    dispatch({
      type:'page1/effectsDemo',
      payload:{
        a:3
      }
    })
  };
 
  render() {
    return (
      <View className="page1-page">
        page1

      </View>
    )
  }
}
