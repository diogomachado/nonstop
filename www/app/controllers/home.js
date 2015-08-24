(function() {
    angular.module('nonstop').controller('HomeController', function($scope, $rootScope, $interval){

        $scope.counter = 10;

        $interval(function(){

            $scope.counter--;

            if ($scope.counter > 0 && $scope.counter <= 3 ){
                console.log("Plim");

                var my_media = new Media("/android_asset/www/sound/beep.mp3",
                function() {
                  console.log('Beleza, deu certo ping');
                },
                function(err) {
                  console.log('Opa, deu erro');
                });

                my_media.play();
            }

        }, 1000, $scope.counter);

    });
})();