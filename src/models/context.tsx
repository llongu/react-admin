import React from "react"

const AppContext = React.createContext({
  PerformanceData: { FP: "", FCP: "" },
  performanceSource: {},
  siderCollapsed: false, // 菜单收缩
  changeSiderCollapsed: (value: boolean): void => {
    this.siderCollapsed = value
  },
  drawerSettingModal: false, // 设置搜索
  changeDrawerSetting: (value: boolean): void => {
    this.drawerSettingModal = value
  },
  loginStatus: false, // 登录状态
  changeLoginStatus: (value: boolean): void => {
    this.loginStatus = value
  }
})

export default AppContext
