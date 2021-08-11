 showLegend = true;  // default value showing the legend

    var toggleLegend = function(){
        if(showLegend === true){
        /* use jquery to select your DOM elements that has the class 'legend' */
           $('.legend').hide(); 
           showLegend = false; 
        }else{
           $('.legend').show();
           showLegend = true; 
        }
    }