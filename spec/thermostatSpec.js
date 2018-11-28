describe('Thermostat', function() {
    var thermostat;

    beforeEach(function() {
        thermostat = new Thermostat();
    });

    describe('Temperature',function() {
        it('Can change the default temparature', function() {
            thermostat.changeDefaultTemperature(30);
            expect(thermostat.temperature).toEqual(30);
        });

        it('Can increase temperature', function() {
            thermostat.increaseTemperature();
            expect(thermostat.temperature).toEqual(21);
        });

        it('Can decrease temperature', function() {
            thermostat.decreaseTemperature();
            expect(thermostat.temperature).toEqual(19);
        });

        it('Can change the minimum temperature', function() {
            thermostat.changeMinimumTemperature(15);
            expect(thermostat.minTemperature).toEqual(15);
        });

        it('Can change the maximum temperature', function() {
            thermostat.changeMaximumTemperature(30);
            expect(thermostat.maxTemperature).toEqual(30);
        });

        it('Change maximum temperature to 32 when power saving is off', function () {
            thermostat.setPowerSavingOff();
            expect(thermostat.maxTemperature).toEqual(32);
        });

        it('Change isPowerSaving to false', function () {
            thermostat.setPowerSavingOff();
            expect(thermostat.isPowerSaving).toEqual(false);
        });

        it('Change maximum temperature to 25 when power saving is on', function() {
            thermostat.setPowerSavingOff();
            thermostat.setPowerSavingOn();
            expect(thermostat.maxTemperature).toEqual(25);
        });

        it('Change isPowerSaving to true', function () {
            thermostat.setPowerSavingOff();
            thermostat.setPowerSavingOn();
            expect(thermostat.isPowerSaving).toEqual(true);
        });

    });
});
