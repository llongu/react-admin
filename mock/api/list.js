const Mock = require("mockjs")
module.exports = {
  "/api/list/query": ['POST', {
    statusCode: 200,
    success: true,
    message: "成功",
    "list|10": [
      {
        "key|+1": 1,
        name: function () {
          return { title: "Mr", first: "آرمین", last: "موسوی" + Mock.Random.float(1, 99, 0, 0) }
        },
        age: Mock.Random.float(1, 99, 0, 0),
        email: "@email()",
        gender: function () {
          return `male` + Mock.Random.float(1, 99, 0, 0)
        },
        nat: "IR"
      }
    ]
  }],
  "/api/list2/query": [['GET', 'POST'], {
    statusCode: 200,
    success: true,
    message: "成功",
    "list|15": [
      {
        "key|+1": 1,
        name: function () {
          return { title: "Mr", first: "آرمین", last: "موسوی" + Mock.Random.float(1, 99, 0, 0) }
        },
        age: Mock.Random.float(1, 99, 0, 0),
        email: "@email()",
        gender: function () {
          return `male` + Mock.Random.float(1, 99, 0, 0)
        },
        nat: "IR"
      }
    ]
  }]
}
