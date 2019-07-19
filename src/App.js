import React, { Component } from "react";
import "bulma/css/bulma.css";
import { Route } from "react-router-dom";
import IndexMain from "./containers/IndexMain/IndexMain";

class App extends Component {
  componentDidMount(){
    document.title = "The-covert Task"
  }
  render() {
    return (
      <div>
     
          <Route path="/" component={IndexMain} />
      </div>
    );
  }
}

export default App;
