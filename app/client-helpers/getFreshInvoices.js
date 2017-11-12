import axios from 'axios'

const appServerURL = 'http://localhost:8080'

const getFreshInvoices = (appSetStatefn) => {
  console.log('IN GET FRESH INVOICES')
  let options = {
    method: 'GET',
    url: appServerURL + '/invoices',
  }
  let testArray = ['invoice 1', 'invoice 2', 'invoice 3']
  axios(options)
  .then(response => {
    appSetStatefn({
      invoices: testArray
    })
  })
}

export { getFreshInvoices }
