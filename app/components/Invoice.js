import React from 'react'

let Invoice = (props) => (
  <tr className="box">
    <td>{props.invoice.due}</td>
    <td>{props.invoice.id}</td>
    <td>{props.invoice.name}</td>
    <td>{props.invoice.code}</td>
    <td>{props.invoice.issued}</td>
    <td>{props.invoice.amount}</td>
    <td>{props.invoice.expected}</td>
    <td>{props.invoice.actual}</td>
  </tr>
)

export default Invoice
