'use strict';

eventsApp.controller('EventController',function($scope){
$scope.snippet="my name is ajinkay";
$scope.st={color: "red"};
$scope.order="name";

$scope.event={
    name: "The Angular WorkShop",
    date:new Date("2017",11,"21"),
    time : "10:00 pm",
    img: "./app/img/angularjs-logo.png",
    location: {
        address:"14, D-block,new Mumbai",
        area: "Worli",        
        city :"mumbai"


	},
	sessions:
	[
	{
		name: "Introduction to Angular",
		tutor: "mr. joe eames",
		dur: 1,
		level: "basic",
		abs: "this is basic introductory level course for angular.",
		vote: 0
	}
	,
	{
		name: "Step into Angular",
		tutor: "mr. Scott Allen",
		dur: 2,
		level: "intermidiate",
		abs: "here we will see services,directive for angular.",
		vote: 0
	}
	,
	{
		name: "Angular In Depth",
		tutor: "mr. ",
		dur: 4,
		level: "Expert",
		abs: "this is in depth course for angular.",
		vote: 0
	}
	
	
	]
		
		
		
	
}
$scope.upvote= function(session)
{
	session.vote++;
}
$scope.downvote= function(session)
{
	if(session.vote>0)
	{
	session.vote--;
	}
}
});