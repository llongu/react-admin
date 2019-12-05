<font size=5>
```
  ├─.babelrc
  ├─.prettierrc
  ├─package-lock.json
  ├─package.json
  ├─postcss.config.js
  ├─README.MD
  ├─tsconfig.json
  ├─webpack.config.js
  ├─tests
  ├─static
  | └1.jpg
  ├─src
  | ├─index.tsx
  | ├─utils
  | | ├─file.d.ts
  | | ├─matchRoutes.tsx   ------------------------------  路由匹配
  | | ├─reanderMenus.tsx  ------------------------------  菜单渲染
  | | └renderRoutes.tsx   ------------------------------  路由渲染
  | ├─template
  | | └index.html
  | ├─routes
  | | ├─index.tsx
  | | └router.config.tsx  ------------------------------  路由map
  | ├─pages
  | | ├─404.tsx
  | | ├─home.tsx
  | | ├─login.tsx
  | | ├─Table
  | | | └index.tsx
  | | ├─List
  | | | ├─list.css
  | | | ├─load-list.tsx
  | | | └scroll-load-list.tsx
  | | ├─Form
  | | | └index.tsx
  | | ├─Calendar
  | | | └index.tsx
  | ├─models
  | | └context.tsx  ------------------------------------  全局store
  | ├─layout
  | | ├─main    ----------------------------------------  主要Layout文件
  | | | ├─index.tsx
  | | | └main.css              
  | ├─components
  | | ├─Sider
  | | | └index.tsx
  | | ├─Loading
  | | | └index.tsx
  | | ├─Header
  | | | └index.tsx
  | | ├─ErrorBoundary ----------------------------------  全局错误捕获组件  
  | | | └index.tsx
  | | ├─Breadcrumb   -----------------------------------  面包屑渲染
  | | | └index.tsx
  ├─config
  | ├─dev.js
  | ├─prod.js
  | └resolve.config.js
  
```
