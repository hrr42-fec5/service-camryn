import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Mentions from './Mentions.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: null,
      showAll: null
    }
  }

  componentDidMount() {
    var url = window.location.href;
    var id = url.split('=')[1];

    $.ajax({
      type: "GET",
      url: `/api/restaurants/${id}`,
      success: (data) => {
        console.log("Got the articles...");
        this.setState({
          articles: data.articles,
          showAll: false
        })
        // console.log(this.state.articles);
      },
      error: (error) => {
        console.log("Error getting articles: ", error);
      }
    })
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({
      showAll: !this.state.showAll
    })
  }

  render() {
    if (this.state.showAll === null) {
      return (
        <div>Content is loading...</div>
      )
    } else if (this.state.showAll === false) {
      return (
        <div>
          <div className="component-title" >Zagat mentions</div>
          <Mentions articles={this.state.articles.slice(0,2)}/>
          <button type="button" onClick={this.handleClick.bind(this)}>Show All ({this.state.articles.length})</button>
        </div>
      )
    }
    else if (this.state.showAll === true) {
      return (
        <div>
          <div className="component-title" >Zagat mentions</div>
          <Mentions articles={this.state.articles}/>
          <button type="button" onClick={this.handleClick.bind(this)}>Show Less</button>
        </div>
      );
    }
  }
}

ReactDOM.render(<App />, document.getElementById("app"));