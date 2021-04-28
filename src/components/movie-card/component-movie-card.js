angular.module("app").component("movieCard", {
  templateUrl: "src/components/movie-card/movie-card.html",
  bindings: {
    imgsrc: "=",
    title: "=",
    id: "=",
    width: "=",
  },
  controllerAs: "vm",
  controller: function ($location, ListaService) {
    vm = this;
    vm.cardStyle = {};
    vm.showTitle = false;
    vm.myList = [];
    vm.$onInit = () => {
      if (vm.width == "10rem") {
        vm.showTitle = true;
      }
      vm.cardStyle = { width: vm.width };
    };
    vm.mostrarDetalhe = (id) => {
      $location.path(`filme/${id}`);
    };
    vm.addToList = (id, name, cover) => {
      ListaService.exec_POST({ id, name, cover });
    };
  },
});
