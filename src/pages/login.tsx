import React from "react";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import { FormComponentProps } from "antd/es/form";

const scoped = (
  <div>
    <style jsx>{`
      .login-form {
        width: 50%;
        margin: 0 auto;
        margin-top: 300px;
        min-width: 300px;
      }
      .test {
        color: red;
      }
    `}</style>
  </div>
);

const loginForm = (props: FormComponentProps) => {
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  const { getFieldDecorator } = props.form;
  return (
    <>
      <Form
        onSubmit={handleSubmit}
        className={`login-form ${scoped.props.className}`}
      >
        <Form.Item>
          {getFieldDecorator("username", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
        </Form.Item>
      </Form>

      {scoped.props.children}
    </>
  );
};

export default Form.create({ name: "login" })(loginForm);