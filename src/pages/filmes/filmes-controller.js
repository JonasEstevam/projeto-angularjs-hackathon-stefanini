angular.module("app").controller("FilmesController", FilmesController);

FilmesController.$inject = ["$location", "MoviesService", "ListaService"];

function FilmesController($location, MoviesService, ListaService) {
  vm = this;
  vm.genre = "Action";
  vm.movies = [];
  vm.currentPage = 1;
  vm.genres = [
    { id: "action", name: "Ação" },
    { id: "comedy", name: "Comédia" },
    { id: "sci-fi", name: "Sci-Fi" },
    { id: "horror", name: "Horror" },
    { id: "romance", name: "Romance" },
    { id: "thriller", name: "Thriller" },
    { id: "mystery", name: "Mystery" },
    { id: "crime", name: "Crime" },
    { id: "animation", name: "Animação" },
    { id: "adventure", name: "Aventura" },
    { id: "fantasy", name: "Fantasia" },
    { id: "documentary", name: "Documentário" },
  ];
  vm.getMovies = function () {
    MoviesService.exec_GET(this.genre, this.currentPage).then((res) => {
      res.data.movies.forEach((item) => {
        this.movies.push(item);
      });
    });
  };

  vm.nextPage = function () {
    this.currentPage += 1;
    this.getMovies();
  };

  vm.changeGenre = (genre) => {
    this.currentPage = 1;
    this.genre = genre;

    MoviesService.exec_GET(genre, 1).then((res) => {
      this.movies = res.data.movies;
    });
  };
}
