import React from "react"
import { mount, shallow } from "enzyme"
import Login from "../../src/pages/login"
import { act } from "react-dom/test-utils"

describe("<Login/>", () => {
  const wrapper = mount(<Login />)
  it("test Login dom ", () => {
    expect(wrapper.find("Form")).toHaveLength(1)
    expect(wrapper.find("input")).toHaveLength(2)
    expect(wrapper.find("input#username")).toHaveLength(1)
    expect(wrapper.find("input#password")).toHaveLength(1)
  })

  it("test Login form ", async done => {
    function sleep(time) {
      return new Promise(reslove => {
        setTimeout(() => {
          reslove(true)
        }, time)
      })
    }
    wrapper.find("input#username").simulate("change", {
      target: { value: "admin" }
    })
    wrapper.find("input#password").simulate("change", {
      target: { value: "123456" }
    })
    wrapper.find("Form").simulate("submit")

    wrapper.find("input#username").simulate("change", {
      target: { value: "error" }
    })
    wrapper.find("input#password").simulate("change", {
      target: { value: "error" }
    })
    wrapper.find("Form").simulate("submit")
    await act(() => sleep(500))
    done()
  })
})
