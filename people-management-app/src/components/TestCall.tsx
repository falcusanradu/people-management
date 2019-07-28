import React from "react";

export class Welcome extends React.Component {
  state = {
      message: 'no message yet'
  };
  componentDidMount() {
    this.hello();
  }
  render() {
    return <h1>{this.state.message}</h1>;
  }

  private hello() {
    fetch("api/hello")
      .then(response => response.text())
      .then(message => {
        this.setState({ message: message + ' test' });
      });
  }
}
