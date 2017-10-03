'use strict';

eventsApp.controller('EventController',function($scope){

$scope.event={
    name: "The Arijit Singh Concert",
    date: "17-aug-2017",
    time : "10:00 pm",
    img: "./app/img/angularjs-logo.png",
    location: {
        address:"14, D-block,new Mumbai",
        area: "Worli",        
        city :"mumbai"


}
}


});