import "@static/js/web-report-axios"
const PerformanceData = {
  FP: "",
  FCP: ""
}
const observer = new PerformanceObserver(list => {
  for (const entry of list.getEntries()) {
    // 首次绘制 (FP) 和 首次内容绘制 (FCP)   从文档的 <head> 中移除任何阻塞渲染的脚本或样式表，可以减少首次绘制和首次内容绘制前的等待时间
    if (entry.name === "first-paint") {
      PerformanceData["FP"] = `${(entry.startTime / 1000).toFixed(2)} s`
      console.log(`首次绘制 (FP)时间, ${entry.startTime / 1000} s`)
    }
    if (entry.name === "first-contentful-paint") {
      PerformanceData["FCP"] = `${(entry.startTime / 1000).toFixed(2)} s`
      console.log(`首次内容绘制 (FCP)时间, ${entry.startTime / 1000}  s`)
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

export default PerformanceData
