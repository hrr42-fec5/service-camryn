import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurant: null
    }
  }

  render() {
    return (
      <div>React IS rendering!!</div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"));