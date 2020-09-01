
console.log("当前环境是:", process.env.NODE_ENV)
let baseUrl = "http://127.0.0.1:7001/"; //后端接口地址
let noConsole = true; //不在控制台输出请求地址

// 测试环境地址
if (process.env.NODE_ENV === "test") {
  baseUrl = "http://39.104.135.186:7666/"
}

// 正式环境地址
if (process.env.NODE_ENV === "production") {
  baseUrl = ""
}

export {
  baseUrl,
  noConsole
}
