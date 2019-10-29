(function () {
    angular.module('myApp.numbers')
        .config(['$stateProvider', function config($stateProvider) {
            $stateProvider.state('numbers', {
                url: '/phone-book/:phoneBookId',
                params: {
                    phoneBookId: null
                },
                views: {
                    "main": {
                        controller: 'NumberCtrl as numberCtrl',
                        templateUrl: 'numbers/search.tpl.html'
                    }
                },
                data: {pageTitle: 'Numbers'}
            });
        }])
})();