import React from "react";
import styles from "./styles.scss";
import classNames from "classnames/bind";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "components/home/Home";
import Detail from "components/details";

const cx = classNames.bind(styles);

const Main = () => {
  return (
    <Router>
      <div className={cx("container")}>
        <Route exact path="/" component={Home} />
        <Route path="/detail/:movieId" component={Detail} />
      </div>
    </Router>
  );
};

export default Main;
