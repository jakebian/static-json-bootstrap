angular.module('cutc-home', ['ui.bootstrap'])
.controller('homeCtrl', ['$scope', function ($scope) { }])
.controller('speakersCtrl', [
             '$scope', '$modal',
    function ($scope ,  $modal) {
        $scope.openBio = openBio;

        function openBio(bioId) {
            $modal.open({
                templateUrl: 'templates/speaker/'+ bioId
            });
        }
    }])