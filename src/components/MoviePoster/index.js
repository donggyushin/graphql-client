import React from "react";
import styles from "./styles.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const MoviePoster = ({
  id,
  title,
  rating,
  genres,
  year,
  summary,
  language,
  medium_cover_image,
  date_uploaded
}) => (
  <div className={cx("container")}>
    <div className={cx("image")}>
      <Link to={`/detail/${id}`}>
        <img src={medium_cover_image} alt={title} />
      </Link>
    </div>
    <span className={cx("title")}>{title}</span>
    <div className={cx("genres")}>
      {genres && genres.map(genre => genre + ", ")}
    </div>
    <span className={cx("rating")}>rating: {rating}</span>
    <span className={cx("rating")}>{year}</span>
  </div>
);

export default MoviePoster;
