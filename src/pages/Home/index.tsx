import React, { useContext, ReactElement } from "react"
import AppContext from "@/models/context"
import { Table, Button } from "antd"
import Style from "./index.less"
import axios from "axios"

export const ColumnsRenderResourceUrl = (text, record): string => record.data.resourceUrl
export const ColumnsRenderLine = (text, record): string => record.data.line
export const ColumnsRenderCol = (text, record): string => record.data.col
export const ColumnsRenderTarget = (text, record): string => record.data.target
export const ColumnsRenderStatus = (text, record): string => record.data.status

export const TableRowKeyFn = (record, index): string => index.toString()

const columns = [
  {
    title: "源",
    dataIndex: "url"
  },
  {
    title: "请求地址",
    dataIndex: "name",
    width: 300
  },
  {
    title: "请求方式",
    dataIndex: "method"
  },
  {
    title: "请求时间",
    dataIndex: "time"
  },
  {
    title: "http协议",
    dataIndex: "nextHopProtocol"
  },
  {
    title: "资源类型",
    dataIndex: "type"
  },
  {
    title: "资源大小",
    dataIndex: "decodedBodySize"
  },
  {
    title: "耗时",
    dataIndex: "duration"
  }
]

const columns2 = [
  {
    title: "源",
    dataIndex: "resourceUrl",
    render: ColumnsRenderResourceUrl
  },
  {
    title: "错误行",
    dataIndex: "line",
    render: ColumnsRenderLine
  },
  {
    title: "错误列",
    dataIndex: "col",
    render: ColumnsRenderCol
  },
  {
    title: "错误类型",
    dataIndex: "n"
  },
  {
    title: "错误信息",
    dataIndex: "msg",
    width: 400,
    ellipsis: true
  },
  {
    title: "时间",
    dataIndex: "t"
  }
]

const columns3 = [
  {
    title: "源",
    dataIndex: "resourceUrl",
    render: ColumnsRenderResourceUrl
  },
  {
    title: "资源类型",
    dataIndex: "target",
    render: ColumnsRenderTarget
  },

  {
    title: "错误类型",
    dataIndex: "n"
  },
  {
    title: "错误信息",
    dataIndex: "msg"
  },
  {
    title: "时间",
    dataIndex: "t"
  }
]

const columns4 = [
  {
    title: "源",
    dataIndex: "resourceUrl",
    render: ColumnsRenderResourceUrl
  },
  {
    title: "请求类型",
    dataIndex: "method"
  },
  {
    title: "错误状态",
    dataIndex: "status",
    render: ColumnsRenderStatus
  },
  {
    title: "错误类型",
    dataIndex: "n"
  },
  {
    title: "错误信息",
    dataIndex: "msg"
  },
  {
    title: "时间",
    dataIndex: "t"
  }
]

let Performance: {
  addError: Function
}
const Home = (): ReactElement<HTMLElement> => {
  const { PerformanceData, performanceSource } = useContext(AppContext)
  const { performanceList, resourceList, errorList } = performanceSource
  return (
    <>
      <h3>页面性能列表</h3>
      <ul>
        <span>
          首次绘制时间：<strong>{PerformanceData.FP}</strong>
        </span>
        <span>
          首次内容绘制时间：<strong>{PerformanceData.FCP}</strong>
        </span>
      </ul>
      <ul className={Style["performance_list"]}>
        <li>
          页面准备耗时:
          <strong> {performanceList.radt}</strong>
        </li>
        <li>
          重定向耗时:
          <strong> {performanceList.rdit}</strong>
        </li>
        <li>
          DNS解析耗时:
          <strong> {performanceList.dnst}</strong>
        </li>
        <li>
          TCP连接耗时:
          <strong> {performanceList.tcpt}</strong>
        </li>
        <li>
          白屏耗时:
          <strong> {performanceList.wit}</strong>
        </li>
        <li>
          请求耗时:
          <strong> {performanceList.reqt}</strong>
        </li>
        <li>
          unload耗时:
          <strong> {performanceList.uodt}</strong>
        </li>
        <li>
          DOM渲染耗时:
          <strong> {performanceList.domt}</strong>
        </li>
        <li>
          解析DOM耗时:
          <strong> {performanceList.andt}</strong>
        </li>
        <li>
          页面onload耗时:
          <strong> {performanceList.lodt}</strong>
        </li>
      </ul>

      <h3>页面资源列表</h3>
      <Table columns={columns} dataSource={resourceList} scroll={{ x: true }} rowKey={TableRowKeyFn} />

      <h3>错误资源列表</h3>
      <h4>执行错误</h4>
      <Table columns={columns2} dataSource={errorList.js} scroll={{ x: true }} rowKey={TableRowKeyFn} />

      <h4>资源错误</h4>
      <Table columns={columns3} dataSource={errorList.resource} scroll={{ x: true }} rowKey={TableRowKeyFn} />

      <h4>请求错误</h4>
      <Table columns={columns4} dataSource={errorList.ajax} scroll={{ x: true }} rowKey={TableRowKeyFn} />

      <Button
        type="primary"
        id="error1"
        onClick={(): void => {
          Performance.addError()
        }}
      >
        测试执行错误
      </Button>
      <Button
        type="primary"
        id="error2"
        onClick={(): void => {
          axios.post("/api/test/error")
        }}
      >
        测试请求错误
      </Button>
    </>
  )
}

export default Home
