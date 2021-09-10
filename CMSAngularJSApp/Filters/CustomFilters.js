app.filter('status', function () {
    return function (input) {
        return input ? 'Active' : 'Inactive';
    };
});