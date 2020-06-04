
import React from "react";

class OrderEvent extends React.Component {

  render() {
    return (
      <div className="order-sub-event">
        <p className="label">Console Output</p>
        <textarea className="order-sub-event-box" rows="20" disabled="disabled"/>
      </div>
    );
  }
}

export default OrderEvent;