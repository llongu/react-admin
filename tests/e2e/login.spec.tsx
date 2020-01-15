import React from "react"
import { mount, shallow } from "enzyme"
import Login from "../../src/pages/404"

describe("<Login/>", () => {
  it("test Login  ", () => {
    const wrapper = shallow(<Login />)
    expect(wrapper.find("Result")).toHaveLength(1)
  })
})
