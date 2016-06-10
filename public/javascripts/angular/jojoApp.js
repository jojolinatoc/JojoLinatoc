var jojo = angular.module("jojoApp", []);

jojo.controller("headerCtrl", function($scope) {
    $scope.navLinks = [
                            {
                                url: "/Portfolio",
                                linkName: "Portfolio"
                            },
                            {
                                url: "/About",
                                linkName: "About"
                            },
                            {
                                url: "/Contact",
                                linkName: "Contact"
                            }
                        ];
});