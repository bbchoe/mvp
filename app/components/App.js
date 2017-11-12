import React from 'react'
import InvoiceSummary from './InvoiceSummary'
import InvoiceEntry from './InvoiceEntry'
import InvoiceList from './InvoiceList'
import { getFreshInvoices } from '../client-helpers/getFreshInvoices'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div className="box">
        <h1>Super Awesome Invoice Manager</h1>
        <InvoiceSummary />
        <InvoiceEntry />
        <InvoiceList />
      </div>
    )
  }
}

export default App
