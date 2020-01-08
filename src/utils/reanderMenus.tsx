import React, { ReactElement } from "react"
import { authMap } from "@/routes/router.config"
import { Link } from "react-router-dom"
import { Menu, Icon } from "antd"
const { SubMenu } = Menu

interface MapParams {
  children?: Array<MapParams>
  icon?: string
  name?: string
  path?: string
}

const meunMap = (authMap: MapParams): ReactElement<HTMLElement>[] => {
  if (!authMap || !Array.isArray(authMap.children)) {
    throw new Error("generate menu error")
  }

  return authMap.children.map(
    (item): ReactElement<HTMLElement> => {
      if (item.children) {
        return (
          <SubMenu
            key={item.path}
            title={
              <span>
                <Icon type={item.icon || "none"} />
                <span>{item.name}</span>
              </span>
            }
          >
            {meunMap(item)}
          </SubMenu>
        )
      }

      return (
        <Menu.Item key={item.path}>
          <Icon type={item.icon || "none"} />
          <span>
            <Link to={item.path}>{item.name}</Link>
          </span>
        </Menu.Item>
      )
    }
  )
}
export default meunMap(authMap)
