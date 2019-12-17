const fs = require("fs")
const Mock = require("mockjs")
const FilePath = __dirname + '/api/'
const allFiles = fs.readdirSync(FilePath)

function registerServer (server, allFiles) {
  allFiles.forEach(item => {
    let result = require(FilePath + item)
    Object.keys(result).forEach(n => {
      server.route({
        method: result[n][0],
        path: n,
        handler: (request, h) => {
          return Mock.mock(result[n][1])
        }
      });
    })
  });

}
module.exports = server => {
  server.route({
    method: ['PUT', 'POST', 'GET'],
    path: '/',
    handler: (request, h) => {
      return 'Hapi serve'
    }
  });
  registerServer(server, allFiles)
}