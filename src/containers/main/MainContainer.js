import React, { Component } from "react";
import { connect } from "react-redux";
import Main from "components/main/Main";

class MainContainer extends Component {
  render() {
    return <Main />;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer);
