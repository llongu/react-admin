import React, { FormEvent, ReactElement } from "react"
import { Form, Icon, Input, Button, message } from "antd"
import { FormComponentProps } from "antd/es/form"
import { History } from "history"

interface LoginProps extends FormComponentProps {
  history: History
}

const loginForm = (props: LoginProps): ReactElement<HTMLElement> => {
  let loginStatus = false
  const handleSubmit = (e: FormEvent): void => {
    loginStatus = true
    e.preventDefault()
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values)
        if (values.username === "admin" && values.password === "123456") {
          localStorage.setItem("login", "true")
          message.success("登录成功")
          props.history.push("/")
        } else {
          message.error("用户名或密码错误")
        }
      }
    })
  }

  const { getFieldDecorator } = props.form

  return (
    <Form onSubmit={handleSubmit} style={{ width: " 50%", margin: " 0 auto", marginTop: "300px", minWidth: "300px" }}>
      <Form.Item>
        {getFieldDecorator("username", {
          rules: [{ required: true, message: "Please input your username!" }]
        })(<Input prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />} placeholder="Username:admin" />)}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator("password", {
          rules: [{ required: true, message: "Please input your Password!" }]
        })(<Input prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />} type="password" placeholder="Password:123456" />)}
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button" loading={loginStatus}>
          Log in
        </Button>
      </Form.Item>
    </Form>
  )
}

export default Form.create({ name: "login" })(loginForm)
