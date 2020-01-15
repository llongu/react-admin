import React from "react"
import { shallow } from "enzyme"
import NotFound from "../../src/pages/404"

describe("<Login/>", () => {
  it("test Login  ", () => {
    const wrapper = shallow(<NotFound />)
    expect(wrapper.find("Result")).toHaveLength(1)
  })
})
