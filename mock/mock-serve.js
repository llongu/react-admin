const Hapi = require("@hapi/hapi")
const Router = require("./index")

const server = Hapi.server({
  port: 3000,
  host: "localhost",
  routes: {
    cors: true
  }
})
Router(server)

const init = async () => {
  await server.register(require("@hapi/inert"))
  // await server.register({
  //   plugin: require("hapi-pino"),
  //   options: {
  //     prettyPrint: true,
  //     logEvents: ["response", "onPostStart"]
  //   }
  // })

  await server.start()
  console.log(`Server running at: ${server.info.uri}`)
}

process.on("unhandledRejection", err => {
  console.log(err)
  process.exit(1)
})

init()
