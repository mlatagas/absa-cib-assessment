(function () {

    angular.module('myApp.numbers')
        .controller('NumberCtrl', NumberController);

    NumberController.$inject = ['numberGeneratorService', '$http', '$stateParams', '$state'];

    function NumberController(numberGeneratorService, $http, $stateParams, $state) {

        vm = this;
        var phoneBookId = $stateParams.phoneBookId;
        var init = function getAllPhonebookEntriesById(phoneBookId) {
            //TODO move to service
            $http({
                method: 'GET',
                url: 'http://localhost:8081/phone-book-api/phone-book/' + phoneBookId + '/entry'
            }).then(function successCallback(response) {
                console.log(response);
                vm.entries = response.data.content;
                return response.data;
            }, function errorCallback(error) {
                return error;
            });

        };
        init(phoneBookId);

        vm.addEntry = addEntry;
        vm.phoneNumberValidation = "/^\\+(?:[0-9] ?){6,14}[0-9]$/";

        return vm;

        function addEntry(name, number) {
            if (!(name || number)) {
                vm.error = true;
                return;
            }
            vm.error = false;

            var addNewEntry = $http({
                method: 'POST',
                url: 'http://localhost:8081/phone-book-api/phone-book/' + phoneBookId + '/entry',
                data: {
                    name: name,
                    phoneNumber: number
                }
            }).then(function successCallback(response) {
                console.log(response);
                vm.entries = response.data.entryList;
                return response.data;
            }, function errorCallback(error) {
                return error;
            });
            $state.go($state.current, {}, {reload: true});

        }


    };

})();