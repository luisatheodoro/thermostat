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

    function updateTemperature() {
      $('#temperature').text(thermostat.temperature);
    };

});
