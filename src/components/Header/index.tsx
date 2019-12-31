import React, { memo, ReactElement } from "react"
import { Layout, Menu, Icon, Avatar } from "antd"
import { Dropdown } from "antd"
const { Header } = Layout
import Styles from "./index.less"

const Headers = (): ReactElement<HTMLElement> => {
  const collapsed = false
  const toggle = (): void => {
    console.log("toggle")
  }
  const menuHeaderDropdown = (
    <Menu selectedKeys={[]}>
      {
        <Menu.Item key="center">
          <Icon type="user" />
          个人中心
        </Menu.Item>
      }
      {
        <Menu.Item key="settings">
          <Icon type="setting" />
          个人设置
        </Menu.Item>
      }
      {<Menu.Divider />}

      <Menu.Item key="logout">
        <Icon type="logout" />
        退出登录
      </Menu.Item>
    </Menu>
  )
  return (
    <Header style={{ background: "#fff", padding: 0 }}>
      <Icon className="trigger" type={collapsed ? "menu-unfold" : "menu-fold"} onClick={toggle} />
      <Dropdown className={Styles.dropdownMain} overlay={menuHeaderDropdown} overlayClassName="dropdown-menu">
        <span>
          <Avatar size="large" icon="user" alt="avatar" className={Styles.antAvatar} />
          <span>test</span>
        </span>
      </Dropdown>
    </Header>
  )
}

export default memo(Headers)
