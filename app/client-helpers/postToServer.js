import axios from 'axios'

const appServerURL = 'http://localhost:8080'

let postToServer = (invoice, cbUpdateInvoices) => {
  // receives invoice input object, sends it to server in POST request
  let options = {
    method: 'POST',
    url: appServerURL + '/invoice',
    data: invoice
  }
  axios(options)
  .then(response => {
    cbUpdateInvoices()
  })
}

export default postToServer
