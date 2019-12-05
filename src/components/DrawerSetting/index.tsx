import React, { useState } from "react"
import { Drawer, Button } from "antd"

const scoped = (
  <style jsx>{`
    .ant-drawer.ant-drawer-open .ant-drawer-mask {
      display: none;
    }
    .drawer-setting {
      background: #000;
    }
    .ant-drawer-mask {
      display: none;
    }

    .ant-pro-setting-drawer-handle {
      position: absolute;
      top: 240px;
      right: 300px;
      z-index: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 48px;
      height: 48px;
      font-size: 16px;
      text-align: center;
      background: hsl(209, 100%, 55%);
      border-radius: 4px 0 0 4px;
      cursor: pointer;
      pointer-events: auto;
    }
  `}</style>
)
const DrawerSetting = () => {
  const [state, setState] = useState({
    visible: true
  })

  const showDrawer = () => {
    setState({
      visible: true
    })
  }

  const onClose = () => {
    setState({
      visible: false
    })
  }

  return (
    <>
      <Drawer title="Basic Drawer" placement="right" className="drawer-setting" closable={false} onClose={onClose} visible={state.visible}>
        <div className="ant-pro-setting-drawer-handle">
          asd
          <i aria-label="图标: setting" className="anticon anticon-setting"></i>
        </div>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  )
}

export default DrawerSetting
