import Adapter from "enzyme-adapter-react-16"
import { configure } from "enzyme"
configure({
  adapter: new Adapter(),
  disableLifecycleMethods: false
})
//test mock servece
process.env.baseURL = "http://localhost:3000/"
