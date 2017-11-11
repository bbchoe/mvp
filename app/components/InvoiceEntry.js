import React from 'react'

class InvoiceEntry extends React.Component {
  constructor() {
    super();
  }
  handleSubmit(event) {
    alert('SUBMIT CLICKED');
    event.preventDefault();
  }
  render() {
    return (
      <div className="box">
        <h5>Enter Data About Invoices Here</h5>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
            Invoice number:
            </label>
            <input type="text" value="Invoice number" required />
          </div>
          <div>
            <label>
            Client name:
            </label>
            <input type="text" value="Client name" required />
          </div>
          <div>
            <label>
            Client code:
            </label>
            <input type="text" value="Client code" required />
          </div>
          <div>
            <label>
            Issued date:
            </label>
            <input type="text" value="Issued date" required />
          </div>
          <div>
            <label>
            Due date:
            </label>
            <input type="text" value="Due date" required />
          </div>
          <div>
            <label>
            Amount due:
            </label>
            <input type="text" value="Amount due" required />
          </div>
          <div>
            <label>
            Expected collection timing:
            </label>
            <input type="text" value="Date" required />
          </div>
          <div>
            <label>
            Actual collection timing:
            </label>
            <input type="text" value="Date (if collected)" required />
          </div>
            <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}


export default InvoiceEntry;
