import React from "react"
import { monthCellRender } from "@/pages/Calendar"

import { TableRowKeyFn, ColumnsRenderResourceUrl, ColumnsRenderLine, ColumnsRenderCol, ColumnsRenderTarget, ColumnsRenderStatus } from "@/pages/Home"
import { act } from "react-dom/test-utils"
describe("Unit", () => {
  it("test Calendar unit ", () => {
    expect(
      typeof monthCellRender({
        month: () => 1,
      })
    ).toBe("object")
    expect(
      typeof monthCellRender({
        month: () => 8,
      })
    ).toBe("object")
    expect(
      monthCellRender({
        month: () => null,
      })
    ).toBe(null)
  })

  it("test Home unit ", () => {
    expect(TableRowKeyFn({}, 1)).toBe("1")
    expect(ColumnsRenderResourceUrl("text", { data: { resourceUrl: "resourceUrl" } })).toBe("resourceUrl")
    expect(ColumnsRenderLine("text", { data: { line: "line" } })).toBe("line")
    expect(ColumnsRenderCol("text", { data: { col: "col" } })).toBe("col")
    expect(ColumnsRenderTarget("text", { data: { target: "target" } })).toBe("target")
    expect(ColumnsRenderStatus("text", { data: { status: "status" } })).toBe("status")
  })
})
