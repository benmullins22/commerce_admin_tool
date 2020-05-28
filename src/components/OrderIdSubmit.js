
import React from "react";

class OrderIdSubmit extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Order ID was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="OrderID">
        <p className="label">Order ID</p>
        <form onSubmit={ this.handleSubmit }>
          <input className="textbox" type="text" value={ this.state.value } onChange={ this.handleChange }/>
        </form>
      </div>
    );
  }
}

export default OrderIdSubmit;