import React from "react"
import { mount } from "enzyme"
import Home from "@/pages/Home"
import { act } from "react-dom/test-utils"

describe("<Home/>", () => {
  const wrapper = mount(<Home />)

  it("test Home", () => {
    expect(wrapper.find("table")).toHaveLength(4)

    wrapper.find("button#error2").simulate("click")
    // wrapper.find("button#error1").simulate("click")
  })
})
