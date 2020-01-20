import React from "react"
import { mount } from "enzyme"
import MyForm from "@/pages/Form"
import { act } from "react-dom/test-utils"

describe("<MyForm/>", () => {
  const wrapper = mount(<MyForm />)

  it("test MyForm  ", () => {
    expect(wrapper.find("Form")).toHaveLength(1)

    wrapper.find("input#username").simulate("change", {
      target: { value: "admin" }
    })
    wrapper.find("input#password").simulate("change", {
      target: { value: "123456" }
    })
    wrapper.find("input#confirm").simulate("change", {
      target: { value: "123" }
    })
    wrapper.find("Form").simulate("submit")

    wrapper.find("input#confirm").simulate("change", {
      target: { value: "123456" }
    })
    wrapper.find("input#phone").simulate("change", {
      target: { value: "123" }
    })
    wrapper.find("input#numbers").simulate("change", {
      target: { value: "11" }
    })
    wrapper.find("input#captcha").simulate("change", {
      target: { value: "123" }
    })
    wrapper.find("Form").simulate("submit")
  })
})
