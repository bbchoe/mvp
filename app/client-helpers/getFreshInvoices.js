import axios from 'axios'

const appServerURL = 'http://localhost:8080'

const getFreshInvoices = (appSetStatefn) => {
  console.log('1. IN GET FRESH INVOICES')

  let options = {
    method: 'GET',
    url: appServerURL + '/invoices',
  }
  axios(options)
  .then(response => {
    console.log('RESPONSE DATA ', response.data)
    appSetStatefn({
      invoices: response.data
    })
  })
  // .catch(err => {
  //   console.log('ERROR: did not get fresh invoices ', err)
  // })
}

export { getFreshInvoices }
