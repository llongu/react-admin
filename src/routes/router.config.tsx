// import { lazy } from "react"  // lazy and Suspense or  react-loadable

import Loading from "@/components/Loading"
import Loadable from "react-loadable"

function LoadableComponent(loader) {
  return Loadable({
    loader,
    loading: Loading,
    delay: 200,
    timeout: 10000
  })
}

const LayoutMain = LoadableComponent(() => import(/* webpackChunkName: "layoutMain" */ "@/layout/Main"))
const Login = LoadableComponent(() => import(/* webpackChunkName: "Login" */ "@/pages/login"))
const Home = LoadableComponent(() => import(/* webpackChunkName: "Home"*/ "@/pages/home"))
const LoadList = LoadableComponent(() => import(/* webpackChunkName: "LoadList" */ "@/pages/List/load-list"))
const ScrollLoadList = LoadableComponent(() => import(/* webpackChunkName: "ScrollLoadList" */ "@/pages/List/scroll-load-list"))
const Calendar = LoadableComponent(() => import(/* webpackChunkName: "Calendar" */ "@/pages/Calendar"))
const Form = LoadableComponent(() => import(/* webpackChunkName: "Form" */ "@/pages/Form"))
const Table = LoadableComponent(() => import(/* webpackChunkName: "Table" */ "@/pages/Table"))

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
      name: "首页"
    },
    {
      path: "/Calendar",
      component: Calendar,
      name: "日历"
    },
    {
      path: "/List",
      name: "列表",
      children: [
        {
          path: "/List/load-list",
          component: LoadList,
          name: "列表加载1"
        },
        {
          path: "/List/scroll-load-list",
          component: ScrollLoadList,
          name: "列表加载2"
        }
      ]
    },
    {
      path: "/Form",
      name: "表单",
      component: Form
    },
    {
      path: "/Table",
      name: "表格",
      component: Table
    }
  ]
}
export default [...baseMap, authMap]
