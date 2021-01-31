const express = require('express')
const cors = require('cors')
const app = express()
const port = 3001
app.use(cors())

app.get('/',(req, res) => {
  //res.send('Hello World!')
  //res.send({ user: 'tobi' })
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify([{ user: 'tobi' }]))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})