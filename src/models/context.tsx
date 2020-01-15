import React from "react"
const AppContext = React.createContext({
  PerformanceData: { FP: "", FCP: "" },
  performanceSource: {
    performanceList: {},
    resourceList: [],
    errorList: {
      js: [],
      resource: [],
      ajax: []
    }
  },
  siderCollapsed: false, // 菜单收缩
  changeSiderCollapsed: () => {},
  drawerSettingModal: false, // 设置搜索
  changeDrawerSetting: () => {},
  loginStatus: false, // 登录状态
  changeLoginStatus: () => {}
})

export default AppContext
