import React from 'react';
import Invoice from './Invoice.js';

let InvoiceList = (props) => (
  <div className="box">
    <h5>Invoice List</h5>
      <table>
        <thead>
          <tr className="headerRow">
            <th>Due Date</th>
            <th>Invoice Number</th>
            <th>Client Name</th>
            <th>Client Code</th>
            <th>Issued Date</th>
            <th>Amount</th>
            <th>Expected Collection Date</th>
            <th>Actual Collection Date (if app.)</th>
          </tr>
        </thead>
        <tbody>
          {props.invoices.map((invoiceItem, index) => {
            return <Invoice invoice={invoiceItem} key={index}/>
          })}
        </tbody>
      </table>
  </div>
);

export default InvoiceList;
