import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MissionControl from "./components/MissionControl";
import MissionReport from "./components/MissionReport";
import store from "./store";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
           
            <Route exact path="/" component={MissionControl} />
            <Route exact path="/report" component={MissionReport} />
           
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
