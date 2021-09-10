app.service("APIService", function ($http) {
    this.getAllContacts = function () {
        return $http.get(baseUrl + "contact");
    }
    this.getContact = function (id) {
        return $http.get(baseUrl + "contact/" + id);
    }

    this.AddContact = function (contact) {
        return $http.post(baseUrl + "contact", contact);
    }

    this.UpdateContact = function (contact) {

        return $http({

            method: 'PUT',
            url: baseUrl + "contact",
            data: contact

        });
    }

    this.UpdateStatus = function (id, status) {
        return $http.post(baseUrl + "contact/SetStatus/" + id + "/" + status);
    }
}); 