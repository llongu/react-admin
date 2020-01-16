import React from "react"
import { mount, shallow } from "enzyme"
import Calendar from "../../src/pages/Calendar"
import { act } from "react-dom/test-utils"

describe("<Calendar/>", () => {
  const wrapper = mount(<Calendar />)

  it("test Calendar dom ", () => {
    expect(wrapper.find("Calendar")).toHaveLength(1)
  })
})
