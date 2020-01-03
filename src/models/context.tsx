import React from "react"

const AppContext = React.createContext({
  siderCollapsed: false,
  changeSiderCollapsed: (value: boolean): void => {
    this.siderCollapsed = !value
  },
  drawerSettingModal: false,
  changeDrawerSetting: (value: boolean): void => {
    this.drawerSettingModal = !value
  },
  PerformanceData: { FP: "", FCP: "" }
})

export default AppContext
