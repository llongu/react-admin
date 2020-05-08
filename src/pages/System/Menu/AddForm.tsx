import React, { useState, ReactElement } from "react"
import { Form, Input, Modal } from "antd"
import { setMenus, getMenus } from "./utils"
import { AddFormProps, AddFormSubmit } from "./data"

export const AddFormFn = (): AddFormProps => {
  const [visible, setVisible] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)
  const show = (): void => setVisible(true)
  const hide = (): void => setVisible(false)
  const handleOk = (): Function => {
    setConfirmLoading(true)
    return (): void => {
      setVisible(false)
      setConfirmLoading(false)
    }
  }
  return {
    show,
    hide,
    handleOk,
    visible,
    confirmLoading
  }
}

export default (props: AddFormProps): ReactElement<HTMLElement> => {
  const [form] = Form.useForm()

  const onFinish = (val: AddFormSubmit): void => {
    const finish = props.handleOk()
    if (props.parentInfo.code) {
      setMenus({ ...val, parentInfo: props.parentInfo })
    } else {
      setMenus({ ...val })
    }

    setTimeout(() => {
      props.query(getMenus())
      finish()
    }, 1000)
  }

  return (
    <Modal title="Title" visible={props.visible} onOk={form.submit} confirmLoading={props.confirmLoading} onCancel={props.hide}>
      <Form initialValues={{}} form={form} onFinish={onFinish}>
        <Form.Item label="name" name="name" rules={[{ required: true, message: "Please input your name!" }]}>
          <Input placeholder="name" />
        </Form.Item>
        <Form.Item label="code" name="code" rules={[{ required: true, message: "Please input your code!" }]}>
          <Input placeholder="code" />
        </Form.Item>
      </Form>
    </Modal>
  )
}
