
import React from "react";

class CloseOrderSaga extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    this.handleClick = this.handleClick.bind(this);
  }

  //implementation will change (obviously), this is just proof of concept
  handleClick(event) {
    alert("Order Saga Closed");
    //implement closing order saga here (somehow)
    event.preventDefault();
  }

  render() {
    return (
      <button onClick={this.handleClick} className="btn-primary">
        Close Order Saga
      </button>
    );
  }
}

export default CloseOrderSaga;