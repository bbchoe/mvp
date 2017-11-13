import React from 'react'

let InvoiceSummary = (props) => {
  let totalValue = 0
  let outstandingInvoiceCt = 0
  let outstandingInvoiceValue = 0

  props.invoices.forEach(invoice => {
    totalValue += invoice.amount
    if (!invoice.actual) {
      outstandingInvoiceCt ++
      outstandingInvoiceValue += invoice.amount
    }
  })

  return (
    <div className="invoicesummary box">
    <h5>Invoices Summary</h5>
    <table>
    <thead>
      <tr>
        <th>Outstanding Invoices</th>
        <th>$ Value</th>
        <th>Total Invoices</th>
        <th>$ Value</th>
        </tr>
    </thead>
    <tbody>
      <tr>
        <td>{outstandingInvoiceCt}</td>
        <td>{'$ ' + outstandingInvoiceValue.toLocaleString()}</td>
        <td>{props.invoices.length}</td>
        <td>{'$ ' + totalValue.toLocaleString()}</td>
      </tr>
    </tbody>
    </table>
    </div>
  )
}

export default InvoiceSummary
