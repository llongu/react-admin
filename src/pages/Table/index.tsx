import React, { useState, ReactElement, useEffect } from "react"
import { Table } from "antd"
import request from "@utils/request"

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
    selectedRowKeys: [] // Check here to configure the default column
  })

  useEffect(() => {
    async function getData(): Promise<void> {
      const response = await request.post("api/table/query")
      console.log(response)
    }
    getData()
  }, [])

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

  return <Table rowSelection={rowSelection} columns={columns} dataSource={state.tableData} />
}
