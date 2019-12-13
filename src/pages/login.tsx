import React, { FormEvent, ReactElement } from "react"
import { Form, Icon, Input, Button } from "antd"
import { FormComponentProps } from "antd/es/form"

const loginForm = (props: FormComponentProps): ReactElement<HTMLElement> => {
  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault()
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values)
      }
    })
  }

  const { getFieldDecorator } = props.form
  return (
    <Form onSubmit={handleSubmit} style={{ width: " 50%", margin: " 0 auto", marginTop: "300px", minWidth: "300px" }}>
      <Form.Item>
        {getFieldDecorator("username", {
          rules: [{ required: true, message: "Please input your username!" }]
        })(<Input prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />} placeholder="Username" />)}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator("password", {
          rules: [{ required: true, message: "Please input your Password!" }]
        })(<Input prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />} type="password" placeholder="Password" />)}
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
      </Form.Item>
    </Form>
  )
}

export default Form.create({ name: "login" })(loginForm)
