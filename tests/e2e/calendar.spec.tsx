import React from "react"
import { mount } from "enzyme"
import Calendar from "@/pages/Calendar"
import { act } from "react-dom/test-utils"
import { calendarAddDay, calendarQuery } from "@services/calendar"

describe("<Calendar/>", () => {
  const wrapper = mount(<Calendar />)
  it("test Calendar dom ", async done => {
    expect(wrapper.find("Calendar")).toHaveLength(1)
    await act(() => calendarQuery())
    wrapper
      .find("table")
      .find("tr")
      .find("td")
      .first()
      .simulate("click")
    await act(() => calendarAddDay())
    done()
  })
})
