import React from "react";
import styles from "./styles.scss";
import classNames from "classnames/bind";

import { HOME_PAGE } from "query/queries";
import { Query } from "react-apollo";
import Loading from "components/Loading/index";
import MoviePoster from "components/MoviePoster";

const cx = classNames.bind(styles);

const Home = () => (
  <Query query={HOME_PAGE}>
    {({ loading, data, error }) => {
      if (loading)
        return (
          <div className={cx("container")}>
            <Loading />
          </div>
        );
      if (error) return <div className={cx("container")}>err</div>;
      if (data) {
        return (
          <div className={cx("Movies")}>
            {data.movies.map(movie => (
              <MoviePoster key={movie.id} {...movie} />
            ))}
          </div>
        );
      }
    }}
  </Query>
);

export default Home;
