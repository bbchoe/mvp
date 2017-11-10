import path from 'path'
import express from 'express'

const app = express()

const publicPath = path.join(__dirname, '../')
const indexPath = path.join(__dirname, '../index.html')

app.use(express.static(publicPath))

app.get('/', (req, res) => {
  res.sendFile(indexPath)
})

export default app
