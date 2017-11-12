import axios from 'axios'

const appServerURL = 'http://localhost:8080'

const getFreshInvoices = (appSetStatefn) => {
  console.log('2. IN GET FRESH INVOICES')
  // let testArray = ['invoice 1', 'invoice 2', 'invoice 3']
  // appSetStatefn( {
  //   invoices: testArray
  // })

  let options = {
    method: 'GET',
    url: appServerURL + '/invoices',
  }
  axios(options)
  .then(response => {
    appSetStatefn({
      invoices: response.data
    })
  })
  .catch(err => {
    console.log('ERROR: did not get fresh invoices ', err)
  })
}

export { getFreshInvoices }
