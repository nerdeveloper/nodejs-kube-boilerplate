const express = require('express')
const app = express()
const port = 3000

app.get('/healthcheck', (req, res) => {
  res.send('Healthy!!!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})