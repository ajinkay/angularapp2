'use strict';

eventsApp.controller('EventController',function($scope){
$scope.snippet="my name is ajinkay";
$scope.st={color: "red"};
$scope.event={
    name: "The Angular WorkShop",
    date: "17-aug-2017",
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
		dur: "1 hr",
		level: "basic",
		abs: "this is basic introductory level course for angular.",
		vote: 0
	}
	,
	{
		name: "Step into Angular",
		tutor: "mr. Scott Allen",
		dur: "2 hr",
		level: "intermiddiate",
		abs: "here we will see services,directive for angular.",
		vote: 0
	}
	,
	{
		name: "Angular In Depth",
		tutor: "mr. ",
		dur: "3 hr",
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