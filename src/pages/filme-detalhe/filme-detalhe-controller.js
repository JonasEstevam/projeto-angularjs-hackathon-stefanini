angular
  .module("app")
  .controller("FilmeDetalheController", FilmeDetalheController);

FilmeDetalheController.$inject = ["$location", "MoviesService", "$routeParams"];

function FilmeDetalheController($location, MoviesService, $routeParams) {
  vm = this;
  vm.movie = undefined;
  vm.suggestions = undefined;

  vm.mostrarDetalhe = (id) => {
    $location.path(`filme/${id}`);
  };

  MoviesService.exec_GET_BY_ID($routeParams.id).then((res) => {
    vm.movie = res.data.movie;
    console.log(res.data.movie);
    MoviesService.exec_GET_SUGGESTIONS($routeParams.id).then((res) => {
      vm.suggestions = res.data.movies;
    });
  });
}
