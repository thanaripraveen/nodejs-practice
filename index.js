const express = require('express')
const employee = require('./employee/employeeController.js')
const app = express();
const bodyParser = require('body-parser')
const port = 3000;
const routes = require('./routes.js')


app.use(bodyParser.json({ type: 'application/json' }))

app.use('/api',routes)

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})

