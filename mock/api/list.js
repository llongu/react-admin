const Mock = require("mockjs")

module.exports = {
  "/api/list/query": [['GET', 'POST'], {
    statusCode: 200,
    success: true,
    message: "成功",
    "list|10": [
      {
        "key|+1": 1,
        name: function () {
          return { title: "Mr", first: "آرمین", last: "موسوی" + this.key }
        },
        age: Mock.Random.float(1, 99, 0, 0),
        email: "@email()",
        gender: function () {
          return `male` + this.key
        },
        nat: "IR"
      }
    ]
  }],
  "/api/list2/query": ['POST', {
    statusCode: 200,
    success: true,
    message: "成功",
    "list|15": [
      {
        "key|+1": 1,
        name: function () {
          return { title: "Mr", first: "آرمین", last: "موسوی" + this.key }
        },
        age: Mock.Random.float(1, 99, 0, 0),
        email: "@email()",
        gender: function () {
          return `male` + this.key
        },
        nat: "IR"
      }
    ]
  }]
}
