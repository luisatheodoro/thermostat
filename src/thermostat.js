var Thermostat = function () {
    this.temperature = 20;
    this.minTemperature = 10;
    this.maxTemperature = 25;
    this.isPowerSaving = true;
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

Thermostat.prototype.changeMaximumTemperature = function(temperature) {
    this.maxTemperature = temperature;
};

Thermostat.prototype.setPowerSavingOff = function () {
  this.maxTemperature = 32;
  this.isPowerSaving = false;
};

Thermostat.prototype.setPowerSavingOn = function() {
  this.maxTemperature = 25;
  this.isPowerSaving = true;
}

Thermostat.prototype.resetTemperature = function() {
  this.temperature = 20;
}
