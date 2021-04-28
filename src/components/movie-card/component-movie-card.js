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
    vm.isOnList = false;
    vm.buttonClass = "btn btn-outline-success";
    vm.buttonText = "Adicionar na lista";

    vm.$onInit = () => {
      ListaService.exec_GET_BY_ID(this.id).then((res) => {
        if (Object.keys(res).length > 0 && res.constructor === Object) {
          this.isOnList = true;
          this.buttonText = "Remover da lista";
          this.buttonClass = "btn btn-danger";
        }
      });
      if (vm.width == "10rem") {
        vm.showTitle = true;
      }
      vm.cardStyle = { width: vm.width };
    };

    vm.mostrarDetalhe = (id) => {
      $location.path(`filme/${id}`);
    };

    vm.list = () => {
      if (this.isOnList) {
        ListaService.exec_DELETE(this.id).then(() => {
          this.buttonText = "Adicionar na lista";
          this.buttonClass = "btn btn-outline-success";
          this.isOnList = false;
        });
      } else {
        const data = {
          id: this.id,
          name: this.title,
          cover: this.imgsrc,
        };
        ListaService.exec_POST(data).then((res) => {
          this.buttonText = "Remover da lista";
          this.buttonClass = "btn btn-danger";
          this.isOnList = true;
        });
      }
    };
  },
});
