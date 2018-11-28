var Thermostat = function () {
    this.temperature = 20
};

Thermostat.prototype.changeDefaultTemperature = function(temperature) {
    this.temperature = temperature;
};

Thermostat.prototype.increaseTemperature = function() {
    this.temperature++;
};
