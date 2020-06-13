import React, { memo, ReactElement, useContext } from "react"
import { Layout, Menu, Icon, Avatar } from "antd"
import { Dropdown } from "antd"
const { Header } = Layout
import Styles from "./index.less"
import AppContext from "@/models/context"
import { RouteComponentProps } from "react-router-dom"
import { UserOutlined } from "@ant-design/icons"

const Headers = (props: RouteComponentProps): ReactElement<HTMLElement> => {
  const { siderCollapsed, changeSiderCollapsed, changeLoginStatus } = useContext(AppContext)
  const toggle = (): void => {
    changeSiderCollapsed(!siderCollapsed)
  }
  const logOut = (): void => {
    localStorage.setItem("login", "")
    changeLoginStatus(false)
    props.history.push("/login")
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

      <Menu.Item key="logout" onClick={logOut}>
        <Icon type="logout" />
        退出登录
      </Menu.Item>
    </Menu>
  )
  return (
    <Header style={{ background: "#fff", padding: 0 }}>
      <Icon className="trigger" type={siderCollapsed ? "menu-unfold" : "menu-fold"} onClick={toggle} />
      <Dropdown className={Styles.dropdownMain} overlay={menuHeaderDropdown} overlayClassName="dropdown-menu">
        <span>
          <Avatar size="large" icon={<UserOutlined />} alt="avatar" className={Styles.antAvatar} />
          <span>test</span>
        </span>
      </Dropdown>
    </Header>
  )
}

export default memo(Headers)
