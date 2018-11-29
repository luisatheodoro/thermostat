$( document ).ready(function() {
    var thermostat = new Thermostat();
    $('#power-saving').text('on');
    displayWeather('London');
    updateTemperature();


    $('#temp-up').on('click', function() { // event listener
        thermostat.increaseTemperature(); // update model
        updateTemperature(); // update view
    });

    $('#temp-down').on('click', function() { // event listener
        thermostat.decreaseTemperature(); // update model
        updateTemperature(); // update view
    });

    $('#temp-reset').on('click', function() { // event listener
        thermostat.resetTemperature(); // update model
        updateTemperature(); // update view
    });

    $('#psm-on').on('click', function() { // event listener
        thermostat.setPowerSavingOn(); // update model
        $('#power-saving').text('on');
        updateTemperature(); // update view
    });

    $('#psm-off').on('click', function() { // event listener
        thermostat.setPowerSavingOff(); // update model
        $('#power-saving').text('off');
        updateTemperature(); // update view
    });

    $('.switch').on('click', function() { // event listener
        if (thermostat.isPowerSaving === true) {
            thermostat.setPowerSavingOff();
            $('#power-saving').text('off');
        }else{
            thermostat.setPowerSavingOn();
            $('#power-saving').text('on');
        }
        updateTemperature(); // update view
    });

    function displayWeather(city) {
        var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
        var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
        var units = '&units=metric';
        $.get(url + token + units, function (data) {
            $('#current-temperature').text(data.main.temp);
        })
    }

    $('#current-city').change(function() {
        var city = $('#current-city').val();
        displayWeather(city);
    });

    function updateTemperature() {
      $('#temperature').text(thermostat.temperature);
      $('#temperature').attr('class', thermostat.energyUsage());
    }

});
