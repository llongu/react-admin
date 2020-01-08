import { Performance } from "web-report"

const PerformanceData = {
  FP: "",
  FCP: ""
}
const observer = new PerformanceObserver(list => {
  for (const entry of list.getEntries()) {
    // 首次绘制 (FP) 和 首次内容绘制 (FCP)   从文档的 <head> 中移除任何阻塞渲染的脚本或样式表，可以减少首次绘制和首次内容绘制前的等待时间
    if (entry.name === "first-paint") {
      PerformanceData["FP"] = `${(entry.startTime / 1000).toFixed(2)} s`
      // console.log(`首次绘制 (FP)时间, ${entry.startTime / 1000} s`)
    }
    if (entry.name === "first-contentful-paint") {
      PerformanceData["FCP"] = `${(entry.startTime / 1000).toFixed(2)} s`
      // console.log(`首次内容绘制 (FCP)时间, ${entry.startTime / 1000}  s`)
    }
    // console.log(entry.name)
    // console.log(entry.startTime)
    // console.log(entry.duration)
    // console.log(entry.entryType)
    // console.log(entry.initiatorType)
    // console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`)
  }
})
observer.observe({
  entryTypes: ["paint", "longtask"]
})

const PerformanceSet = (oldData, newData): object => {
  const data = {
    performanceList: {},
    resourceList: [],
    errorList: {
      js: [],
      resource: [],
      ajax: []
    }
  }
  const { url = "", time = "", type = false, performance = false, resourceList = false, errorList } = newData
  if (performance && type === 1) {
    data.performanceList = { ...oldData.performanceList, ...performance }
  }
  if (resourceList && resourceList.length) {
    data.resourceList = [...oldData.resourceList, ...resourceList]
    data.resourceList.forEach(item => {
      item.url = url
      item.time = new Date(time)
    })
  }
  if (errorList && errorList.length) {
    errorList.forEach(item => {
      if (item.n === "js") {
        data.errorList.js = [...oldData.errorList.js, ...errorList]
      } else if (item.n === "resource") {
        data.errorList.resource = [...oldData.errorList.resource, ...errorList]
      } else if (item.n === "ajax") {
        data.errorList.ajax = [...oldData.errorList.ajax, ...errorList]
      }
    })
  }

  return data
}

export { PerformanceData, Performance, PerformanceSet }
