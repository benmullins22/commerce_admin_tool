
import React from "react";

class CloseCartSaga extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    this.handleClick = this.handleClick.bind(this);
  }

  //implementation will change (obviously), this is just proof of concept
  handleClick(event) {
    alert("Cart Saga Closed");
    //implement closing cart saga here (somehow)
    event.preventDefault();
  }

  render() {
    return (
      <button onClick={this.handleClick} className="btn-primary">
        Close Cart Saga
      </button>
    );
  }
}

export default CloseCartSaga;