
const Mock = require("mockjs")

module.exports = {
  "/api/table/query": ["POST", {
    status: 200,
    success: true,
    message: "成功",
    "list|11-50": [
      {
        "key|+1": 1,
        name: `Edward King`,
        age: Mock.Random.float(1, 99, 0, 0),
        address: function () {
          return `London, Park Lane no.` + this.key
        }
      }
    ]
  }]
}
