import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import client from "apollo/apollo";
import Main from "components/main/Main";

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Main />
      </ApolloProvider>
    );
  }
}

export default App;
