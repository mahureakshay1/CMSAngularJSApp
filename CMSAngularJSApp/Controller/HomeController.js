app.controller('HomeController', function ($scope, $rootScope, APIService, $log) {

    $scope.ListContact = function () {
        APIService.getAllContacts()
            .then(function (d) {
                $scope.Contacts = d.data;
            }, function (error) {
                $log.error('Oops! Something went wrong while fetching the data.')
            })
    }
    $rootScope.$on("LoadData", function () {
        APIService.getAllContacts()
            .then(function (d) {
                $scope.Contacts = d.data;

            }, function (error) {
                $log.error('Oops! Something went wrong while fetching the data.')
            });
    });
    $scope.Edit = function (ct) {
        $rootScope.contact = ct;
        $rootScope.$emit("LoadEditData", {});
    }
    $scope.UpdateStatus = function (id) {
        APIService.UpdateStatus(id, false).then(function (d) {
            $rootScope.$emit("LoadData", {});
        }, function (error) {
            $log.error('Oops! Something went wrong while fetching the data.' + error)
        });
    }
    $scope.View = function (id) {
        $rootScope.contactId = id;
        $rootScope.$emit("LoadContactViewData", {});
    }
});