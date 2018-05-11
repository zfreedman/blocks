// import
import React, { Component } from "react";
import ReactDOM from "react-dom";

// custom components
import Week from "./components/week";
import TmpThing from "./components/tmp_thing";

// create new copmonenet to produce html
class App extends Component {
  // constructor
  constructor(props) {
    super(props);

    this.state = {
      weeks: [1, 2, 3, 4, 5, 6, 7],
      selected_week: null
    };
  }

  // rendering
  // passing data from the parent state to the child state (passing props)
  render() {
    return (
      <div>
        <TmpThing things={this.state.weeks} />
      </div>
    );
  }
}

// put component in dom
ReactDOM.render(<App />, document.querySelector(".container"));
