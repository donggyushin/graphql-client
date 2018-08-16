import gql from "graphql-tag";

export const HOME_PAGE = gql`
  {
    movies {
      id
      rating
      title
      genres
      year
      summary
      language
      medium_cover_image
      date_uploaded
    }
  }
`;

export const MOVIE_DETAIL = gql`
  query getMovieDetails($movieId: Int!) {
    movie(id: $movieId) {
      id
      description_full
      title
      url
      rating
      year
      genres
      language
      medium_cover_image
      url
      runtime
      download_count
      large_cover_image
    }
    suggestions(id: $movieId) {
      id
      medium_cover_image
      title
      rating
    }
  }
`;
