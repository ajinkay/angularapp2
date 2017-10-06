eventsApp.controller('editEventController',function($scope)
{

    $scope.save=function(event)
    {
        alert("hi "+event.name +" is saved..");
    }

    $scope.cancel=function()
    {
        window.location.href="EventDetails.html";
    }


})