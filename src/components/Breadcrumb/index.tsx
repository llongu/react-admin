import React, { ReactElement } from "react"
import { Link } from "react-router-dom"
import { Breadcrumb } from "antd"

interface RouteItem {
  name: string
  path: string
  component: React.FunctionComponent
  children: Array<{ component: React.FunctionComponent<{}> }>
}

const Breadcrumbs = (props: {
  location: { pathname: string }
  route: { children: { component: React.FunctionComponent<{}> }[] }
}): ReactElement<HTMLElement> => {
  const pathName = props.location.pathname
  const paths = pathName.split("/")
  if (pathName !== "/") {
    paths.splice(0, 1)
  }

  let childrens = props.route.children
  const breadMap = []

  while (childrens) {
    childrens.forEach((item: RouteItem) => {
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
    const Links = (): ReactElement<HTMLElement> => {
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
export default Breadcrumbs
