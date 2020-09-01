# 目录结构说明
```
config taro的配置文件存放文件夹
  dev.js 开发环境的配置文件
  index.js 公共的配置文件
  prod.js 生产环境的配置文件
  test.js 测试环境的配置文件
dist 打包后存放的文件夹
src 工程文件存放文件夹
  assets 静态资源存放文件夹，包括图片，字体文件等
  components 组件文件夹
  config 工程配置文件，配置后台接口访问的url等，并且区分开发、测试、生产环境
    index.js
  models dva models的注册与全局model的存放处
    globalModel.js 全局model
    index.js model汇总导出文件
    service.js 
  pages 项目页面文件
    index  页面文件夹
      index.config.js  当前页面的配置
      index.jsx  当前页面代码
      index.scss  当前页面样式文件
      model.js  当前页面model
      service.js  当前页面对应的接口服务
  utils 项目工具库文件
  app.config.js app配置文件
  app.jsx 项目入口文件
  app.scss 项目全局样式文件
  index.html 项目入口html页面文件
.editorconfig
.eslintrc.js eslint配置文件
.gitignore git忽略文件配置
babel.config.js babel配置文件
package.json 项目配置文件
project.config.json 导出项目时的配置文件
README.md 项目说明文件
template.js 页面模板生成命令的执行文件
```
