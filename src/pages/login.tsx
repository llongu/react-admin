import React, { useState, useContext, ReactElement } from "react"
import { Form, Input, Button, message } from "antd"
import AppContext from "@/models/context"
import { UserOutlined, KeyOutlined } from "@ant-design/icons"

export const onFinishFn = (): {
  onFinish: (values: { username: string; password: string }) => void
  loginStatus: boolean
} => {
  const [loginStatus, setLoginStatus] = useState(false)
  const { changeLoginStatus } = useContext(AppContext)

  const onFinish = (values: { username: string; password: string }): void => {
    setLoginStatus(true)
    if (values.username === "admin" && values.password === "123456") {
      localStorage.setItem("login", "true")
      changeLoginStatus(true)
      message.success("登录成功")
    } else {
      message.error("用户名或密码错误")
      setTimeout(() => {
        setLoginStatus(false)
      }, 500)
    }
  }

  return {
    onFinish,
    loginStatus
  }
}

const Login = (): ReactElement => {
  const onFinishFailed = (errorInfo: object): void => {
    console.log("Failed:", errorInfo)
  }

  const { onFinish, loginStatus } = onFinishFn()

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 }
  }
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 }
  }

  return (
    <Form
      {...layout}
      name="login"
      initialValues={{ Username: "admin", Password: 123456 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      style={{ width: 500, margin: "0 auto", marginTop: "15%" }}
    >
      <Form.Item label="Username" name="username" rules={[{ required: true, message: "Please input your username!" }]}>
        <Input placeholder="Username:admin" prefix={<UserOutlined />} />
      </Form.Item>

      <Form.Item label="Password" name="password" rules={[{ required: true, message: "Please input your password!" }]}>
        <Input.Password placeholder="Password:123456" prefix={<KeyOutlined />} />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" loading={loginStatus}>
          Log in
        </Button>
      </Form.Item>
    </Form>
  )
}
export default Login
