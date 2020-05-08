// import { lazy } from "react"  // lazy and Suspense or  react-loadable

import Loading from "@/components/Loading"
import Loadable from "react-loadable"

function LoadableComponent(loader): object {
  return Loadable({
    loader,
    loading: Loading,
    delay: 200,
    timeout: 10000
  })
}

const LayoutMain = LoadableComponent(() => import(/* webpackChunkName: "layoutMain" */ "@/layout/Main"))
const Login = LoadableComponent(() => import(/* webpackChunkName: "Login" */ "@/pages/login"))
const Home = LoadableComponent(() => import(/* webpackChunkName: "Home"*/ "@/pages/Home"))
const LoadList = LoadableComponent(() => import(/* webpackChunkName: "LoadList" */ "@/pages/List/load-list"))
const ScrollLoadList = LoadableComponent(() => import(/* webpackChunkName: "ScrollLoadList" */ "@/pages/List/scroll-load-list"))
const Calendar = LoadableComponent(() => import(/* webpackChunkName: "Calendar" */ "@/pages/Calendar"))
const Form = LoadableComponent(() => import(/* webpackChunkName: "Form" */ "@/pages/Form"))
const Table = LoadableComponent(() => import(/* webpackChunkName: "Table" */ "@/pages/Table"))
const Menu = LoadableComponent(() => import(/* webpackChunkName: "System" */ "@/pages/System/menu"))
const Premission = LoadableComponent(() => import(/* webpackChunkName: "System" */ "@/pages/System/premission"))

export const baseMap = [
  {
    path: "/login",
    component: Login
  }
]
export const authMap = {
  component: LayoutMain,
  requiresAuth: true,
  children: [
    {
      path: "/",
      icon: "user",
      exact: true,
      component: Home,
      code: "home-page",
      name: "首页"
    },
    {
      path: "/Calendar",
      icon: "user",
      component: Calendar,
      code: "calendar-page",
      name: "日历"
    },
    {
      path: "/List",
      icon: "user",
      name: "列表",
      code: "list-page",
      children: [
        {
          path: "/List/load-list",
          code: "list-load-page",
          component: LoadList,
          name: "列表加载1"
        },
        {
          path: "/List/scroll-load-list",
          code: "list-scroll-load-page",
          component: ScrollLoadList,
          name: "列表加载2"
        }
      ]
    },
    {
      path: "/Form",
      icon: "user",
      name: "表单",
      code: "form-page",
      component: Form
    },
    {
      path: "/Table",
      icon: "user",
      name: "表格",
      code: "table-page",
      component: Table
    },
    {
      path: "/System",
      icon: "set",
      name: "系统管理",
      code: "system-page",
      children: [
        {
          path: "/System/menu",
          code: "system-menu-page",
          component: Menu,
          name: "菜单管理"
        },
        {
          path: "/System/premission",
          code: "system-premission-page",
          component: Premission,
          name: "权限管理"
        }
      ]
    }
  ]
}
export default [...baseMap, authMap]
