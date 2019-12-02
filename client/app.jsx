import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showAll: false
    }
  }

  render() {
    return (
      <div className="component-title">Zagat mentions of Sari Sari Store</div>
      // render first two mentions if showAll is false
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"));