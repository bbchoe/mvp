const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/invoiceManager')

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  console.log('DATABASE CONNECTED')
})

const invoiceSchema = mongoose.Schema({
  id: Number,
  name: String,
  code: String,
  issued: Date,
  due: Date,
  amount: Number,
  expected: Date,
  actual: Date
})

const Invoice = mongoose.model('Invoice', invoiceSchema)

save = (invoice, resSendfn) => {
  // receives invoice object input. if invoice object with the id does not already exist, adds to the database.
  // otherwise, updates existing invoice object with that id
  let freshInvoice = new Invoice(invoice)
  freshInvoice.save()
  .then(() => {
    console.log('...record saved')
    resSendfn()
  })
  .catch(err => {
    resSendfn(err)
    console.log(err.message)
  })
}

module.exports.save = save
