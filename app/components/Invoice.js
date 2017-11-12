import React from 'react'

let Invoice = (props) => {
  let style = {textDecoration: 'none'}
  if (props.invoice.actual.length > 6) {
    style.textDecoration = 'line-through'
  }

  return (
    <tr>
      <td style={style} >{props.invoice.due.slice(0,10)}</td>
      <td style={style} >{props.invoice.id}</td>
      <td style={style} >{props.invoice.name}</td>
      <td style={style} >{props.invoice.code}</td>
      <td style={style} >{props.invoice.issued.slice(0,10)}</td>
      <td style={style} >{'$' + props.invoice.amount}</td>
      <td style={style} >{props.invoice.expected.slice(0,10)}</td>
      <td style={style} >{props.invoice.actual.slice(0,10)}</td>
    </tr>
  )
}

export default Invoice
