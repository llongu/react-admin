import React, { ReactElement, useState, useEffect } from "react"
import { render } from "react-dom"
import Routes from "@/routes"
import ErrorBoundary from "@/components/ErrorBoundary" // error components

import AppContext from "@/models/context"
import { PerformanceData, Performance, PerformanceSet } from "@/models/performance"
// PerformanceSource 存储 防止setState 被重置
let initPerformanceSource = {
  performanceList: {},
  resourceList: [],
  errorList: {
    js: [],
    resource: [],
    ajax: []
  }
}
const App = (): ReactElement<HTMLElement> => {
  const [siderCollapsed, setsiderCollapsed] = useState(true)
  const [drawerSettingModal, setDrawerSetting] = useState(true)
  const [loginStatus, setLoginStatus] = useState(!!localStorage.getItem("login"))
  const [performanceSource, setPerformanceSource] = useState(initPerformanceSource)

  useEffect(() => {
    Performance(
      {
        domain: "./api/webreport" // Your API address
      },
      function(data: object) {
        // 去掉 则上报 Your API address
        // console.log(data)
        const newData = PerformanceSet(initPerformanceSource, data)
        console.log(newData)
        initPerformanceSource = newData
        setPerformanceSource(newData)
      }
    )
  }, [])

  const changeSiderCollapsed = (value: boolean): void => {
    setsiderCollapsed(value)
  }
  const changeDrawerSetting = (value: boolean): void => {
    setDrawerSetting(value)
  }
  const changeLoginStatus = (value: boolean): void => {
    setLoginStatus(value)
  }

  return (
    <AppContext.Provider
      value={{
        PerformanceData,
        performanceSource,
        siderCollapsed,
        changeSiderCollapsed,
        drawerSettingModal,
        changeDrawerSetting,
        loginStatus,
        changeLoginStatus
      }}
    >
      <ErrorBoundary>{Routes(loginStatus)}</ErrorBoundary>
    </AppContext.Provider>
  )
}

render(<App />, document.getElementById("app"))
