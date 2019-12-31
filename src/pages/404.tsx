import React, { ReactElement } from "react"
import { Result, Button } from "antd"

const home = (): ReactElement<HTMLElement> => (
  <Result status="404" title="404" subTitle="Sorry, the page you visited does not exist." extra={<Button type="primary">Back Home</Button>} />
)

export default home
