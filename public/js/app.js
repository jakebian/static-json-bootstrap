angular.module('cutc-home', ['ui.bootstrap'])

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