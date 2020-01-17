import React from "react"
import { act } from "react-dom/test-utils"
import { calendarQuery, calendarAddDay } from "@services/calendar"

describe("Service", () => {
  it("test Calendar service ", async done => {
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
})
