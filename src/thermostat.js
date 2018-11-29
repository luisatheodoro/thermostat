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
    if (this.temperature < this.maxTemperature) {
        this.temperature++;
    }
};

Thermostat.prototype.decreaseTemperature = function() {
    if (this.temperature > this.minTemperature) {
        this.temperature--;
    }
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
};

Thermostat.prototype.resetTemperature = function() {
  this.temperature = 20;
};

Thermostat.prototype.energyUsage = function () {
  if (this.temperature < 18) {
      return 'low-usage';
  }else if (this.temperature < 25) {
      return 'medium-usage';
  }else {
      return 'high-usage';
  }
};
