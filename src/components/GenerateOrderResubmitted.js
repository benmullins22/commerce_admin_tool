
import React from "react";

class GenerateOrderResubmitted extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    this.handleClick = this.handleClick.bind(this);
  }

  //implementation will change (obviously), this is just proof of concept
  handleClick(event) {
    alert("Order Resubmitted Event Generated");
    //implement generating order resubmitted event here (somehow)
    event.preventDefault();
  }

  render() {
    return (
      <button onClick={this.handleClick} className="btn-primary">
        Generate Order Resubmitted Event
      </button>
    );
  }
}

export default GenerateOrderResubmitted;