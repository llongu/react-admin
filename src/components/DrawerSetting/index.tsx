import React, { useState, useContext, ReactElement, useEffect } from "react"
import { Drawer, Icon, Input } from "antd"
import Styles from "./index.less"
import AppContext from "@/models/context"

const DrawerSetting = (): ReactElement<HTMLElement> => {
  const { drawerSettingModal, changeDrawerSetting } = useContext(AppContext)

  const [state, setState] = useState({
    themeColor: "#ff0080"
  })

  const showDrawer = (): void => {
    changeDrawerSetting(true)
  }

  const onClose = (): void => {
    changeDrawerSetting(false)
  }
  useEffect(() => {
    changeDrawerSetting(false)
  }, [])
  const changeTheme = (): void => {
    const { value } = document.getElementById("themeColor") as HTMLInputElement
    console.log(value)

    if (window.less) {
      window.less
        .modifyVars({
          "@primary-color": value,
          "@btn-primary-bg": value,
          "@menu-dark-item-active-bg": value,
          "@link-color": value,
          "@icon-color": value,
          "@border-radius-base": value,
          "@border-color-base": value
        })
        .then(() => {
          // alert("主题切换成功")
        })
        .catch(error => {
          // alert(`主题切换失败`)
          console.log(error)
        })
    }
    setState({
      ...state,
      themeColor: value
    })
  }

  return (
    <>
      <Drawer title="设置" placement="right" className={Styles["drawer-setting"]} closable={false} onClose={onClose} visible={drawerSettingModal}>
        <div className={Styles["ant-pro-setting-drawer-handle"]} onClick={showDrawer}>
          <Icon type="setting" theme="outlined" />
        </div>
        主题设置：
        <Input type="color" onChange={changeTheme} value={state.themeColor} id="themeColor" style={{ width: "80px" }} />
      </Drawer>
    </>
  )
}

export default DrawerSetting
