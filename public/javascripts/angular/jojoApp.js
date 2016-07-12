var jojo = angular.module("jojoApp", []);

jojo.controller("headerCtrl", function($scope) {
    $scope.navLinks = [
        {
             url: "#Contact",
             linkName: "Contact"

        },
        {
            url: "#Portfolio",
            linkName: "Portfolio"
        },
        {
            url: "#AboutMe",
            linkName: "About Me"
        }
    ];
});