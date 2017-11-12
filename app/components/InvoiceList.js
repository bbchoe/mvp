import React from 'react';
import Invoice from './Invoice.js';

let InvoiceList = (props) => (
  <div className="box">
    <h5>Invoice List Which Will (eventually) Contain A Table Of Invoices</h5>
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
      <tbody>
        <Invoice />
      </tbody>
    </table>
  </div>
);

export default InvoiceList;
