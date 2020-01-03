import React, { memo, ReactElement, useContext } from "react"
import { Layout, Menu } from "antd"
import meunMap from "@/utils/reanderMenus"
import AppContext from "@/models/context"

const { Sider } = Layout

function Siders(): ReactElement<HTMLElement> {
  const { siderCollapsed, changeSiderCollapsed } = useContext(AppContext)

  let selectedKeys = JSON.parse(localStorage.getItem("selectedKeys")) || ["1"]
  let opendKeys = [selectedKeys[0].split("")[0]]

  const menuSelected = (props: { selectedKeys: string[] }): void => {
    localStorage.setItem("selectedKeys", JSON.stringify(props.selectedKeys))
    selectedKeys = props.selectedKeys
    opendKeys = [selectedKeys[0].split("")[0]]
  }

  return (
    <Sider
      breakpoint="sm"
      onBreakpoint={(broken): void => {
        changeSiderCollapsed(broken)
      }}
      trigger={null}
      collapsed={siderCollapsed}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultOpenKeys={opendKeys} defaultSelectedKeys={selectedKeys} onSelect={menuSelected}>
        {meunMap}
      </Menu>
    </Sider>
  )
}

export default memo(Siders)
