angular.module("app").component("navBar", {
  templateUrl: "src/components/navbar/navbar.html",
  controllerAs: "vm",
  controller: function ($location) {
    vm = this;
    vm.homeClass = "nav-item active";
    vm.myListClass = "nav-item";

    vm.goToMyList = () => {
      $location.path("minha-lista");
      this.myListClass = "nav-item active";
      this.homeClass = "nav-item";
    };

    vm.goToHome = () => {
      $location.path("/");
      this.homeClass = "nav-item active";
      this.myListClass = "nav-item";
    };
  },
});
