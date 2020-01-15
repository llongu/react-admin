import React from "react"
const AppContext = React.createContext({
  PerformanceData: { FP: "", FCP: "" },
  performanceSource: {
    performanceList: {
      radt: "",
      rdit: "",
      dnst: "",
      tcpt: "",
      wit: "",
      reqt: "",
      uodt: "",
      domt: "",
      andt: "",
      lodt: ""
    },
    resourceList: [],
    errorList: {
      js: [],
      resource: [],
      ajax: []
    }
  },
  siderCollapsed: false, // 菜单收缩
  changeSiderCollapsed: (status: boolean) => {
    this.siderCollapsed = status
  },
  drawerSettingModal: false, // 设置搜索
  changeDrawerSetting: (status: boolean) => {
    this.drawerSettingModal = status
  },
  loginStatus: false, // 登录状态
  changeLoginStatus: (status: boolean) => {
    this.loginStatus = status
  }
})

export default AppContext
