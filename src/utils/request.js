/**
 * 接口返回格式约定为：
 * {
 *     code：，//200：正常返回，其他状态码均视为报错
 *     data：，//返回的真正数据
 *     msg：   //返回的信息
 * }
 */

import Taro from '@tarojs/taro';
import { baseUrl, noConsole } from '../config';

export default (options = { method: 'GET', data: {} }) => {
  if (!noConsole) {
    console.log(`${new Date().toLocaleString()}【 M=${options.url} 】P=${JSON.stringify(options.data)}`);
  }
  return Taro.request({
    url: baseUrl + options.url,
    data: options.data,
    headers: {
      'Content-Type': 'application/json',
    },
    method: options.method.toUpperCase(),
  }).then((res) => {
    const { statusCode, data } = res;
    if (statusCode >= 200 && statusCode < 300) {
      if (!noConsole) {
        console.log(`${new Date().toLocaleString()}【 M=${options.url} 】【接口响应：】`,res);
      }
      //返回数据异常时的提示
      if (data.code !== 200) {
        Taro.showToast({
          title: `${res.data.msg}~` || res.data.code,
          icon: 'none',
          mask: true,
        });
      }
      return data;
    } else {
      throw new Error(`网络请求错误，状态码${statusCode}`);
    }
  })
}
