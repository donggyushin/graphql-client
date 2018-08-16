import React from "react";
import styles from "./styles.scss";
import classNames from "classnames/bind";

import { Query } from "react-apollo";
import { MOVIE_DETAIL } from "query/queries";
import Loading from "components/Loading";
import MovieDetail from "components/MovieDetail";
import MoviePoster from "components/MoviePoster";

import { Link } from "react-router-dom";
const cx = classNames.bind(styles);

const Detail = ({
  match: {
    params: { movieId }
  }
}) => {
  return (
    <Query query={MOVIE_DETAIL} variables={{ movieId: movieId }}>
      {({ loading, data, error }) => {
        if (loading)
          return (
            <div className={cx("loading")}>
              <Loading />
            </div>
          );
        if (error) return <div className={cx("loading")}>error</div>;
        if (data)
          return (
            <div className={cx("detail_container")}>
              <Link to="/">
                <h2>Main</h2>
              </Link>

              <div>
                <MovieDetail {...data.movie} {...data.suggestions} />
              </div>
              <h2>suggestions</h2>
              <div className={cx("suggestions")}>
                {data.suggestions &&
                  data.suggestions.map(suggestion => (
                    <MoviePoster key={suggestion.id} {...suggestion} />
                  ))}
              </div>
            </div>
          );
      }}
    </Query>
  );
};

export default Detail;
