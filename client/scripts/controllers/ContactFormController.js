//var myApp = angular.module("myApp", ['ngRoute', 'ngAnimate', 'ngMaterial']);


angular.module('myApp').controller('ContactFormController', ['$scope', '$http', '$mdToast', '$document', '$animate',
    function($scope, $http, $mdToast, $document, $animate) {


        this.sendMail = function () {

            var data = ({
                contactName : this.contactName,
                contactEmail : this.contactEmail,
                contactMsg : this.contactMsg
            });


        //ToastPosition uses id=toastPosition in contact.html
            $scope.toastPosition = {
                bottom: true,
                top: false,
                left: true,
                right: false
            };
            $scope.getToastPosition = function () {
                return Object.keys($scope.toastPosition)
                    .filter(function (pos) {
                        return $scope.toastPosition[pos];
                    })
                    .join(' ');

            };
            $http.post('/contact-form', data).
                success(function(data, status, headers, config) {

                    $mdToast.show(
                        $mdToast.simple()
                            .parent( $document[0].querySelector('#toastBounds'))

                            .position($scope.getToastPosition())
                            .content('Thanks for your message ' + data.contactName + ', DIY 4 Life!')
                            .hideDelay(10000)
                    );
                }).
                error(function(data, status, headers, config) {
                });

        };
    }
]);