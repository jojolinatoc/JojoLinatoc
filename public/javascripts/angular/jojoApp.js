var jojo = angular.module("jojoApp", ['ngSanitize']);

jojo.controller("websiteCtrl", function($scope) {
    $scope.navLinks = [
        {
             url: "#Contact",
             linkName: "Contact"

        },
        {
            url: "#Skills",
            linkName: "Skills"
        },
        {
            url: "#Resume",
            linkName: "Resume"
        },
        {
            url: "#AboutMe",
            linkName: "About Me"
        }
    ];

    $scope.aboutMe = [
            {
                 icon: "/public/images/aboutme/cp.png",
                 aboutItem: "0975 352 7076",
                 link: "none"
            },
            {
                 icon: "/public/images/aboutme/email.png",
                 aboutItem: "linatocjojop@gmail.com",
                 link: "none"
            },
            {
                 icon: "/public/images/aboutme/website.png",
                 aboutItem: "http://jojo-linatoc.herokuapp.com/",
                 link: "http://jojo-linatoc.herokuapp.com/"
            },
            {
                 icon: "/public/images/aboutme/address.png",
                 aboutItem: "#186, Lumbang, Lipa City, Batangas",
                 link: "none"
            },
        ];

        $scope.softwares = [
            {
                 iconSoft: "/public/images/aboutme/play.png",
                 aboutSoft: "This is it!",
            },
            {
                 iconSoft: "/public/images/aboutme/sourceTree.png",
                 aboutSoft: "This is it!",
            },
            {
                 iconSoft: "/public/images/aboutme/intellij.png",
                 aboutSoft: "This is it!",
            },
            {
                 iconSoft: "/public/images/aboutme/adobe.png",
                 aboutSoft: "This is it!",
            },
        ];

        $scope.hobbies = [
            {
                 iconH: "/public/images/aboutme/music.png",
            },
            {
                 iconH: "/public/images/aboutme/cinema.png",
            },
            {
                 iconH: "/public/images/aboutme/windows.png",
            },
        ];
});
