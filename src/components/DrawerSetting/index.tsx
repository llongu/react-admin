import React, { useState } from "react"
import { Drawer, Button, Icon, Input } from "antd"
import Styles from "./index.less"
const DrawerSetting = () => {
  const [state, setState] = useState({
    visible: true,
    themeColor: "#ff0080"
  })

  const showDrawer = () => {
    setState({
      ...state,
      visible: true
    })
  }

  const onClose = () => {
    setState({
      ...state,
      visible: false
    })
  }

  const changeTheme = e => {
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
      <Drawer title="设置" placement="right" className={Styles["drawer-setting"]} closable={false} onClose={onClose} visible={state.visible}>
        <div className={Styles["ant-pro-setting-drawer-handle"]} onClick={showDrawer}>
          <Icon type="setting" theme="outlined" />
        </div>
        更换主题：
        <Input type="color" onChange={changeTheme} value={state.themeColor} id="themeColor" style={{ width: "80px" }} />
      </Drawer>
    </>
  )
}

export default DrawerSetting
