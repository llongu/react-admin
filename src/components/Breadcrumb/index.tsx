import React from "react"
import { Link } from "react-router-dom"
import { Breadcrumb } from "antd"

interface routeItem {
  name: string
  path: string
  component: React.FunctionComponent
  children: Array<{ component: React.FunctionComponent<{}> }>
}

export default (props: { location: { pathname: String }; route: { children: { component: React.FunctionComponent<{}> }[] } }) => {
  const pathName = props.location.pathname
  let paths = pathName.split("/")
  if (pathName !== "/") {
    paths.splice(0, 1)
  }

  let childrens = props.route.children
  let breadMap = []

  while (childrens) {
    childrens.forEach((item: routeItem, index) => {
      if (pathName === item.path && !breadMap.includes(item.name)) {
        breadMap.push({
          name: item.name,
          path: item.path
        })
        childrens = null
      } else if (paths.includes(item.path.replace("/", ""))) {
        breadMap.push({
          name: item.name,
          path: item.children ? false : item.path
        })
        childrens = item.children || null
      }
    })
  }
  // console.log(paths)
  // console.log(pathName)
  // console.log(childrens)

  const breadRender = breadMap.map((item, index) => {
    const Links = () => {
      if (item.path) {
        return <Link to={item.path}>{item.name}</Link>
      }
      return <span>{item.name}</span>
    }
    return (
      <Breadcrumb.Item key={index}>
        <Links />
      </Breadcrumb.Item>
    )
  })

  return <Breadcrumb style={{ margin: "16px", marginBottom: 0 }}>{breadRender}</Breadcrumb>
}
