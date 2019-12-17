import axios from "axios"
import { notification } from "antd"
import ErrorCode from "./httpCode"
axios.defaults.timeout = 30000
axios.defaults.baseURL = "/"

axios.interceptors.request.use(
  config => {
    config.headers["Content-Type"] = "application/json"
    // config.headers["Authorization"] = `Bearer `
    return config
  },
  (error): Promise<object> => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  response => {
    const { data } = response
    if (data.statusCode === 200) {
      return data
    } else {
      return ErrorCode(data)
    }
  },
  (error): Promise<object> => {
    notification["error"]({
      message: "response error",
      description: error.message
    })
    return Promise.reject(error)
  }
)

export default axios
