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

const meunMap = (authMap: MapParams, SubMenuIndex: number | boolean = false): ReactElement<HTMLElement>[] => {
  if (!Array.isArray(authMap.children)) {
    throw new Error("generate menu error")
  }

  return authMap.children.map(
    (item, index): ReactElement<HTMLElement> => {
      if (item.children) {
        return (
          <SubMenu
            key={index}
            title={
              <span>
                <Icon type={item.icon || "none"} />
                <span>{item.name}</span>
              </span>
            }
          >
            {meunMap(item, index)}
          </SubMenu>
        )
      }

      return (
        <Menu.Item key={SubMenuIndex || SubMenuIndex === 0 ? SubMenuIndex + "" + index : index}>
          <Icon type={item.icon || "none"} />
          <Link to={item.path}>{item.name}</Link>
        </Menu.Item>
      )
    }
  )
}
export default meunMap(authMap)
