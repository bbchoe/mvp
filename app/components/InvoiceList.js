import React from 'react'

let InvoiceList = () => (
  <div>
    <h5>Invoice List Which Will Contain A Table Of Invoices</h5>
    <table>
      <thead>
        <tr>
          <th>Invoice Number</th>
          <th>Client Name</th>
          <th>Client Code</th>
          <th>Issued Date</th>
          <th>Due Date</th>
          <th>Amount Due</th>
          <th>Expected Collection Date</th>
          <th>Actual Collection Date (if app.)</th>
        </tr>
      </thead>
    </table>
  </div>
)

export default InvoiceList
