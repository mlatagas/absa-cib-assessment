(function() {
    angular
    .module('myApp.service.numberGenerator')
    .factory('numberGeneratorService', NumberGeneratorService);

    NumberGeneratorService.$inject = ['$http'];

    function NumberGeneratorService($http) {

        var numberGenService = {
            generateNumber: generateNumber,
            getExistingPhoneBooks: getExistingPhoneBooks
        };

        return numberGenService;

        // Implementation Details

        function generateNumber() {
            return Math.random();
        };

        function getExistingPhoneBooks() {
            $http({
                method: 'GET',
                url: 'http://localhost:8081/phone-book-api/phone-books'
            }).then(function successCallback(response) {
                console.log(response);
                return response.data;
            }, function errorCallback(error) {
                return error;
            });
        }
    }

})();