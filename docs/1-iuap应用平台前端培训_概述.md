

## 概述

iuap 应用平台前端开发框架采用 React + Redux + Webpack 的技术栈为基础的技术栈，结合业务最佳实践形成完整的开发技术栈。在接下来的培训内容中，你会涉及到以下内容：

- （1）学习如何快速搭建本地的基础环境，并且获得前端开发框架的源码后快速启动开发。
- （2）在这部分内容，将会是最重点的部分，我们会为你详细介绍开发框架 tinper-react，其中会涉及到目录与规范的约定、如何创建业务模块和页面功能、掌握组件化技术的核心、学习框架中会涉及到的重要且常用的ES6语法特性、掌握数据模型Model的定义、掌握前端路由知识。
- （3）第三部分内容将给大家带来前端组件库的内容，主要是结合 tinper-bee 基础组件库的实践应用。
- （4）这一部分是实战案例内容，主要是对前两部分内容深入理解和实战。
- （5）最后给大家介绍的是架构和扩展部分，除了掌握以上常规的开发技术之外，框架还提供了很多其他的能力，比如如何进行数据Mock和Proxy、如何部署静态资源、如何理解中间件等。


### 1、架构图预览

![](http://design.yonyoucloud.com/static/tinper-react/reactfile/tinper-react-pic.jpeg)

### 2、技术栈说明

- `react & react-dom`、`mirrorx`、`axios`、`uba`.
- `babel`、`ES6/7 新语法`、`PostCSS 及相关插件`、`Less`
- 框架中默认使用 tinper-bee 组件库，配套的文档请访问：[bee.tinper.org](bee.tinper.org)

### 3、基础构建能力

- 开发框架基于前端集成开发工具[ uba ](https://github.com/iuap-design/tinper-uba)，项目生成的时候需要安装全局工具命令来使用，参与开发人员无需重复安装全局使用.

- 集成常规的使用插件等配置，可以满足常规开发需求，无需繁琐复杂的配置项，简单、干净、舒服.

- 依赖强大的集成开发工具 `uba` 内置 `数据模拟`、`代理请求`、`静态托管`、`开放配置`等功能.

- 方便开发人员在快速搭建`react`前端开发项目，无需学习复杂配置环境，拆箱即用.


