angular
  .module("app")
  .controller("FilmeDetalheController", FilmeDetalheController);

FilmeDetalheController.$inject = [
  "$location",
  "MoviesService",
  "$routeParams",
  "ListaService",
];

function FilmeDetalheController(
  $location,
  MoviesService,
  $routeParams,
  ListaService
) {
  vm = this;
  vm.movie = undefined;
  vm.suggestions = undefined;
  vm.isOnList = false;
  vm.buttonClass = "btn btn-success";
  vm.buttonText = "Adicionar na lista";

  vm.getPageInfo = () => {
    MoviesService.exec_GET_BY_ID($routeParams.id).then((res) => {
      vm.movie = res.data.movie;

      ListaService.exec_GET_BY_ID($routeParams.id).then((res) => {
        if (Object.keys(res).length > 0 && res.constructor === Object) {
          this.isOnList = true;
          this.buttonText = "Remover da lista";
          this.buttonClass = "btn btn-danger";
        }
        MoviesService.exec_GET_SUGGESTIONS($routeParams.id).then((res) => {
          vm.suggestions = res.data.movies;
        });
      });
    });
  };

  vm.list = () => {
    if (this.isOnList) {
      ListaService.exec_DELETE(this.movie.id).then(() => {
        this.buttonText = "Adicionar na lista";
        this.buttonClass = "btn btn-outline-success";
        this.isOnList = false;
      });
    } else {
      const data = {
        id: this.movie.id,
        name: this.movie.title,
        cover: this.movie.medium_cover_image,
      };
      ListaService.exec_POST(data).then((res) => {
        this.buttonText = "Remover da lista";
        this.buttonClass = "btn btn-danger";
        this.isOnList = true;
      });
    }
  };
}
