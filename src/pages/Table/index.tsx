import React, { useState, ReactElement, useEffect } from "react"
import { Table } from "antd"
import { tableQuery } from "@services/table"

const columns = [
  {
    title: "Name",
    dataIndex: "name"
  },
  {
    title: "Age",
    dataIndex: "age"
  },
  {
    title: "Address",
    dataIndex: "address"
  }
]
export default (): ReactElement<HTMLElement> => {
  const [state, setState] = useState({
    tableData: [],
    pageIndex: 1,
    pageSize: 10,
    selectedRowKeys: [] // Check here to configure the default column
  })

  useEffect(() => {
    let isUnInstall = false
    async function getData(): Promise<void> {
      try {
        const res: { list?: [] } = await tableQuery()
        if (isUnInstall) return
        setState({
          ...state,
          tableData: res.list || []
        })
      } catch (error) {
        console.error(error)
      }
    }

    getData()
    return (): void => {
      isUnInstall = true
    }
  }, [state.pageIndex])

  const onTableChange = (pagination): void => {
    setState({
      ...state,
      pageIndex: pagination.current
    })
  }
  const onSelectChange = (selectedRowKeys): void => {
    console.log("selectedRowKeys changed: ", selectedRowKeys)
    setState({ ...state, selectedRowKeys })
  }

  const { selectedRowKeys } = state
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    hideDefaultSelections: true,
    selections: [
      {
        key: "all-data",
        text: "Select All Data",
        onSelect: (): void => {
          setState({
            ...state,
            selectedRowKeys: [...Array(46).keys()] // 0...45
          })
        }
      },
      {
        key: "odd",
        text: "Select Odd Row",
        onSelect: (changableRowKeys: []): void => {
          let newSelectedRowKeys = []
          newSelectedRowKeys = changableRowKeys.filter((key, index) => {
            if (index % 2 !== 0) {
              return false
            }
            return true
          })
          setState({ ...state, selectedRowKeys: newSelectedRowKeys })
        }
      }
    ]
  }

  return (
    <Table
      rowSelection={rowSelection}
      columns={columns}
      dataSource={state.tableData}
      pagination={{ current: state.pageIndex, defaultPageSize: state.pageSize }}
      onChange={onTableChange}
    />
  )
}
