(function() {

  // Inicializa phonegap.js
  var conf = {

      initialize: function() {
          this.bindEvents();
      },
      bindEvents: function() {
          document.addEventListener('deviceready', this.onDeviceReady, false);
      },

      onDeviceReady: function() {
        console.log('Phonegap inicializado!');
        navigator.notification.beep(2);
      },
  };

  // Inicializa o Angular.js
  angular.module('nonstop',['ngRoute', 'ngTouch'])
  .config(function($routeProvider)
  {

    // Rotas
    $routeProvider
    .when('/', {
      templateUrl : 'app/views/home.html',
      controller  : 'HomeController',
      controllerAs: 'home'
    })
    .otherwise ({ redirectTo: '/' });
  })
  .run(function($rootScope, $location, $interval){

    // Ao iniciar o angularjs
    // ...

  });

})();