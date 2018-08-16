import React, { Component } from "react";

import { Provider } from "react-redux";
import store from "./store";
import MainContainer from "containers/main/MainContainer";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainContainer />
      </Provider>
    );
  }
}

export default App;
