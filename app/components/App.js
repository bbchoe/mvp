import React from 'react'
import InvoiceSummary from './InvoiceSummary'
import InvoiceEntry from './InvoiceEntry'
import InvoiceList from './InvoiceList'
import { getFreshInvoices } from '../client-helpers/getFreshInvoices'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      invoices: []
    }
    this.updateInvoices = this.updateInvoices.bind(this)
  }

  updateInvoices () {
    getFreshInvoices(this.setState.bind(this))
  }

  showInvoices () {
    console.log('THIS.STATE ', this.state)
  }

  componentDidMount () {
    console.log('1. IN COMPONENT DID MOUNT')
    this.updateInvoices()
  }

  render() {
    return (
      <div className="box">
        <h1>Super Awesome Invoice Manager</h1>
        <button onClick={this.showInvoices.bind(this)}>Show Current Invoices</button>
        <InvoiceSummary />
        <InvoiceEntry />
        <InvoiceList />
      </div>
    )
  }
}

export default App
