import React, { Suspense, FunctionComponent } from "react"
import { Route, Redirect, Switch, RouteComponentProps, RouteProps } from "react-router-dom"
// import Loading from "@/components/Loading";

interface routeParam extends RouteProps {
  key: any
  requiresAuth?: boolean;
  component: FunctionComponent<any>
}

const renderRoutes = (routes: Array<Record<string, any>>, authed: boolean, authPath = "/login", extraProps = {}, switchProps = {}) => {
  return routes ? (
    // 组件加载很快的情况下 Suspense 会一闪而过 / react-loadable
    // <Suspense fallback={<Loading />}></Suspense>
    <Switch {...switchProps}>
      {routes.map((route: routeParam, i: number) => (
        <Route
          key={route.key || i}
          path={route.path}
          exact={route.exact}
          strict={route.strict}
          render={(props: RouteComponentProps) => {
            if (route.path === authPath && authed) {
              return <Redirect to={{ pathname: "/", state: { from: props.location } }} />
            }
            if (!route.requiresAuth || authed) {
              return <route.component {...props} {...extraProps} route={route} />
            }

            return <Redirect to={{ pathname: authPath, state: { from: props.location } }} />
          }}
        />
      ))}
    </Switch>
  ) : null
}

export default renderRoutes
