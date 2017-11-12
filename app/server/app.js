import path from 'path'
import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
const db = require('../../app/database/database.js');

const app = express()

const publicPath = path.join(__dirname, '../')
const indexPath = path.join(__dirname, '../index.html')

let morganOptions = {
  immediate: true
}
app.use(morgan('dev', morganOptions))
app.use(bodyParser.json())

app.use(express.static(publicPath))

app.get('/', (req, res) => {
  res.sendFile(indexPath)
})

app.post('/invoice', (req, res) => {
  db.save(req.body, (err) => {
    if (err) {
      res.send(err)
    } else {
      res.send()
    }
  });
})

export default app
