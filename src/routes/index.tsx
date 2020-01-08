import React, { ReactElement } from "react"
import { HashRouter as Router } from "react-router-dom"
import renderRoutes from "@utils/renderRoutes"
import routesMap from "@/routes/router.config"

const Routes = (loginStatus: boolean): ReactElement<HTMLElement> => {
  return <Router>{renderRoutes(routesMap, loginStatus)}</Router>
}

export default Routes
