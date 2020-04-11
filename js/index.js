$(document).ready(function() {
    var apiKey = "5bc82451636190abd9d7afe6fe9b20b5" // Enter the API key
    console.log(`state_info is: ${state_info}`) // Notice the templating here, use that when you form your url


    // TODO
    // Iterate over the state_info array and call the api for each state_name to get the current temperature
    // Example to call the api using state_name
    // This should be done inside the for loop
    function getFarenheitTemp(temp){
      return (9*temp/5)+32;
    }


    Object.keys(state_info).forEach((state, i) => {
      var currentState = state_info[state];
      //console.log(currentState);
      //console.log(state);
      var url =`https://api.weatherstack.com/forecast?access_key=${apiKey}&query=${currentState.lat},${currentState.lng}`;
      // console.log(state_obj.capital + " " + state_obj.lat + " " + state_obj.lng);
      $.ajax({url:url, dataType:"jsonp"}).then(function(data) {

        var temperature = getFarenheitTemp(data.current.temperature);
        //console.log(temperature);
        var stateSVG = document.getElementById(state);
        var tooltipstring = '<title>' + data.location.region+' || Temp: '+temperature +' F || Wind: '+data.current.wind_speed+' mph || Rain: '+data.current.precip+'% </title>';
        stateSVG.innerHTML = tooltipstring;
        // TODO
        // Fill in the RHS of the below line and uncomment it. Remember how we accessed the temperature in Lab 9. Remember to convert it into farenheit.
        // var temperature =
        var ternaryTemp = (temperature <= 10.0 ? "6495ED" : (temperature > 10.0 && temperature <= 20.0) ? "7FFFD4" : (temperature > 20.0 && temperature <= 30.0) ? "#0000FF" : (temperature > 30.0 && temperature <= 40.0) ? "#008B8B" : (temperature > 40.0 && temperature <= 50.0) ? "#00BFFF" : (temperature > 50.0 && temperature <= 60.0) ? "#F08080" : (temperature > 60.0 && temperature <= 70.0) ? "#CD5C5C" : (temperature > 70.0 && temperature <= 80.0) ? "#8B0000" : (temperature > 80.0 && temperature <= 90.0) ? "#B22222" : (temperature > 90.0) ? "#FF0000" : "#808080");
        //console.log(temperature)
        if(state == 'DC'){
          console.log(temperature);
        }
        //TODO
        // Default color gray
        // Create a series of if else blocks to set the color for the state based on the temperature
        // Less than equal to 10F	#6495ED
        // Between 11F and 20F	#7FFFD4
        // Between 21F and 30F	#0000FF
        // Between 31F and 40F	#008B8B
        // Between 41F and 50F	#00BFFF
        // Between 51F and 60F	#F08080
        // Between 61F and 70F	#CD5C5C
        // Between 71F and equal to 80F	#8B0000
        // Between 81F and equal to 90F	#B22222
        // Greater than 90F	#FF0000
        var stateName = document.getElementById(state);
        $('#'+state).css('fill', ternaryTemp);   // Example on how to fill colors for your state.
      });
    });
});
