import React, { ReactElement } from "react"
import { HashRouter as Router } from "react-router-dom"
import renderRoutes from "@utils/renderRoutes"
import routesMap from "@/routes/router.config"
import MyContext from "@/models/context"
import ErrorBoundary from "@/components/ErrorBoundary" // error components
const test = (): ReactElement<HTMLElement> => {
  return (
    <MyContext.Provider value={"ProviderValue"}>
      <ErrorBoundary>
        <Router>{renderRoutes(routesMap, true)}</Router>
      </ErrorBoundary>
    </MyContext.Provider>
  )
}

export default test
