import React from "react";
import styles from "./styles.scss";
import classNames from "classnames/bind";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const cx = classNames.bind(styles);

const Main = () => {
  return (
    <Router>
      <div className={cx("container")}>
        main
        <Route path="/" />
      </div>
    </Router>
  );
};

export default Main;
