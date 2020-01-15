import React, { ReactElement, useContext } from "react"
import { HashRouter as Router } from "react-router-dom"
import renderRoutes from "@utils/renderRoutes"
import routesMap from "@/routes/router.config"
import AppContext from "@/models/context"

const Routes = (): ReactElement<HTMLElement> => {
  const { loginStatus } = useContext(AppContext)

  return <Router>{renderRoutes(routesMap, loginStatus)}</Router>
}

export default Routes
