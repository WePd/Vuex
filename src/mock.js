const Mock = require("mockjs")

Mock.mock("/api/login", "post", {
  message: "hhhh",
  data: Mock.mock({
    "string|1-10": "★"
  })
})
