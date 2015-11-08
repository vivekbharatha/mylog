/**
 * Created by v3xvard on 8/11/15.
 */

app.controller("logsListController", ["$scope", function ($scope) {
    $scope.logs = [
        {title: 'one', content: 'one content', date: '27-10-2015'},
        {title: 'two', content: 'two content', date: '28-10-2015'}
    ]
}]);