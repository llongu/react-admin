import React, { useContext, useEffect, useState, useReducer, useCallback } from "react"
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

const home = () => {
  const a = 0
  if (a == 0) {
  }
  // Provider set value, useContext or  <Consumer>{(value)=>{ get... }}</Consumer> getValue
  const ProviderValue = useContext(MyContext)
  console.log(ProviderValue)
  // useEffect
  useEffect(() => {
    console.log("home")
  })

  // useState
  let [count, setCount] = useState(0)

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

  const MyReducer = (state, action) => {
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

  const testReducer = () => {
    dispatch({
      type: 1
    })
  }

  const changecolor = () => {
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
      home <img src={imgs} alt="" width="50" height="50" onClick={() => setCount(count++)} />
      {count}
      <br />
      <span>{state.num} </span>
      <span>{`${state.status}`}</span>
      <br />
      <Button onClick={testReducer}>testReducer</Button>
      <div onClick={changecolor}>changecolor</div>
    </div>
  )
}

export default home
