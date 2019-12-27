import React, { ReactElement } from "react"
import { HashRouter as Router } from "react-router-dom"
import renderRoutes from "@utils/renderRoutes"
import routesMap from "@/routes/router.config"
import AppContext from "@/models/context"
import PerformanceData from "@/models/performance"
import ErrorBoundary from "@/components/ErrorBoundary" // error components
const App = (): ReactElement<HTMLElement> => {
  return (
    <AppContext.Provider value={PerformanceData}>
      <ErrorBoundary>
        <Router>{renderRoutes(routesMap, true)}</Router>
      </ErrorBoundary>
    </AppContext.Provider>
  )
}

export default App
