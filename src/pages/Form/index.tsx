import React, { useState } from "react"
import { Form, Button, Icon, Input, DatePicker, TimePicker, Select, Radio, Checkbox, Row, Col, Cascader, InputNumber } from "antd"
const { RangePicker } = DatePicker
const { Option } = Select

import { FormComponentProps } from "antd/es/form"
import { number } from "prop-types"
interface UserFormProps extends FormComponentProps {
  username: string
  password: string
  confirm: string
  date: Array<{}>
  selects: string
  selectMultiple: Array<string>
  captcha: string
  phone: string
  residence: string[]
  numbers: string
  radioGroup: Array<string>
  checkboxGroup: Array<string>
}

//layout
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 }
  }
}
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 16,
      offset: 5
    }
  }
}

//data
const residences = [
  {
    value: "zhejiang",
    label: "Zhejiang",
    children: [
      {
        value: "hangzhou",
        label: "Hangzhou",
        children: [
          {
            value: "xihu",
            label: "West Lake"
          }
        ]
      }
    ]
  },
  {
    value: "jiangsu",
    label: "Jiangsu",
    children: [
      {
        value: "nanjing",
        label: "Nanjing",
        children: [
          {
            value: "zhonghuamen",
            label: "Zhong Hua Men"
          }
        ]
      }
    ]
  }
]

const MyForm = (props: FormComponentProps) => {
  const { getFieldDecorator } = props.form

  //validator
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values)
      }
    })
  }

  const validateToNextPassword = (rule, value, callback) => {
    const { form } = props
    if (value) {
      form.validateFields(["confirm"], { force: true })
    }
    callback()
  }

  const compareToFirstPassword = (rule, value, callback) => {
    const { form } = props
    if (value && value !== form.getFieldValue("password")) {
      callback("Two passwords that you enter is inconsistent!")
    } else {
      callback()
    }
  }

  //data
  const prefixSelector = getFieldDecorator("prefix", {
    initialValue: "86"
  })(
    <Select style={{ width: 70 }}>
      <Option value="86">+86</Option>
      <Option value="87">+87</Option>
    </Select>
  )

  //number change  validateStatus
  function validatePrimeNumber(
    number: number
  ): {
    validateStatus: "" | "success" | "error" | "warning" | "validating"
    errorMsg: string
  } {
    if (number === 11) {
      return {
        validateStatus: "success",
        errorMsg: null
      }
    }
    return {
      validateStatus: "error",
      errorMsg: "The prime between 8 and 12 is 11!"
    }
  }

  const [formNumbers, setState] = useState({
    ...validatePrimeNumber(12),
    value: 12
  })

  const handleNumberChange = (v: number) => {
    setState(oldState => ({
      ...oldState,
      ...validatePrimeNumber(v),
      value: v
    }))
  }

  return (
    <>
      <Form {...formItemLayout} onSubmit={onSubmit}>
        <Form.Item label="username" hasFeedback>
          {getFieldDecorator("username", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(<Input prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />} placeholder="Username" />)}
        </Form.Item>

        <Form.Item label="password" hasFeedback>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }, { validator: validateToNextPassword }]
          })(<Input.Password prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />} placeholder="Password"></Input.Password>)}
        </Form.Item>
        <Form.Item label="Confirm Password" hasFeedback>
          {getFieldDecorator("confirm", {
            rules: [{ required: true, message: "Please confirm your password!" }, { validator: compareToFirstPassword }]
          })(<Input.Password prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />} placeholder="Password"></Input.Password>)}
        </Form.Item>

        <Form.Item label="date">
          {getFieldDecorator("date", {
            rules: [{ required: false, message: "Please choose your date!" }]
          })(<RangePicker renderExtraFooter={() => "extra footer"} style={{ width: "100%" }} />)}
        </Form.Item>

        <Form.Item label="Select" hasFeedback>
          {getFieldDecorator("selects", {
            initialValue: "1",
            rules: [{ required: false, message: "Please choose your Option!" }]
          })(
            <Select>
              <Option value="1">Option 1</Option>
              <Option value="2">Option 2</Option>
              <Option value="3">Option 3</Option>
            </Select>
          )}
        </Form.Item>

        <Form.Item label="Select[multiple]">
          {getFieldDecorator("selectMultiple", {
            rules: [{ required: true, message: "Please select your favourite colors!", type: "array" }]
          })(
            <Select mode="multiple" placeholder="Please select favourite colors">
              <Option value="red">Red</Option>
              <Option value="green">Green</Option>
              <Option value="blue">Blue</Option>
            </Select>
          )}
        </Form.Item>

        <Form.Item label="Radio.Group">
          {getFieldDecorator("radioGroup")(
            <Radio.Group>
              <Radio value="a">item 1</Radio>
              <Radio value="b">item 2</Radio>
              <Radio value="c">item 3</Radio>
            </Radio.Group>
          )}
        </Form.Item>

        <Form.Item label="Checkbox.Group">
          {getFieldDecorator("checkboxGroup", {
            initialValue: ["A", "B"]
          })(
            <Checkbox.Group style={{ width: "100%" }}>
              <Row>
                <Col span={8}>
                  <Checkbox value="A">A</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox disabled value="B">
                    B
                  </Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="C">C</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="D">D</Checkbox>
                </Col>
              </Row>
            </Checkbox.Group>
          )}
        </Form.Item>

        <Form.Item label="Habitual Residence">
          {getFieldDecorator("residence", {
            initialValue: ["zhejiang", "hangzhou", "xihu"],
            rules: [{ type: "array", required: true, message: "Please select your habitual residence!" }]
          })(<Cascader options={residences} />)}
        </Form.Item>

        <Form.Item label="Phone Number">
          {getFieldDecorator("phone", {
            rules: [{ required: true, message: "Please input your phone number!" }]
          })(<Input addonBefore={prefixSelector} />)}
        </Form.Item>

        <Form.Item label="Prime between 8 & 12" validateStatus={formNumbers.validateStatus} help={formNumbers.errorMsg}>
          {getFieldDecorator("numbers", {
            initialValue: formNumbers.value,
            rules: [{ required: false, message: "Please input your  number!" }]
          })(<InputNumber min={8} max={12} onChange={handleNumberChange} />)}
        </Form.Item>

        <Form.Item label="Captcha" extra="We must make sure that your are a human.">
          <Row gutter={8}>
            <Col span={12}>
              {getFieldDecorator("captcha", {
                rules: [{ required: true, message: "Please input the captcha you got!" }]
              })(<Input />)}
            </Col>
            <Col span={12}>
              <Button>Get captcha</Button>
            </Col>
          </Row>
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" className="login-form-button">
            submit
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default Form.create<UserFormProps>({})(MyForm)
