import React, { useContext, useReducer, ReactElement, useEffect } from "react"
// import imgs from "@static/img/1.jpg"
import AppContext from "@/models/context"
import { Button } from "antd"

// Suspense
// function go() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve('3秒后展示 Suspense 包裹效果')
//     }, 3000)
//   })
// }
// let num = 0

interface InitState {
  num: number
  status: boolean
}
const Home = (): ReactElement<HTMLElement> => {
  // Provider set value, useContext or  <Consumer>{(value)=>{ get... }}</Consumer> getValue
  const PerformanceData = useContext(AppContext)
  console.log(PerformanceData)
  // useEffect

  // useState

  // useReducer
  const initState = {
    num: 0,
    status: false
  }
  useEffect(() => {
    console.log("home")
  })

  // Suspense
  // async function fetchs() {
  //   const data = await go()
  //   num++
  //   return data
  // }
  // if (!num) {
  //   throw fetchs() //throw promise for Suspense know
  // }

  const MyReducer = (state: InitState, action: { type: number }): InitState => {
    switch (action.type) {
      case 1:
        return { ...state, num: 1, status: true }
      case 2:
        return { ...state, num: 2, status: true }
      default:
        return { ...state }
    }
  }

  const [state, dispatch] = useReducer(MyReducer, initState)

  const testReducer = (): void => {
    dispatch({
      type: 1
    })
  }

  return (
    <div>
      home
      <br />
      <span>{state.num} </span>
      <span>{`${state.status}`}</span>
      <br />
      my-web-report
      <Button onClick={testReducer}>testReducer</Button>
      FP:{PerformanceData.FP}
      FCP:{PerformanceData.FCP}
    </div>
  )
}

export default Home
