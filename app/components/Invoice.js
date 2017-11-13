import React from 'react'

let Invoice = (props) => {
  let style = {textDecoration: 'none'}
  let collectionStatus = '';
  if (props.invoice.actual) {
    style = {
      textDecorationLine: 'line-through',
      color: 'gray',
      backgroundColor: '#d3d3d3',
      fontSize: 8
    }
    collectionStatus = props.invoice.actual.slice(0,10)
  }

  return (
    <tr>
      <td style={style} >{props.invoice.due.slice(0,10)}</td>
      <td style={style} >{props.invoice.id}</td>
      <td style={style} >{props.invoice.name}</td>
      <td style={style} >{props.invoice.code}</td>
      <td style={style} >{props.invoice.issued.slice(0,10)}</td>
      <td style={style} >{'$' + props.invoice.amount.toLocaleString()}</td>
      <td style={style} >{props.invoice.expected.slice(0,10)}</td>
      <td style={style} >{collectionStatus}</td>
    </tr>
  )
}

export default Invoice
