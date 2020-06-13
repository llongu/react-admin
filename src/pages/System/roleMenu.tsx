import React, { useState, ReactElement, useEffect } from "react"
import { Table, Row, Col, Tree, Button } from "antd"
import { getMenus, setMenusCode, getMenusCode } from "./utils"
import { MenuProps } from "./data"

interface ColumnsProps {
  title: string
  dataIndex: string
}
interface TableProps {
  name: string
  code: string
}
interface TreeProps {
  title: string
  key: string
  children?: TreeProps[]
}

const FormatTree = (soucre: MenuProps[], treeData = []): TreeProps[] => {
  if (Array.isArray(soucre)) {
    for (let i = 0; i < soucre.length; i++) {
      treeData.push({
        title: soucre[i].name,
        key: soucre[i].code,
        children: soucre[i].children ? FormatTree(soucre[i].children) : []
      })
    }
    return treeData
  }
  return []
}

const roles = [{ name: "管理员", code: "admin" }]
export default (): ReactElement<HTMLElement> => {
  const [state, setState] = useState({
    tableData: roles,
    treeData: []
  })

  const columns: ColumnsProps[] = [
    {
      title: "名称",
      dataIndex: "name"
    },
    {
      title: "账户",
      dataIndex: "code"
    }
  ]
  const onRow = (record: TableProps): object => {
    return {
      onClick: (event: Event): void => {
        console.log(record, event)
      }
    }
  }

  useEffect(() => {
    const treeData = FormatTree(getMenus())
    setState({
      ...state,
      treeData
    })
  }, [])

  const [autoExpandParent, setAutoExpandParent] = useState(true)
  const [expandedKeys, setExpandedKeys] = useState([])

  const [checkedKeys, setCheckedKeys] = useState(getMenusCode())
  const onExpand = (expandedKeys: string[]): void => {
    setExpandedKeys(expandedKeys)
    setAutoExpandParent(false)
  }

  const onCheck = (checkedKeys: string[]): void => {
    setCheckedKeys(checkedKeys)
  }
  const saveMenuCode = (): void => {
    // 基础菜单
    const baseMenusCode = ["home-page", "system-page", "system-menu-page", "system-premission-page", ...checkedKeys]
    setMenusCode(baseMenusCode)
  }

  return (
    <Row gutter={[16, 16]}>
      <Col span={14}>
        <Table columns={columns} onRow={onRow} dataSource={state.tableData} rowKey="code" />
      </Col>
      <Col span={10}>
        <Tree
          checkable
          onExpand={onExpand}
          expandedKeys={expandedKeys}
          autoExpandParent={autoExpandParent}
          onCheck={onCheck}
          checkedKeys={checkedKeys}
          treeData={state.treeData}
        />
        <Button type="primary" onClick={(): void => saveMenuCode()} style={{ marginTop: 45 }}>
          保存
        </Button>
      </Col>
    </Row>
  )
}
