import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurant: null,
      articleIds: null,
      showAll: false
    }
  }

  render() {
    if (this.state.showAll === false) {
      return (
        <div className="component-title">Zagat mentions</div>
        // render first two mentions if showAll is false
      )
    }
  }
}

ReactDOM.render(<App />, document.getElementById("app"));