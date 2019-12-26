const Mock = require("mockjs")
module.exports = {
  "/api/calendar/query": ['POST', {
    statusCode: 200,
    success: true,
    message: "成功",
    "list": {
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
    }
  }],
  "/api/calendar/addDay": ['POST', {
    statusCode: 200,
    success: true,
    message: "成功",
    "list": { type: "success", content: "add success...  " }
  }]
}
