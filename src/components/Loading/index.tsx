import React, { ReactElement } from "react"
import { Spin } from "antd"

export default function Loading(): ReactElement<HTMLElement> {
  // useEffect(() => {})
  // useLayoutEffect((): any => {
  //   // return false
  // })
  return <Spin style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)" }} />
}
