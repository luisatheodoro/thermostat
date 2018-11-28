$( document ).ready(function() {
    var thermostat = new Thermostat();
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


    function updateTemperature() {
      $('#temperature').text(thermostat.temperature);
    }

});
