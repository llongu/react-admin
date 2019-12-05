import NotFound from "@/pages/404";
import { FunctionComponent } from "react";
import { insProgress } from "react-ins-progress-bar";
interface routeItem {
  path: String;
  component: Function;
  children: Array<Object>;
}
function matchRoutes(
  pathname: String,
  route: Array<{ component: FunctionComponent }>
) {
  insProgress.start();

  let components = null;
  function deepMatch(routeArr: Array<Object>) {
    if (!Array.isArray(routeArr)) {
      throw new Error("matchRoutes error");
    }
    routeArr.forEach((item: routeItem, index) => {
      if (item.path === pathname && !components) {
        components = item.component;
      } else if (Array.isArray(item.children) && !components) {
        deepMatch(item.children);
      }
    });
  }

  deepMatch(route);
  setTimeout(() => {
    insProgress.finish();
  }, 10);

  if (!components) {
    return NotFound;
  }

  return components;
}
export default matchRoutes;
