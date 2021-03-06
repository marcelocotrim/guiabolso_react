const PORT = 3000
const express = require('express')
const path = require('path')
const app = express()
app.use(express.static('docs'))
app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, 'docs', 'index.html'))
})
app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT)
})
