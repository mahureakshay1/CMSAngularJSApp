
app.controller('EditContactController', function ($rootScope, $scope, APIService, $log) {

    $rootScope.$on("LoadEditData", function () {

        APIService.getContact($rootScope.contact.contactId).then(function (res) {
            $scope.editContact = res.data;
        });

    });

    $scope.Save = function () {

        APIService.UpdateContact($scope.editContact).then(function (d) {
            $rootScope.$emit("LoadData", {});
            $scope.$apply();
            $('EditContactModal').modal('hide');
        }, function (error) {
            $log.error('Oops! Something went wrong while fetching the data.' + error)
        });
    }
});