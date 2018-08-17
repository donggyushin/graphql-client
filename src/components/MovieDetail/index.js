import React from "react";
import styles from "./styles.scss";
import classNames from "classnames/bind";
import MoviePoster from "components/MoviePoster";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);

const MovieDetail = ({
  id,
  description_full,
  title,
  url,
  rating,
  year,
  genres,
  medium_cover_image,
  runtime,
  download_count,
  large_cover_image
}) => {
  return (
    <div className={cx("container")}>
      <div className={cx("poster")}>
        <img src={large_cover_image} />
      </div>
      <div className={cx("right")}>
        <span className={cx("text")}>{title}</span>
        <span className={cx("text")}>{year}</span>
        <span className={cx("text")}>{rating}✨</span>
        <span className={cx("text")}>
          {genres && genres.map(genre => genre + ", ")}
        </span>
        <span className={cx("text")}>{description_full}</span>
        <span className={cx("text")}>
          runtime:
          {runtime}
        </span>
        <span className={cx("text")}>
          downloads:
          {download_count}
        </span>

        <span className={cx("text", "button")}>
          <a href={url}>download</a>
        </span>
      </div>
    </div>
  );
};

export default MovieDetail;
