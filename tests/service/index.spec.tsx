import React from "react"
import { act } from "react-dom/test-utils"
import { calendarQuery, calendarAddDay } from "@services/calendar"
import { list2Query, listQuery } from "@services/list"
import { tableQuery } from "@services/table"

describe("Service", () => {
  it("test Calendar service ", async (done) => {
    await act(() =>
      calendarQuery().then((res: { statusCode: number; list: object }) => {
        expect(res.statusCode).toBe(200)
        expect(typeof res.list).toBe("object")
      })
    )
    await act(() =>
      calendarAddDay().then((res: { statusCode: number }) => {
        expect(res.statusCode).toBe(200)
      })
    )
    done()
  })
  it("test List service ", async (done) => {
    await act(() =>
      listQuery({ pageIndex: 1, pageSize: 10 }).then((res: { statusCode: number }) => {
        expect(res.statusCode).toBe(200)
      })
    )
    await act(() =>
      list2Query({ pageIndex: 1, pageSize: 10 }).then((res: { statusCode: number }) => {
        expect(res.statusCode).toBe(200)
      })
    )

    done()
  })
  it("test Table service ", async (done) => {
    await act(() =>
      tableQuery().then((res: { statusCode: number }) => {
        expect(res.statusCode).toBe(200)
      })
    )
    done()
  })
})
