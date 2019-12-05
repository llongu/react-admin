import React, { memo } from "react"
import { Link } from "react-router-dom"
import { Layout, Menu, Icon, Avatar } from "antd"
import { Dropdown } from "antd"
const { Header } = Layout
import { styles } from "./css"
export default memo(() => {
  const collapsed = false

  const toggle = () => {
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
    <>
      <Header style={{ background: "#fff", padding: 0 }}>
        <Icon className="trigger" type={collapsed ? "menu-unfold" : "menu-fold"} onClick={toggle} />
        <Dropdown
          className={`dropdown-main ${styles.props.className}`}
          overlay={menuHeaderDropdown}
          overlayClassName="dropdown-menu"
        >
          <span className="tests">
            <Avatar size="large" icon="user" alt="avatar" className={`${styles.props.className}`} />
            <span>test</span>
          </span>
        </Dropdown>
      </Header>
      {styles.props.children}
    </>
  )
})
