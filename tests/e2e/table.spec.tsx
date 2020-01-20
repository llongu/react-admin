import React from "react"
import { mount } from "enzyme"
import Table from "@/pages/Table"
import { act } from "react-dom/test-utils"
import { tableQuery } from "@services/table"

describe("<Table/>", () => {
  const wrapper = mount(<Table />)

  it("test Table", async done => {
    await act(() => tableQuery())
    expect(wrapper.find("table")).toHaveLength(1)
    done()
  })
})
