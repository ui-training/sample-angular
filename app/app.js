var app = angular.module('sampleAngular', []);

app.config([function(){

}]);

app.run([function(){
    // Initialization
}]);


app.controller('MainController', [
    '$scope',
    function($scope){
        $scope.message = 'Loaded Main Controller';
    }
]);