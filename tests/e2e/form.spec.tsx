import React from "react"
import { mount } from "enzyme"
import MyForm from "@/pages/Form"
import { act } from "react-dom/test-utils"

describe("<MyForm/>", () => {
  const wrapper = mount(<MyForm />)

  it("test MyForm  ", () => {
    expect(wrapper.find("form")).toHaveLength(1)

    wrapper.find("input#username").simulate("change", {
      target: { value: "admin" },
    })
    wrapper.find("input#password").simulate("change", {
      target: { value: "123456" },
    })
    wrapper.find("input#confirm").simulate("change", {
      target: { value: "err" },
    })
    wrapper.find("form").simulate("submit")

    wrapper.find("input#confirm").simulate("change", {
      target: { value: "123456" },
    })
    wrapper.find("input#date").simulate("click", {
      target: { value: [1588833990862, 1588833990862] },
    })
    wrapper.find("input#selects").simulate("change")
    wrapper.find("div#opt1").simulate("click")

    wrapper.find("form").simulate("submit")
  })
})
