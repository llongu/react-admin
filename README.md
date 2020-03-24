## 基于 webpack+react+typescript+antd+hapi+web-report

实现：
· webpack chunk 缓存
· webpack externals 配置 加快打包速度
· 性能上报，执行请求错误上报
· 主题配置
待实现:
· 权限功能
· redux 版本
· mobx 版本

- npm run dev 启动
- npm run mock 接口服务
- npm run build 打包
- npm run lint 代码规范检查
- npm run tests 代码测试

rt
├── config
│ ├── dev.js ------------------------------ 生产环境
│ ├── prod.js ------------------------------ 开发环境
│ └── resolve.config.js
├── jest.config.js
├── mock  
│ ├── api
│ │ ├── Calendar.js
│ │ ├── List.js
│ │ └── Table.js
│ ├── index.js
│ └── mock-serve.js ------------------------------ hapi
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── src
│ ├── components
│ │ ├── Breadcrumb ------------------------------ 面包屑渲染
│ │ ├── DrawerSetting
│ │ ├── ErrorBoundary ------------------------------ 全局错误捕获组件
│ │ ├── Header
│ │ ├── Loading
│ │ └── Sider
│ ├── index.tsx
│ ├── layout
│ │ └── main
│ ├── models
│ │ ├── appContextProvider.tsx ------------------------------ 全局 store
│ │ ├── context.tsx ------------------------------ store create
│ │ └── performance.ts ------------------------------ web-report
│ ├── pages
│ │ ├── 404.tsx
│ │ ├── Calendar
│ │ ├── Form
│ │ ├── Home
│ │ ├── List
│ │ ├── login.tsx
│ │ └── Table
│ ├── routes
│ │ ├── index.tsx
│ │ └── router.config.tsx ------------------------------ 路由 map
│ ├── services ------------------------------ api 管理
│ │ ├── calendar.ts
│ │ ├── list.ts
│ │ └── table.ts
│ ├── template
│ │ └── index.html
│ ├── theme ------------------------------ 主题配置
│ │ ├── main.less
│ │ ├── theme.js
│ │ └── variables.less
│ └── utils
│ ├── httpCode.ts
│ ├── matchRoutes.tsx ------------------------------ 路由匹配  
│ ├── reanderMenus.tsx ------------------------------ 菜单渲染
│ ├── renderRoutes.tsx ------------------------------ 路由渲染
│ └── request.ts
├── static
│ ├── img
│ │ └── 1.jpg
│ └── js
├── tests  
│ ├── e2e ------------------------------ 用户测试
│ │ ├── 404.spec.tsx
│ │ ├── calendar.spec.tsx
│ │ ├── form.spec.tsx
│ │ ├── home.spec.tsx
│ │ ├── list.spec.tsx
│ │ ├── login.spec.tsx
│ │ └── table.spec.tsx
│ ├── services ------------------------------ 接口测试
│ │ └── index.spec.tsx
│ ├── setup.ts
│ └── unit ------------------------------ 单元测试
│ └── index.spec.tsx
├── tsconfig.json
├── types
│ ├── ll.d.ts
│ └── module.d.ts
└── webpack.config.js ------------------------------ webpack 基础配置
