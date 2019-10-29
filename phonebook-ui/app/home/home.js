(function () {

    angular.module('myApp.home')
        .controller('HomeCtrl',  HomeController);

    HomeController.$inject = ['numberGeneratorService', '$http', '$state'];

    function HomeController(numberGeneratorService, $http, $state) {

        vm = this;

        // vm.phoneBooks = numberGeneratorService.getExistingPhoneBooks().then(function (resp) {
        //     return resp;
        // });

        $http({
            method: 'GET',
            url: 'http://localhost:8081/phone-book-api/phone-books'
        }).then(function successCallback(response) {
            console.log(response);
            vm.phoneBooks = response.data;
            return response.data;
        }, function errorCallback(error) {
            return error;
        });


        vm.changeState = function changeState() {
            console.log("changing state");
           $state.go('numbers', {phoneBookId:1});
        }

    };
})();