angular.module("app").factory("ListaService", ListaService);
ListaService.$inject = ["$http"];

function ListaService($http) {
  const BASE_URL = "http://localhost:3000";
  const service = {
    exec_POST: (filme) => {
      return $http.post(`${BASE_URL}/lista`, filme).then(getResponse, getError);
    },
    exec_GET: () => {
      return $http.get(`${BASE_URL}/lista`).then(getResponse, getError);
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
