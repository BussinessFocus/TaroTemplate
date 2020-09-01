/**
 * pages模版快速生成脚本,执行命令 npm run tep `文件名`
 */

const fs = require('fs');

const dirName = process.argv[2];

if (!dirName) {
  console.log('文件夹名称不能为空！');
  console.log('示例：npm run tep test');
  process.exit(0);
}

// 页面模版
const indexTep = `import React, { Component } from 'react';
import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from 'react-redux';
import { AtButton } from 'taro-ui'
import './index.scss';
 
@connect(({${dirName}}) => ({
  ...${dirName},
}))
export default class ${titleCase(dirName)} extends Component {
 
  componentDidMount = () => {
    //调用model
    //const {dispatch} = this.props
    //dispatch({
    //  type:'${dirName}/effectsDemo',
    //  payload:{
    //    param1:1
    //  }
    //})
  };
 
  render() {
    return (
      <View className="${dirName}-page">
        ${dirName}
        <AtButton type='primary'>taro UI 按钮</AtButton>
      </View>
    )
  }
}
`;

// scss文件模版
const scssTep = `@import "../../app";
 
.${dirName}-page {
  @include wh(100%, 100%);
}
`;

// model文件模版
const modelTep = `import * as ${dirName}Api from './service';
 
export default {
  namespace: '${dirName}',
  state: {
 
  },
 
  effects: {
    * effectsDemo({ payload }, { call, put }) {
      const { code, data } = yield call(${dirName}Api.demo, payload);
      if (code === 200) {
        yield put({ type: 'save',
          payload: {
            topData: data,
          } });
      }
    },
  },
 
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },
 
};
`;


// service页面模版
const serviceTep = `import Request from '../../utils/request';
 
export const demo = (data) => {
  return Request({
    url: '路径',
    method: 'POST',
    data,
  });
};
`;

//页面配置文件
const configTep = `export default {
  navigationBarTitleText: "${dirName}"
}`



fs.mkdirSync(`./src/pages/${dirName}`); // mkdir $1
process.chdir(`./src/pages/${dirName}`); // cd $1

fs.writeFileSync('index.config.js', configTep);
fs.writeFileSync('index.jsx', indexTep);
fs.writeFileSync('index.scss', scssTep);
fs.writeFileSync('model.js', modelTep);
fs.writeFileSync('service.js', serviceTep);

console.log(`模版${dirName}已创建,请手动增加models和app.config.js`);

function titleCase(str) {
  const array = str.toLowerCase().split(' ');
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i][0].toUpperCase() + array[i].substring(1, array[i].length);
  }
  const string = array.join(' ');
  return string;
}

process.exit(0);
