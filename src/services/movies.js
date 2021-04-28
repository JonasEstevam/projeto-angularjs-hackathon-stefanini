angular.module("app").factory("MoviesService", MoviesService);
MoviesService.$inject = ["$http"];

function MoviesService($http) {
  const LIST_MOVIES_URL = "https://yts.mx/api/v2/list_movies.json";
  const MOVIE_DETAILS_URL = "https://yts.mx/api/v2/movie_details.json";
  const MOVIE_SUGGESTIONS_URL = "https://yts.mx/api/v2/movie_suggestions.json";
  const service = {
    exec_GET: (genre, page) => {
      return $http
        .get(
          `${LIST_MOVIES_URL}?sort_by=rating&order_by=desc&genre=${genre}&limit=50&page=${page}`
        )
        .then(getResponse, getError);
    },
    exec_GET_BY_ID: (id) => {
      return $http
        .get(
          `${MOVIE_DETAILS_URL}?movie_id=${id}&with_images=true&with_cast=true`
        )
        .then(getResponse, getError);
    },
    exec_GET_SUGGESTIONS: (id) => {
      return $http
        .get(`${MOVIE_SUGGESTIONS_URL}?movie_id=${id}`)
        .then(getResponse, getError);
    },
  };

  function getResponse(response) {
    return response.data;
  }
  function getError(error) {
    return error.data;
  }

  return service;
}
