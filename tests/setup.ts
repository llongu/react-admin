import Adapter from "enzyme-adapter-react-16"
import { configure } from "enzyme"
configure({
  adapter: new Adapter(),
  disableLifecycleMethods: false,
})

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})
//test mock servece
process.env.baseURL = "http://localhost:3000/"
