import React, { ReactElement, useState } from "react"
import { HashRouter as Router } from "react-router-dom"
import renderRoutes from "@utils/renderRoutes"
import routesMap from "@/routes/router.config"
import AppContext from "@/models/context"
import PerformanceData from "@/models/performance"
import ErrorBoundary from "@/components/ErrorBoundary" // error components
const App = (): ReactElement<HTMLElement> => {
  const [siderCollapsed, setsiderCollapsed] = useState(false)
  const [drawerSettingModal, setDrawerSetting] = useState(true)

  const changeSiderCollapsed = (value: boolean): void => {
    setsiderCollapsed(value)
  }
  const changeDrawerSetting = (value: boolean): void => {
    setDrawerSetting(value)
  }

  return (
    <AppContext.Provider
      value={{
        siderCollapsed,
        changeSiderCollapsed,
        drawerSettingModal,
        changeDrawerSetting,
        PerformanceData
      }}
    >
      <ErrorBoundary>
        <Router>{renderRoutes(routesMap, !!localStorage.getItem("login"))}</Router>
      </ErrorBoundary>
    </AppContext.Provider>
  )
}

export default App
