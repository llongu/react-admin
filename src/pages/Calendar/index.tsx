import React, { useState, useEffect } from "react"
import { Calendar, Badge } from "antd"

// click year render month
function getMonthData(value) {
  console.log(value)
  if (value.month() === 8) {
    return 1394
  } else if (value.month() === 1) {
    return 1
  }
}

function monthCellRender(value) {
  const num = getMonthData(value)
  return num ? (
    <div className="notes-month">
      <section>{num}</section>
      <span>Backlog number</span>
    </div>
  ) : null
}

export default () => {
  const [dayData, setDay] = useState({
    "1": [{ type: "success", content: "This is very long usual event。。...." }],
    "10": [
      { type: "warning", content: "This is warning event." },
      { type: "success", content: "This is usual event." }
    ],
    "20": [
      { type: "warning", content: "This is warning event" },
      { type: "error", content: "This is error event 1." },
      { type: "error", content: "This is error event 2." }
    ]
  })

  useEffect(() => {
    console.log("dayData change")
  }, [dayData])

  // clik month render day
  function getListData(value) {
    let listData
    switch (value.date()) {
      default:
        listData = dayData[value.date()]
        break
    }
    return listData || []
  }

  function dateCellRender(value) {
    const listData = getListData(value)
    return (
      <ul className="events">
        {listData.map(item => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    )
  }

  const onSelect = value => {
    const newDayData = dayData[value.date()] || []
    newDayData.push({ type: "success", content: "diy..." + Math.random() + 10000 })
    setDay({
      ...dayData,
      [value.date()]: newDayData
    })
  }

  return <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} onSelect={onSelect} />
}
