app.controller('ViewDataController', function ($scope, $rootScope, APIService, $log) {
    $rootScope.$on("LoadContactViewData", function ()
    {
        APIService.getContact($rootScope.contactId).then(function (res) {
            $scope.viewContact = res.data;
        }, function (error) {
            $log.error('Oops! Something went wrong while fetching the data.' + error);
        });
    });
});