import React from 'react'
import postToServer from '../client-helpers/postToServer'

class InvoiceEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      code: '',
      issued: '',
      due: '',
      amount: '',
      expected: '',
      actual: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit(event) {
    postToServer(this.state, this.props.updateInvoices)
    event.preventDefault()
  }
  render() {
    return (
      <div className="box">
        <h5>Add an Invoice</h5>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Invoice id:</label>
            <input type="number" name="id" value={this.state.id} onChange={this.handleInputChange} required />
          </div>
          <div>
            <label>Client name:</label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} required />
          </div>
          <div>
            <label>Client code:</label>
            <input type="text" name="code" value={this.state.code} onChange={this.handleInputChange} required />
          </div>
          <div>
            <label>Issued date:</label>
            <input type="date" name="issued" value={this.state.issued} onChange={this.handleInputChange} required />
          </div>
          <div>
            <label>Due date:</label>
            <input type="date" name="due" value={this.state.due} onChange={this.handleInputChange} required />
          </div>
          <div>
            <label>Amount due:  $</label>
            <input name="amount" type="number" min="0" step="1" value={this.state.amount} onChange={this.handleInputChange} required />
          </div>
          <div>
            <label>Expected collection timing:</label>
            <input name="expected" type="date" value={this.state.expected} onChange={this.handleInputChange} required />
          </div>
          <div>
            <label>Actual collection timing:</label>
            <input name="actual" type="date" value={this.state.actual} onChange={this.handleInputChange} />
            <input className="submit-btn" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    )
  }
}

export default InvoiceEntry
