import NotFound from "@/pages/404"
import { FunctionComponent } from "react"
import { insProgress } from "react-ins-progress-bar"
interface routeItem {
  path: string
  component: Function;
  children: Array<Record<string, any>>;
}
function matchRoutes(pathname: string, route: Array<{ component: FunctionComponent }>) {
  insProgress.start()

  let components = null
  function deepMatch(routeArr: Array<Record<string, any>>) {
    if (!Array.isArray(routeArr)) {
      throw new Error("matchRoutes error")
    }
    routeArr.forEach((item: routeItem, index) => {
      if (item.path === pathname && !components) {
        components = item.component
      } else if (Array.isArray(item.children) && !components) {
        deepMatch(item.children)
      }
    })
  }

  deepMatch(route)
  setTimeout(() => {
    insProgress.finish()
  }, 10)

  if (!components) {
    return NotFound
  }

  return components
}
export default matchRoutes
