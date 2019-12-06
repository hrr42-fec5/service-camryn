import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Article from '../database/articleSchema.js';

import Mention from './Mention.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: null,
      showAll: false
    }
  }

  componentDidMount() {
    var url = window.location.href;
    console.log(url);
    var restaurantId;
    $.ajax({
      type: "GET",
      url: `/api/restaurants/${restaurantId}`,
      success: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.log("Error mounting component: ", error);
      }
    })
  }

  render() {
    if (this.state.showAll === false) {
      return (
        <div>
          <div className="component-title">Zagat mentions</div>
          <Mentions />
          <button type="button">Show All ({this.state.articles.length})</button>
        </div>
      )
    }
  }
}

ReactDOM.render(<App />, document.getElementById("app"));