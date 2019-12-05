import React, { memo } from "react"
import { Link } from "react-router-dom"
import { Layout, Menu, Icon } from "antd"
import meunMap from "@/utils/reanderMenus"
const { Sider } = Layout
const { SubMenu } = Menu

export default memo(() => {
  const collapsed = false
  let selectedKeys = JSON.parse(localStorage.getItem("selectedKeys")) || ["1"]
  let opendKeys = [selectedKeys[0].split("")[0]]

  const menuSelected = (props: { selectedKeys: string[] }) => {
    localStorage.setItem("selectedKeys", JSON.stringify(props.selectedKeys))
    selectedKeys = props.selectedKeys
    opendKeys = [selectedKeys[0].split("")[0]]
  }

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultOpenKeys={opendKeys} defaultSelectedKeys={selectedKeys} onSelect={menuSelected}>
        {meunMap}
      </Menu>
    </Sider>
  )
})
