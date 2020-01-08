import React, { memo, ReactElement, useContext, useState } from "react"
import { Layout, Menu } from "antd"
import meunMap from "@/utils/reanderMenus"
import AppContext from "@/models/context"
import { RouteComponentProps } from "react-router-dom"
const { Sider } = Layout

function Siders(props: RouteComponentProps): ReactElement<HTMLElement> {
  const { siderCollapsed, changeSiderCollapsed } = useContext(AppContext)

  // 地址栏键入选中菜单
  const selectedKeys = [props.location.pathname]
  const [opendKeys, setOpendKeys] = useState(["/" + selectedKeys[0].split("/")[1]])

  const openORclose = (opendKeysProps: Array<string>): void => {
    setOpendKeys(opendKeysProps)
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
      <Menu theme="dark" mode="inline" openKeys={opendKeys} selectedKeys={selectedKeys} onOpenChange={openORclose}>
        {meunMap}
      </Menu>
    </Sider>
  )
}

export default memo(Siders)
