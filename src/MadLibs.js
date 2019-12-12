import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.count ? this.props.count : 0
    };
  }

  handleClick(e) {
    console.log("clicked");
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <h1 id="count-header">Your current count is: {this.state.count}</h1>
        <button
          className={this.props.className}
          onClick={this.handleClick.bind(this)}
        >
          Add to Count
        </button>
      </div>
    );
  }
}

export default Counter;
