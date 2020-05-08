import React, { useState, ReactElement } from "react"
import { Table, Button, Space } from "antd"
import AddForm, { AddFormFn } from "./Menu/AddForm"
import { MenuProps, MenuTableProps } from "./Menu/data"
import { getMenus, setMenus } from "./Menu/utils"

export default (): ReactElement<HTMLElement> => {
  const { show, hide, handleOk, visible, confirmLoading } = AddFormFn()

  const [state, setState] = useState({
    tableData: getMenus(),
    parentInfo: {}
  })
  const query = (menus: MenuProps[]): void => {
    setState({
      ...state,
      tableData: menus
    })
  }

  const newAdd = (): void => {
    setState({
      ...state,
      parentInfo: {}
    })
    show()
  }

  const rowAdd = (record: MenuTableProps): void => {
    setState({
      ...state,
      parentInfo: record
    })
    show()
  }
  const rowDel = (record: MenuTableProps): void => {
    setState({
      ...state,
      parentInfo: {}
    })
    setMenus({ name: "", code: "", del: record })
    query(getMenus())
  }

  const columns = [
    {
      title: "名称",
      dataIndex: "name"
    },
    {
      title: "编码",
      dataIndex: "code"
    },
    {
      title: "菜单数量",
      dataIndex: "num"
    },
    {
      title: "操作",
      dataIndex: "op",
      render: (text: string, record: MenuTableProps): ReactElement => {
        return record.code === "system-page" ? (
          <a onClick={(): void => rowAdd(record)}>添加</a>
        ) : (
          <Space>
            <a onClick={(): void => rowAdd(record)}>添加</a>
            <a onClick={(): void => rowDel(record)}>删除</a>
          </Space>
        )
      }
    }
  ]
  return (
    <>
      <Button type="primary" onClick={(): void => newAdd()}>
        新增
      </Button>
      <Table columns={columns} dataSource={state.tableData} rowKey="code" />
      <AddForm parentInfo={state.parentInfo} query={query} visible={visible} handleOk={handleOk} confirmLoading={confirmLoading} hide={hide} />
    </>
  )
}
