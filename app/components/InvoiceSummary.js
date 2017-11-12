import React from 'react'

let InvoiceSummary = (props) => {
  let totalValue = 0
  let outstandingInvoiceCt = 0
  let outstandingInvoiceValue = 0

  props.invoices.forEach(invoice => {
    totalValue += invoice.amount
    if (invoice.actual.length < 6) {
      outstandingInvoiceCt ++
      outstandingInvoiceValue += invoice.amount
    }
  })

  return (
    <div className="invoicesummary box">
    <h5>Invoices Summary</h5>
    <table>
    <tr>
      <th>Total Invoices</th>
      <th>$ Value</th>
      <th>Outstanding Invoices</th>
      <th>$ Value</th>
    </tr>
      <td>{props.invoices.length}</td>
      <td>{'$ ' + totalValue.toLocaleString()}</td>
      <td>{outstandingInvoiceCt}</td>
      <td>{'$ ' + outstandingInvoiceValue.toLocaleString()}</td>
    </table>
    </div>
  )
}

export default InvoiceSummary
