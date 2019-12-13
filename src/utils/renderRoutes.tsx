import React, { FunctionComponent, ReactElement } from "react"
import { Route, Redirect, Switch, RouteComponentProps, RouteProps } from "react-router-dom"
// import Loading from "@/components/Loading";

interface RouteParam extends RouteProps {
  key: string
  requiresAuth?: boolean
  component: FunctionComponent<any>
}

const renderRoutes = (routes: Array<object>, authed: boolean, authPath = "/login", extraProps = {}, switchProps = {}): ReactElement<HTMLElement> | null => {
  return routes ? (
    // 组件加载很快的情况下 Suspense 会一闪而过 / react-loadable
    // <Suspense fallback={<Loading />}></Suspense>
    <Switch {...switchProps}>
      {routes.map((route: RouteParam, i: number) => (
        <Route
          key={route.key || i}
          path={route.path}
          exact={route.exact}
          strict={route.strict}
          render={(props: RouteComponentProps): ReactElement<HTMLElement> => {
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
