import React, { useContext, ReactElement } from "react"
import AppContext from "@/models/context"
import { Table } from "antd"
import Style from "./index.less"
// Suspense
// function go() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve('3秒后展示 Suspense 包裹效果')
//     }, 3000)
//   })
// }
// let num = 0

const columns = [
  {
    title: "源",
    dataIndex: "name"
  },
  {
    title: "请求地址",
    dataIndex: "age"
  },
  {
    title: "请求方式",
    dataIndex: "address2"
  },
  {
    title: "请求时间",
    dataIndex: "address3"
  },
  {
    title: "请求参数",
    dataIndex: "address4"
  },
  {
    title: "返回状态",
    dataIndex: "address5"
  },
  {
    title: "http协议",
    dataIndex: "address6"
  },
  {
    title: "资源类型",
    dataIndex: "address7"
  },
  {
    title: "资源大小",
    dataIndex: "address8"
  },
  {
    title: "耗时",
    dataIndex: "address9"
  }
]

const columns2 = [
  {
    title: "源",
    dataIndex: "name"
  },
  {
    title: "错误行",
    dataIndex: "age"
  },
  {
    title: "错误列",
    dataIndex: "address1"
  },
  {
    title: "错误类型",
    dataIndex: "address2"
  },
  {
    title: "错误信息",
    dataIndex: "address3"
  },
  {
    title: "时间",
    dataIndex: "address4"
  }
]

const columns3 = [
  {
    title: "源",
    dataIndex: "name"
  },
  {
    title: "资源类型",
    dataIndex: "age"
  },
  {
    title: "错误类型",
    dataIndex: "address1"
  },
  {
    title: "错误信息",
    dataIndex: "address3"
  },
  {
    title: "时间",
    dataIndex: "address4"
  }
]

const columns4 = [
  {
    title: "源",
    dataIndex: "name"
  },
  {
    title: "请求类型",
    dataIndex: "age"
  },
  {
    title: "错误类型",
    dataIndex: "address1"
  },
  {
    title: "错误信息",
    dataIndex: "address3"
  },
  {
    title: "时间",
    dataIndex: "address4"
  }
]

const Home = (): ReactElement<HTMLElement> => {
  // Provider set value, useContext or  <Consumer>{(value)=>{ get... }}</Consumer> getValue
  const PerformanceData: Record<string, {}> = useContext(AppContext)
  console.warn(PerformanceData)

  return (
    <>
      <h3>页面性能列表</h3>
      <ul>
        <span>首次绘制时间：{PerformanceData.FP} </span>
        <span>首次内容绘制时间：{PerformanceData.FCP} </span>
      </ul>
      <ul className={Style["performance_list"]}>
        <li>
          页面准备耗时:
          <p>radt</p>
        </li>
        <li>
          重定向耗时:
          <p>rdit</p>
        </li>
        <li>
          DNS解析耗时:
          <p>dnst</p>
        </li>
        <li>
          TCP连接耗时:
          <p>tcpt</p>
        </li>
        <li>
          白屏耗时:
          <p>wit</p>
        </li>
        <li>
          请求耗时:
          <p>reqt</p>
        </li>
        <li>
          unload耗时:
          <p>uodt</p>
        </li>
        <li>
          DOM渲染耗时:
          <p>domt</p>
        </li>
        <li>
          解析DOM耗时:
          <p>andt</p>
        </li>
        <li>
          页面onload耗时:
          <p>lodt</p>
        </li>
      </ul>

      <h3>页面资源列表</h3>
      <Table columns={columns} dataSource={[]} />

      <h3>错误资源列表</h3>
      <h4>执行错误</h4>
      <Table columns={columns2} dataSource={[]} />

      <h4>资源错误</h4>
      <Table columns={columns3} dataSource={[]} />

      <h4>请求错误</h4>
      <Table columns={columns4} dataSource={[]} />
    </>
  )
}

export default Home
