
import React from "react";
import OrderIdSubmit from "./OrderIdSubmit";
import CloseOrderSaga from "./CloseOrderSaga";
import CloseCartSaga from "./CloseCartSaga";
import GenerateOrderResubmitted from "./GenerateOrderResubmitted";
import OrderEvent from "./OrderEvent";

class MainBox extends React.Component {

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
      <div className="MainBox">
        <OrderIdSubmit/>
        <div className="buttons">
          <CloseCartSaga/>
          <CloseOrderSaga/>
          <GenerateOrderResubmitted/>
        </div>
        <OrderEvent/>
      </div>
    );
  }
}

export default MainBox;
