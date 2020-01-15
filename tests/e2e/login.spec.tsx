import React from "react"
import { mount, shallow } from "enzyme"
import Login from "../../src/pages/login"

describe("<Login/>", () => {
  it("test Login  ", () => {
    const wrapper = mount(<Login />)
    expect(wrapper.find("Form")).toHaveLength(1)
    expect(wrapper.find("input")).toHaveLength(2)
    expect(wrapper.find("input[0]").text()).toEqual("")
    wrapper.find("Form").simulate("submit")
  })
})
