const PerformanceData = {}
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

import "@static/js/web-report-default"
Performance(
  {
    domain: "./api/webreport" // Your API address
  },
  getPerformance
)

// 去掉callback localShow 则上报 Your API address
function getPerformance(data) {
  console.warn(data)

  // performance_set(data);

  // resource_set(data);

  // error_ste(data);
}
export default PerformanceData
