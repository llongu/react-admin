import React from "react"
import { mount, shallow } from "enzyme"
import Login from "@/pages/login"
import { act } from "react-dom/test-utils"

describe("<Login/>", () => {
  const wrapper = mount(<Login />)
  it("test Login dom ", () => {
    expect(wrapper.find("form")).toHaveLength(1)
    expect(wrapper.find("Input")).toHaveLength(2)
    expect(wrapper.find("Input#login_username")).toHaveLength(1)
    expect(wrapper.find("Input#login_password")).toHaveLength(1)
  })

  it("test Login form ", async (done) => {
    function sleep(time) {
      return new Promise((reslove) => {
        setTimeout(() => {
          reslove(true)
        }, time)
      })
    }
    wrapper.find("input#login_username").simulate("change", {
      target: { value: "admin" },
    })
    wrapper.find("input#login_password").simulate("change", {
      target: { value: "123456" },
    })
    wrapper.find("form").simulate("submit")
    await act(() => sleep(100))
    wrapper.find("input#login_username").simulate("change", {
      target: { value: "error" },
    })
    wrapper.find("input#login_password").simulate("change", {
      target: { value: "error" },
    })
    wrapper.find("form").simulate("submit")
    await act(() => sleep(600))
    wrapper.find("input#login_password").simulate("change", {
      target: { value: "" },
    })
    wrapper.find("form").simulate("submit")
    await act(() => sleep(100))

    done()
  })
})
