import React, { useContext, useEffect, useState, useReducer, ReactElement } from "react"
import imgs from "@static/1.jpg"
import MyContext from "@/models/context"
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
  const ProviderValue = useContext(MyContext)
  console.log(ProviderValue)
  // useEffect
  useEffect(() => {
    console.log("home")
  })

  // useState
  const [count, setCount] = useState({
    num: 0
  })

  // useReducer
  const initState = {
    num: 0,
    status: false
  }

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

  const changecolor = (): void => {
    if (window.less) {
      window.less
        .modifyVars({
          "@primary-color": "red",
          "@menu-dark-item-active-bg": "red",
          "@link-color": "#aaa",
          "@text-color": "#aaa",
          "@btn-primary-bg": "#aaa"
        })
        .then(() => {
          alert("主题切换成功")
        })
        .catch(error => {
          alert(`主题切换失败`)
          console.log(error)
        })
    }
  }

  return (
    <div>
      home
      <img
        src={imgs}
        width="50"
        height="50"
        onClick={(): void =>
          setCount({
            num: count.num + 1
          })
        }
      />
      {count.num}
      <br />
      <span>{state.num} </span>
      <span>{`${state.status}`}</span>
      <br />
      my-web-report
      <Button onClick={testReducer}>testReducer</Button>
      <div onClick={changecolor}>changecolor</div>
    </div>
  )
}

export default Home
