import React, { useState } from "react"
import { Table } from "antd"

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
const data = []
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`
  })
}

export default () => {
  const [state, setState] = useState({
    selectedRowKeys: [] // Check here to configure the default column
  })

  const onSelectChange = selectedRowKeys => {
    console.log("selectedRowKeys changed: ", selectedRowKeys)
    setState({ selectedRowKeys })
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
        onSelect: () => {
          setState({
            selectedRowKeys: [...Array(46).keys()] // 0...45
          })
        }
      },
      {
        key: "odd",
        text: "Select Odd Row",
        onSelect: changableRowKeys => {
          let newSelectedRowKeys = []
          newSelectedRowKeys = changableRowKeys.filter((key, index) => {
            if (index % 2 !== 0) {
              return false
            }
            return true
          })
          setState({ selectedRowKeys: newSelectedRowKeys })
        }
      }
    ]
  }

  return <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
}
