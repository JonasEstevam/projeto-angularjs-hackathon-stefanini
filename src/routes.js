angular.module("app").config(function ($routeProvider) {
  $routeProvider
    .when("/minha-lista", {
      templateUrl: "src/pages/minha-lista/minha-lista.html",
      controller: "MinhaListaController as vm",
    })
    .when("/filme/:id", {
      templateUrl: "src/pages/filme-detalhe/filme-detalhe.html",
      controller: "FilmeDetalheController as vm",
    })
    .otherwise({
      templateUrl: "src/pages/filmes/filmes.html",
      controller: "FilmesController as vm",
    });
});
