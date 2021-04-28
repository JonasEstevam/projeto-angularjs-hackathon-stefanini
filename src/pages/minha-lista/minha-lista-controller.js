angular.module("app").controller("MinhaListaController", MinhaListaController);

MinhaListaController.$inject = ["ListaService"];

function MinhaListaController(ListaService) {
  vm = this;
  vm.movies = [];
  vm.getMovies = function () {
    ListaService.exec_GET().then((res) => {
      res.forEach((item) => {
        this.movies.push(item);
      });
    });
  };
}
