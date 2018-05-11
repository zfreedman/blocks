// import
import React, { Component } from "react";
import ReactDOM from "react-dom";

// custom components
import Week from "./components/week";

// create new copmonenet to produce html
class App extends Component {
  // constructor
  constructor(props) {
    super(props);

    this.state = {
      weeks: [1, 2, 3],
      selected_week: null
    };
  }

  // rendering
  // passing data from the parent state to the child state (passing props)
  render() {
    return (
      <div>
        Yo
        <Week weeks={this.state.weeks} />
      </div>
    );
  }
}

// put component in dom
ReactDOM.render(<App />, document.querySelector(".container"));
