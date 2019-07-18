import React, { Component } from "react";
import "bulma/css/bulma.css";
import { Switch, Route } from "react-router-dom";
import IndexMain from "./containers/IndexMain/IndexMain";

class App extends Component {
  componentDidMount(){
    document.title = "The-covert Task"
  }
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={IndexMain} />
        </Switch>
      </div>
    );
  }
}

export default App;
