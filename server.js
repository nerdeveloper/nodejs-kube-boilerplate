const express = require('express')
const app = express()
const port = 3000

app.get('/health', (req, res) => {
  res.send('Healthy!!!').status(200);
})

app.get('/', (req, res) => {
  res.send('Welcome!!!')
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
