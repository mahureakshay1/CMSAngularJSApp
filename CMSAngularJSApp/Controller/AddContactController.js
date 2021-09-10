
app.controller('AddContactController', function ($rootScope, $scope, APIService, $log) {

    $scope.Save = function () {

        APIService.AddContact($scope.addContact).then(function (d) {
            $('AddContactModal').modal('hide');
            $rootScope.$emit("LoadData", {});
            delete $scope.addContact;

        }, function (error) {
            $log.error('Oops! Something went wrong while fetching the data.' + error)
        });
    }
});