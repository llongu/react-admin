import React, { ReactElement } from "react"
import { Form, Button, Input, DatePicker, Select, Radio, Checkbox, Row, Col, Cascader, InputNumber } from "antd"
const { RangePicker } = DatePicker
const { Option } = Select

interface MyFormVal {
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
// layout
const Layout = {
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
export const ConfirmPwd = ({ getFieldValue }): { validator: (rule: object, value: string) => Promise<void> } => ({
  validator(rule: object, value: string): Promise<void> {
    if (!value || getFieldValue("password") === value) {
      return Promise.resolve()
    }
    return Promise.reject("The two passwords that you entered do not match!")
  }
})

const MyForm = (): ReactElement => {
  const onFinish = (values: MyFormVal): void => {
    console.log(values)
  }

  return (
    <>
      <Form {...Layout} initialValues={{}} onFinish={onFinish}>
        <Form.Item label="Username" name="username" rules={[{ required: true, message: "Please input your username!" }]}>
          <Input placeholder="Username" />
        </Form.Item>
        <Form.Item label="Password" name="password" rules={[{ required: true, message: "Please input your password!" }]}>
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item label="confirm Password" name="confirm" rules={[{ required: true, message: "Please Confirm your password!" }, ConfirmPwd]}>
          <Input.Password placeholder="confirm Password" />
        </Form.Item>

        <Form.Item label="date" name="date" rules={[{ required: false, message: "Please choose your date!" }]}>
          <RangePicker />
        </Form.Item>

        <Form.Item label="Select" name="selects" hasFeedback rules={[{ required: true, message: "Please select your Option!" }]}>
          <Select placeholder="Please select a Option" id="selects_opt">
            <Option value="1" id="opt1">
              Option 1
            </Option>
            <Option value="2">Option 2</Option>
            <Option value="3">Option 3</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Select[multiple]" name="selectMultiple" rules={[{ required: false, message: "Please select your Option!", type: "array" }]}>
          <Select mode="multiple" placeholder="Please select favourite colors">
            <Option value="0">Red</Option>
            <Option value="1">Green</Option>
            <Option value="2">Blue</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Radio.Group" name="radioGroup">
          <Radio.Group>
            <Radio value="a">item 1</Radio>
            <Radio value="b">item 2</Radio>
            <Radio value="c">item 3</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Checkbox.Group" name="checkboxGroup">
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
        </Form.Item>

        <Form.Item label="Habitual Residence" name="residence" rules={[{ type: "array", required: false, message: "Please select your habitual residence!" }]}>
          <Cascader options={residences} />
        </Form.Item>

        <Form.Item label="InputNumber">
          <Form.Item name="numbers" noStyle>
            <InputNumber min={1} max={10} />
          </Form.Item>
        </Form.Item>

        <Form.Item label="Captcha" extra="We must make sure that your are a human.">
          <Row gutter={8}>
            <Col span={12}>
              <Form.Item name="captcha" noStyle rules={[{ required: false, message: "Please input the captcha you got!" }]}>
                <Input />
              </Form.Item>
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

export default MyForm
