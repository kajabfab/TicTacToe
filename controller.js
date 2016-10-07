angular.module("game",
    [])

.controller("play",['$scope',function ($scope) {

    $scope.turn = 1; // 1 -> P1's turn; 2 -> P2's turn

    $scope.whosturn = function () {
        return $scope.turn;
    };

    $scope.mark = function (event) {
        var box = event.target;
        if($scope.turn == 1)
        {
            box.src = "x.png";
            $scope.turn = 2;
        }
        else if($scope.turn == 2)
        {
            box.src = "o.png";
            $scope.turn = 1;
        }
    }

}]);