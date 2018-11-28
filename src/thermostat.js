var Thermostat = function () {
    this.temperature = 20;
    this.minTemperature = 10;
};

Thermostat.prototype.changeDefaultTemperature = function(temperature) {
    this.temperature = temperature;
};

Thermostat.prototype.increaseTemperature = function() {
    this.temperature++;
};

Thermostat.prototype.decreaseTemperature = function() {
    this.temperature--;
};

Thermostat.prototype.changeMinimumTemperature = function(temperature) {
    this.minTemperature = temperature;
};
