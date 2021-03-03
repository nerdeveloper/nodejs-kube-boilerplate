const express = require('express')
const app = express()
const port = 3000
const DB_USERNAME = process.env.MYSQL_USERNAME
const DB_PASSWORD = process.env.MYSQL_PASSWORD

app.get('/health', (req, res) => {
  res.send('Healthy!!!').status(200);
});

app.get('/db_credentials', (req, res) => {
  res.send({ db_username: DB_USERNAME, db_password: DB_PASSWORD })
});

app.get('/', (req, res) => {
  res.send('Welcome!!!')
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
