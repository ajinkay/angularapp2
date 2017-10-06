'use strict';
eventsApp.filter('duration',function(){

    return function(duration)
    {
        switch(duration)
        {
            case 1:
            return "one Hour";
            break;
            case 2: 
            return "Two Hour";
            break;
            
            case 3: 
            return "Two Hour";
            break;

            default:
            return "full day";
            break;


        }


    }


})

