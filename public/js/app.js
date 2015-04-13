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

.filter('toMomentDate', function () {
    return function(dateStr) {
        return moment(dateStr, "M/DD hh:mm");
    };
})

.filter('timeOnly', function () {
    return function (dateStr) {
        return moment(dateStr, "M/DD hh:mm").format("h:mm a");
    }
})