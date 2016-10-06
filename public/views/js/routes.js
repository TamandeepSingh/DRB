app.config(function($routeProvider){
    $routeProvider
      .when("/", {
        templateUrl: "/templates/template.html",
        controller: "mycontroller"
      })
      .when("/Beam", {
        templateUrl: "/templates/beamSelect.html",
        controller: "beamControl"
      })
      .when("/singlyBeam",{
        templateUrl:"/templates/singlyBeamSelect.html",
        controller: "singlyControl"
      })
      .when("/doublyBeam", {
        templateUrl: "",
        controller: "doublyControl"
      })
      .when("/tables", {
        templateUrl: "/templates/tableSelect.html",
        controller: "tableControl"
      })
      .when("/login", {
        templateUrl: "/templates/login.html",

      })
      .otherwise({
        redirceTo:"/"
      })
});
