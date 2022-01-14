import React from "react";
import "./styles.css";

class RecursiveComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };

    this.renderSelf = this.renderSelf.bind(this);
  }

  toggleState() {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  }

  renderSelf() {
    return <RecursiveComponent />;
  }

  render() {
    return (
      <>
        <h1 onClick={this.toggleState.bind(this)}>Hello</h1>
        {this.state.isOpen && this.renderSelf()}
      </>
    );
  }
}

export default RecursiveComponent;
