import React from "react"
import Calendar, { monthCellRender } from "@/pages/Calendar"
import { act } from "react-dom/test-utils"

describe("Unit", () => {
  it("test Calendar unit ", () => {
    console.log(
      monthCellRender({
        month: () => 8
      })
    )
    expect(
      typeof monthCellRender({
        month: () => 8
      })
    ).toBe("object")
    expect(
      typeof monthCellRender({
        month: () => 1
      })
    ).toBe("object")
    expect(
      monthCellRender({
        month: () => null
      })
    ).toBe(null)
  })
})
