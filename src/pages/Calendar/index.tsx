import React, { useState, useEffect, ReactElement } from "react"
import { Calendar, Badge } from "antd"
import { calendarQuery, calendarAddDay } from "@services/calendar"

// click year render month
function getMonthData(value): string {
  if (value.month() === 8) {
    return "9月"
  } else if (value.month() === 1) {
    return "2月"
  }
}

function monthCellRender(value): ReactElement<HTMLElement> | null {
  const num = getMonthData(value)
  return num ? (
    <div className="notes-month">
      <section>{num}</section>
      <span>Backlog number</span>
    </div>
  ) : null
}

export default (): ReactElement<HTMLElement> => {
  const [dayData, setDay] = useState({})

  useEffect(() => {
    let isUnInstall = false
    ;(async (): Promise<void> => {
      try {
        const result: { list?: object } = await calendarQuery()
        if (isUnInstall) return
        setDay(result.list)
      } catch (error) {
        console.error(error)
      }
    })()
    return (): void => {
      isUnInstall = true
    }
  }, [])

  // clik month render day
  function getListData(value): [] {
    let listData
    switch (value.date()) {
      default:
        listData = dayData[value.date()]
        break
    }
    return listData || []
  }

  function dateCellRender(value: object): ReactElement<HTMLElement> {
    const listData = getListData(value)
    return (
      <ul className="events">
        {listData.map((item: { content: string; type: "success" | "processing" | "default" | "error" | "warning" }) => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    )
  }

  const onSelect = async (value): Promise<void> => {
    console.log("dete changed")
    const newDayData = dayData[value.date()] || []
    try {
      const result: { list?: object } = await calendarAddDay()
      newDayData.push(result.list)
      setDay({
        ...dayData,
        [value.date()]: newDayData
      })
    } catch (error) {
      console.error(error)
    }
  }

  return <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} onSelect={onSelect} />
}
