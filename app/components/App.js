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
    console.log('UPDATING INVOICES')
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
      <div className="mainapp">
        <h1>Super Awesome Invoice Manager</h1>
        <InvoiceSummary />
        <InvoiceEntry updateInvoices={this.updateInvoices}/>
        <InvoiceList invoices={this.state.invoices} />
      </div>
    )
  }
}

export default App

// <button onClick={this.showInvoices.bind(this)}>Show Current Invoices</button>
